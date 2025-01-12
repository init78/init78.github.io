// Markdown-it instance'ını oluştur
const md = window.markdownit({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,

    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
        }
        return ''; // varsayılan vurgulama kullan
    }
}).use(window.markdownitEmoji);

// Blog verilerini config'den yükleme
async function loadBlogConfig() {
    try {
        const response = await fetch('/config/index.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Config yüklenirken hata:', error);
        return [];
    }
}

// Markdown dosyasını yükleme
async function loadMarkdownFile(filename) {
    try {
        const response = await fetch(`/blogs/${filename}`);
        const text = await response.text();
        return text;
    } catch (error) {
        console.error('Markdown dosyası yüklenirken hata:', error);
        return '';
    }
}

// Blog içeriğini parse etme
function parseMarkdown(markdown) {
    // Markdown metnini düzenle
    const formattedMarkdown = markdown
        // İki satır arasındaki boşlukları normalize et
        .replace(/\n\s*\n/g, '\n\n')
        // Windows satır sonlarını Unix formatına çevir
        .replace(/\r\n/g, '\n')
        // Tek satır sonlarını koruyarak paragraflara ayır
        .replace(/([^\n])\n([^\n])/g, '$1\n\n$2');

    // HTML olarak parse et
    const html = md.render(formattedMarkdown);

    // Paragraf aralarındaki boşlukları düzelt
    return html.replace(/<\/p><p>/g, '</p>\n\n<p>');
}

// Blog kartı oluşturma
function createBlogCard(title, excerpt, id) {
    return `
        <div class="blog-card">
            <h3>${title}</h3>
            <p>${excerpt}</p>
            <a href="#" onclick="showBlogPost('${id}'); return false;" class="read-more">Devamını Oku</a>
        </div>
    `;
}

// URL'deki hash'i kontrol etme ve ilgili blog yazısını gösterme
function checkHash() {
    const hash = window.location.hash;
    if (hash.startsWith('#post/')) {
        const blogId = hash.replace('#post/', '');
        showBlogPost(blogId);
    } else {
        renderBlogList();
    }
}

// Blog yazısını gösterme
async function showBlogPost(blogId) {
    const blogs = await loadBlogConfig();
    const blog = blogs.find(b => b.id === blogId);
    
    if (blog) {
        const markdown = await loadMarkdownFile(blog.file);
        const content = parseMarkdown(markdown);
        
        const mainContent = document.querySelector('.main-content');
        // Blog post görüntülenirken sidebar'ı fixed yap
        document.querySelector('.sidebar').classList.add('reading-mode');
        
        mainContent.innerHTML = `
            <div class="blog-post">
                ${content}
                <p class="back-link">
                    <a href="#" onclick="renderBlogList(); return false;">← Geri Dön</a>
                </p>
            </div>
        `;
        
        window.location.hash = `post/${blogId}`;
        
        // Kod bloklarını highlight et
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }
}

// Ana sayfadaki blog listesini oluşturma
async function renderBlogList() {
    // Blog listesine dönüldüğünde sidebar'ı normal moduna getir
    document.querySelector('.sidebar').classList.remove('reading-mode');
    
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <section id="blog-list">
            <h2>Son Yazılar</h2>
            <div class="blog-grid" id="blogContainer"></div>
        </section>
    `;

    const blogContainer = document.getElementById('blogContainer');
    if (!blogContainer) return;

    const blogs = await loadBlogConfig();
    
    for (const blog of blogs) {
        const markdown = await loadMarkdownFile(blog.file);
        const content = parseMarkdown(markdown);
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const firstParagraph = tempDiv.querySelector('p');
        const excerpt = firstParagraph ? firstParagraph.textContent.slice(0, 150) + '...' : '';
        
        const title = tempDiv.querySelector('h1') ? 
            tempDiv.querySelector('h1').textContent : 
            'Blog Yazısı';

        blogContainer.innerHTML += createBlogCard(title, excerpt, blog.id);
    }
    
    window.location.hash = '';
}

// Aktif menü öğesini güncelleme
function updateActiveMenuItem() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentHash = window.location.hash;
    
    navLinks.forEach(link => {
        if (currentHash === '' && link.getAttribute('href') === '/') {
            link.classList.add('active');
        } else if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Ana menü linklerine tıklandığında
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '/') {
            e.preventDefault();
            renderBlogList();
        }
    });
});

// Sayfa yüklendiğinde ve hash değiştiğinde
window.addEventListener('load', () => {
    checkHash();
    updateActiveMenuItem();
});

window.addEventListener('hashchange', () => {
    checkHash();
    updateActiveMenuItem();
});