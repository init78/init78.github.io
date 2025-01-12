# Siber Güvenliğe Başlamak istiyorum AMA... Rehberi

Öncelikle şunu şunu şunu yapayım bana direkt hap bilgiler içeren bir roadmap ver diyorsan şu aşağıdaki siteyi ziyaret etmelisin, ben yine de ne dediğine bir bakacağım diyorsan da yazdığımız yazıyı okuduktan sonra yine buraya bakmanı öneririm:

* https://roadmap.sh/cyber-security

## Giriş

Eveet, uzun, sabırlı ve kararlı olman gereken bir yolun başındasın. 

Hacking ve karşılığında oluşan Siber Güvenlik alanı bir giriş noktası değil. Öncelikle bunu bilmen gerekiyor. Burası bilişim sistemleri üzerinde belli bir hakimiyete geldikten sonra ilgilenmen gereken bir alan olmalı. Çünkü, Hacking'de yaptığımız şey aslında; programcının amacına uygun bir şekilde işlerini gerçekleştirmesi için tasarladığı bir sistemi amacı dışında kullanmaya çalışmak. Bu yüzden amacı dışında kullanma kısmına zıplamadan önce bilmen gereken şey bu sistemlerin amacını, özelliklerini, nasıl çalıştıklarını ve limitlerini anlamak olmalı. Yani bir şeyin nasıl çalıştığını bilmeden onu hackleyemezsin. Nasıl hacklendiğini bilmeden nasıl güvenli tutacağını bilemezsin. falan filan, ana fikri anladın.  

## Nereden Başlamalı?

Buna sık kullandığın sistemlerin nasıl çalıştığını araştırarak başlayabilirsin:

* Bilgisayarın nasıl çalışıyor? Açma tuşuna bastığından açılana kadar geçen sürede neler oluyor?
* İşletim sistemi, IP, Web, router, modem, server, browser vb gibi gündelik hayatta duyduğun kavramların ne olduğunu aslında biliyor musun? Bunların nasıl çalıştıklarını öğren. 
* Browser'ının URL çubuğuna bir adres yazıp enter'a bastığında arka planda neler oluyor?
* Bir exe dosyasını çift tıklayıp çalıştırdığında arka planda neler gerçekleşiyor?
* Evindeki kablosuz ağı düşün. Modeme bağlı telefonun, bilgisayarın, televizyonun var. Bu cihazlar birbirleriyle nasıl haberleşiyor? Modem çökerse ne olur? Telefonun 4G'ye geçtiğinde veri akışı nasıl değişiyor? İşte bu sorular seni network'ün temellerine götürecek. Sonra "Bu ağı nasıl güvenli tutarım?" sorusu gelecek, bu da seni güvenlik duvarları, şifreleme, port'lar gibi konulara yönlendirecek.

Bu gibi soruları merak ederek cevaplarını öğrenene kadar internet üzerinde araştırma yaparak başlayabilirsin mesela. Bunlardan bir tanesinin cevabını öğrenirken sende bir başka sorunun kapısını açacak. Sonra bir başka cevap, bir başka soru, bir başka cevap. Bunlar kavram hazineni geliştirecek. Burada öğrenmen gereken sadece bilgisayarla ilgili teknik bilgiler değil. Aynı zamanda kendi kendine araştırma yapma yeteneklerini, hangi bilgiyi nerede nasıl bulacağın ve nasıl öğreneceğine dair yeteneklerini ve kendi öğrenme yöntemlerini de geliştireceksin ki bunlar ilerdeki sürecin için lazım olacak teknik bilgiler kadar önemli tecrübler olacak. 

## Sık Sorulan Sorular

<details>
<summary>🔍 Başlamam gereken en doğru yer neresi?</summary>

Temel networkten mi, Linux öğrenerek mi, programlama dili öğrenerek mi hangisi doğru başlangıç noktası?

Bunun en doğru cevabı bir yerden başlaman. Bunun bir doğru yolu yok. Bir müfredatla öğrenmeliyim bunun en verimli yolu budur, onu arayıp bulmalıyım diye düşünüyorsan burası için çok doğru değil bu. En iyi yolu, en rahat hissettiğin şeyden öğrenmeye başlayıp kavram ve bilgi hazineni genişletmen.
</details>

<details>
<summary>❓ Peki bunun neden doğru bir yolu yok?</summary>

Çünkü bu bilgiler bir ağaç yapısı şeklinde birbirinden türeyen şeyler değiller, bir daire yapısı gibi birbiri ile ilişkili şeyler. Linux öğrenirken bunun network'e dokunduğu noktalar olacak, network öğrenirken programlamaya, programlama öğrenirken işletim sistemine, linux'e... Bunlar bir ortak kök noktasından türeyip kökü anlayınca devamını pürüzsüz olarak anlayacağın bir sıralamada değil, birbiri ile ilişkili olan kavramların bir döngüsü. 

İkinci olarak, her öğrendiğin bilgi, öğrendiğin bağlama bağlı olarak sende bir bakış açısı oluşturacak. Bu bakış açının farklı olması senin en değerli hazinelerinden biri olacak. ilerde bir programı "amacı dışında kullanmaya" çalışırken parlak fikirler oluşturabilmenin temel dinamosu standart bir müfredattan geçmemiş olman olur. Öğrenirken kendine kazandırdığın farklı bilgiler seni farklı ve özel kılar.
</details>

<details>
<summary>📚 Nereden kaynak bulabilirim?</summary>

Google. Şuan bulunduğun seviye için, Google'dan hemen her şeyi bulabilirsin. Merak ettiğin, araştırdığın konularla ilgili anahtar kelimeleri google'a yazarak çıkan sonuçları okuyacaksın. okuyacaksın. okuyacakasın, daha fazla okuyacaksın. Okumayı sevmiyorsan burada ilerlemen çok zor.

Bunlar dışında udemy'den veya youtube'dan security'nin hikayesine dair bir izlenim edinmek için kursları izleyebilirsin. Ama unutma, temel bilgilerin olmadan oradan öğreneceklerin senin için "hikayeye dair izlenimden" fazlası olmayacak.

Bunlar dışında da grupta ve güncellenecek buradaki repomuzda ilgini çekecek birçok kaynak var.
</details>

<details>
<summary>👥 Madem ki her şeyi Google'dan öğrenebilirim, bu topluluk neden var?</summary>

Çünkü konu sadece bilgiye erişmek değil. Eriştiğiniz bilginin doğru olup olmadığını kontrol etmek, o bilginin üzerinde fikir yürütmek, ilgi alanınız aynı konular üzerine olan insanları bulmak ve onlarla tanışmak, yaşadığınız sorunları paylaşmak ve hatta karşılaşmadığınız sorunlarla karşılaşan insanların sorunlarını çözmeye çalışarak yeni şeyler öğrenmenin kapısını açmak için bir topluluk gerekli ve biz bunu canlı tutmaya çalışıyoruz.
</details>

<details>
<summary>💻 Programlama dili bilmek zorunda mıyım?</summary>

Programlama dediğimiz şey temelde; istediğimiz bir şeyi bilgisayara yaptırabilmek için onun dilinden konuşmak. Bir şeyi bilgisayara yaptırmak istiyorsak ona bunu bir programlama dili ile kodlayarak anlatıyoruz ve o yapıyor. Haliyle programlama dili bilirsen bilgisayarı kullanırsın. Bilgisayar senin dediğini yapar. Aksi durumda sen bilgisayardaki daha önceden kodlanmış şeyleri kullanmakla sınırlı durumdasındır. Onları aşamazsın, onlar hangi yeteneklere sahipse onlara sahipsin.

Mesela şöyle düşün: İnstagram'da gördüğün bir gönderiyi kaydetmek istiyorsun ama uygulama buna izin vermiyor. Bu noktada iki seçeneğin var:

1. Başkasının yazdığı hazır bir indirme uygulamasını kullanmak
2. Python gibi bir dil öğrenip kendi indirme programını yazmak

İlk seçenek kolay ama sınırlı. Ya program istediğin gibi çalışmıyorsa? Ya farklı bir platform için benzer bir şey yapmak istersen? İşte programlama bilmenin önemi burada ortaya çıkıyor. Kendi çözümünü üretebiliyorsun.
</details>

<details>
<summary>🌐 Hangi dili/dilleri bilmem gerekir?</summary>

Bu soru en iyi dondurma tadı nedir gibi bir soru aslında. Tamamen öznel. Programlama dili ile bilgisayara istediğimiz şeyi yaptırıyoruz. Tüm olayı bu. istediğimiz şeyi kolaylıkla yapacak olan diller var, bizi biraz daha uğraştırıp yaptıracak diller var. ama günün sonunda istediğin şeyi yapabilirsin. Bu yüzden en iyi dil yok. 

Bunu somut bir örnekle açıklayayım: Diyelim ki bir web sitesindeki güvenlik açığını test etmek istiyorsun.

* Python ile bunu hızlıca yapabilirsin. Requests kütüphanesi ile birkaç satırda istediğin sonuca ulaşırsın.
* C ile yazarsan daha çok uğraşırsın ama sistemin nasıl çalıştığını daha iyi anlarsın.

Hangisini seçeceğin senin hedefine bağlı. Hızlıca sonuç mu istiyorsun, yoksa derinlemesine öğrenmek mi?
</details>

## Pratik Öneriler

Kendine bir öğrenme laboratuvarı kur:

* Eski bir bilgisayara veya şuan kullandığın bilgisayarına bir çılgınlık yapıp Linux kur
* Basit bir ev networkü oluştur, bunun trafiğini incele
* Birkaç sanal makine çalıştır
* Kendi web siteni host et
* Basit bir dosya paylaşım sistemi kur

Bir şeyler bozulduğunda (ki bozulacak), onu fixlerken çok şey öğreneceksin. Hiçbir kurs veya kitap, kendi sistemini kurup onunla uğraşmanın yerini tutamaz.

Unutma, en iyi öğrenme yöntemi yaparak öğrenmektir. Okuduklarını mutlaka pratiğe dök. Küçük projeler geliştir. Zamanla daha kompleks sistemlere geçersin. Önemli olan sürekli pratik yapmak ve her hatandan bir şeyler öğrenmek.
