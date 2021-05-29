// ============== FOR DÖNGÜSÜ ======================

const koordinatlar = [120, 100, -100, 220, 330];
let negatifler = 0;
let pozitifler = 0;

for (let i = 0; i < koordinatlar.length; i++) {
  koordinatlar[i] < 0 ? negatifler++ : pozitifler++;
}

console.log(
  `Negatif Koordinat Sayısı : ${negatifler} Pozitif Koordinat Sayısı : ${pozitifler} `
);

// ** ================ FOR IN DÖNGÜSÜ ====================

// deve
// for (let i in koordinatlar) {
//   koordinatlar[i] < 0 ? negatif++ : pozitif++;
// }

console.log(
  `Negatif Koordinat Sayısı : ${negatifler} Pozitif Koordinat Sayısı : ${pozitifler} `
);

// for ın döngüsü özellikle arraylerde ve nesnelerde dolaşabiliriz
//for of ile herşey üzerinde yanibir çok yerde kullanılabiir kullanım alanı geniştir
// En hızlı çalışan klasik for döngüsüdür

// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin bir dizide
// saklandığı varsayalım.Bu hayvanları türüne göre aramamızı sağlayacak
// ve o türden kaç adet bulunduğu ana programa döndürecek fonksiyonu
// yazınız. Eğer o türden bir hayvan yok ise bulunamdığını yazdırsın.

const hayvanlar = ["fil", "deve", "kuş", "fare", "kedi", "deve", "köpek"];
//const ara = prompt("aramak istenilen hayvan türünü giriiniz!!").toLowerCase();
const ara = "fil";
const bulDondur = function (ara) {
  let hayvanSayısı = 0;
  for (const i in hayvanlar) {
    if (hayvanlar[i] == ara) {
      hayvanSayısı++;
    }
  }
  return hayvanSayısı;
};

const sayı = bulDondur(ara);

sayı == 0
  ? console.log("Aradığınız hayvan bulunamadı.")
  : console.log(`Aradığınız ${ara}'den ${sayı} tane bulunmaktadır`);

//========================== FOR OF =====================

// for of döngüsü for in döngüsünün birden fazla bakımdan güncellenmiş ve genişletilmiş halidir.

let arabalar = ["BMW", "Mini", "Volvo"];
let yazı = "";

// bu döngüde direkt i yazarak yazdırabildik ama for ın de arabalar[i] yazmak
for (const i of arabalar) {
  console.log(i);
  yazı += i + " ";
}
console.log(yazı);

//===================== FOREACH DONGUSU =================

let ogrenciler = ["ali", "veli", "can"];

ogrenciler.forEach(yazdır);

function yazdır(x) {
  console.log(x);
}

// 2.yöntem
ogrenciler.forEach((x) => console.log(x));

// Ornek1:fiyatların toplamını yazdırınız

const fiyatlar = [200, 300, 125, 450, 333, 123];
let t = 0;
fiyatlar.forEach((x) => (t += x));
console.log(t);
document.querySelector(".toplam").innerHTML = t;

// forEach (değer,indis,dizi)
// forEach döngüsü her zaman bir tane parametre almaz 3 tane parametre de alabilir
// Burada  sıra önemlidir.  ===>  (değer , indis ,dizi)
// Ama forEach için kısa olması daha mantıklıdır bunun için yapıyoruz

t = 0;
fiyatlar.forEach((x, i, d) => {
  t += x;
  console.log(`${i}. iteration : ${t} `);
});
console.log(t);
document.querySelector(".toplam").innerHTML = t;

// sonuç alarak bunu alırız
// 0. iteration : 200
// 1. iteration : 500
//  2. iteration : 625
//  3. iteration : 1075
//  4. iteration : 1408
//  5. iteration : 1531

// ornek2: fiyatlar dizisinde ki fiyatlara %10 zam yapıp tekrar bir dizi oluşturun.

const yeniDizi = [];
fiyatlar.forEach((x, i) => (yeniDizi[i] = (x * 1.1).toFixed(2)));
console.log(`Güncellenmiş fiyatlar : ${yeniDizi}`);

// ==================== MAP METHODU ====================

// ornek : dizinin her bir elemanının iki katını alınız.
const rakamlar = [3, 5, 3, 2, 6, 7, 9];

const ikiKat = rakamlar.map((x) => x * 2);

console.log(ikiKat, rakamlar); // burada iki diziyide yazdırırız

// ornek : isimler dizisinin içerisinde ki her ismi büyük harf olarak yeni bir diziye saklayalım

const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

const buyuk = isimler.map((x) => x.toUpperCase());
console.log(buyuk); // burada butuk harfli  yeni dizi oluştu

buyuk.forEach((i) => console.log(i)); // forEach ile de hepsini tek tek yazdırdık

// ya da bu şşekilde yazdırıp hepsini forEach ile yazdıabiiriz ama bu sefer map ile yazdırılan kısmı göremeyiz
// const buyuk = isimler
//   .map((x) => x.toUpperCase())
//   .forEach((i) => console.log(i));

// ornek:  Dolar / euro parite hesap

tlFiyatlar = [120, 340, 550, 245, 322.5, 789];

const dolarKur = document.querySelector(".dolar");
const yuroKur = document.querySelector(".yuro");
const dolar = document.querySelector(".dolar-fiyat");
const yuro = document.querySelector(".yuro-fiyat");

dolarKur.onchange = function () {
  dolarKur < 0
    ? alert("Dolar 0' dan küçük olamaz")
    : (dolar.innerHTML = tlFiyatlar.map((tl) =>
        Math.round(tl / dolarKur.value)
      ));
};

yuroKur.onchange = function () {
  yuroKur < 0
    ? alert("Euro 0' dan küçük olamaz")
    : (yuro.innerHTML = tlFiyatlar.map((tl) => Math.round(tl / yuroKur.value)));
};

// tlFiyatlar dizisideki ürün fiyatlarının 250 tl altında olanlara %10 zam , üstünde olanlarına da %20 zam yapılmak isteniyor.

// Arrow fonk. süslü parantez kullanılıyorsa biz return yapmamız gerekiyor.
const zamlıTlFiyatlar = tlFiyatlar.map((deger, indis) => {
  if (deger < 250) {
    return `${indis + 1}. ürünün zamlı fiyatı : ${deger * 1.1}`;
  } else {
    return `${indis + 1}. ürünün zamlı fiyatı : ${deger * 1.2}`;
  }
});
console.log(zamlıTlFiyatlar); // Buradan biz "1. ürünün zamlı fiyatı : 132 "

document.querySelector(".zamli-fiyat").innerHTML = zamlıTlFiyatlar;
console.log(zamlıTlFiyatlar);


// ==================== filter() Methodu ==============

// tlFiyatlar listesinde fiyatı 250 TL den az olanlari ayri bir diziye saklayalim.
const kucuk250 = tlFiyatlar.filter((d) => d < 250);
console.log(kucuk250);


//fiyati 350 küçük olanlari yazdiriniz.
tlFiyatlar.filter((d) => d < 350).forEach((x) => console.log(x));


// Küçükten büyüğe sıralama
console.log(tlFiyatlar.sort((a, b) => a - b));


// Büyükten küçüğe  sıralama
console.log(tlFiyatlar.sort((a, b) => b - a));

