// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================

// !        1. YÖNTEM  :     FUNTION DECLARATION

function yazdır() {
  console.log("alperen sozkeser");
}

yazdır(); // fonksiyonu çağırdık function call

// örnek: parametreli function

function adYazdır(ad, yas) {
  console.log(`adınız ${ad} yaşınız ${yas} 'dır.`);
}

adYazdır("alperen", 26);

function yasHesapla(dogum) {
  return 2021 - dogum;
}

console.log(`yaşınız ${yasHesapla(1994)}`);

// klavyeden girilen tek veya çift olduğunu döndüren bir fonction yazınız

const sayı = prompt("bir sayı giriniz ");
function tekMiCiftMi(sayı) {
  const sonuç = sayı % 2 == 0 ? `${sayı} çifttir` : `${sayı} tektir`;
  return sonuç;
}

console.log(tekMiCiftMi(sayı));

// !            2. YÖNTEM:   FUNCTİON EXPRESSİON

//* Avantajlari :
//* 1) Programciyi once fonksiyonlarin tanimlanmasi, sonra kullanilmasina zorladigi icin aslinda daha duzenli ve daha
//* anlasilir kod yazmaya olanak saglamaktadir.
//* 2) Fonksiyonlarin ve degerlerin degiskenlerde saklanmasini gerektirmektedir. Bu da daha sade bir kodlama demektir.

const tekCift1 = function (sayı) {
  return sayı % 2 == 0 ? "ÇİFT" : "TEK";
};

console.log(tekCift1(5));

// örnek: büyük sayıyı bulunuz

let buyukBul = function (x, y, z) {
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > x && y > z) {
    enBuyuk = y;
  } else if (z > x && z > y) {
    enBuyuk = z;
  }
  return enBuyuk;
};

console.log(`En büyük ${buyukBul(5, 3, 8)}`);

// !  3.YÖNTEM : ARROW FONKSİYONLAR

const topla = (a, b) => a + b;

console.log(topla(5, 2)); // 7


const ciftMi=(sayı) => sayı%2==0 ? "çift" : "tek";
console.log(ciftMi(5));


// Ornek: Us alma
const taban = prompt("taban giriniz");
const us = prompt("us giriniz");
const usAl = (t, u) => t ** u;
console.log(usAl(taban, us));

// ornek : menü 

//*Ok fonksiyonunda birden fazla ifade var ise fonksiyonda süslü parantez kullanmamız gerekir 

const menu = () => {
  console.log("===============================");
  console.log("      JAVASCRIPT DERSI         ");
  console.log("===============================");
};
menu();


// Ornek: 3 parametreli bir arrow fonksiyon oluşturunuz

// 1. yöntem 
const bilgiVer=(ad,soyad,tarih)=>{
 const bilgi=console.log(`adınız ${ad} soyadınız ${soyad} ve yaşınız${2021-tarih}' dir`);
 return bilgi;

};

console.log(bilgiVer("alperen","sozkeser",1994));


/* 2. yöntem

const bilgiVer=(ad,soyad,tarih)=>`adınız ${ad} soyadınız ${soyad} ve yaşınız${2021-tarih}' dir`;   şeklinde de yazılabiilir.*/
 
// Örnek: Daire alanı hesaplama 


const r=prompt("yarıçapı giriniz");
const h =prompt("yükseklik giriiniz");

const hacim = (r, h) =>Math.PI * r * r * h;
  console.log(`yarıçapı ${r} yüksekliği ${h} olan silindiiri1n hacmi: ${hacim(r,h)} 'dir`
  );

  const hacimHesapla = (r, h) => Math.PI * r * r * h;
  // * En yakın sayiya yuvarlar.
  console.log("Silindir Hacmi:" + Math.round(hacimHesapla(r, h)));
  // * Virgulden sonra 2 basamak alir.
  console.log("Silindir Hacmi:" + hacimHesapla(r, h).toFixed(2));
  // bu method ile virgüllü devam eden kısım istediğimiz terde kesmemizi sağlıyor.
  

