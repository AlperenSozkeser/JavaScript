// ====================== NESNELER (OBJECTS) ==========================

// js nesneler java dan mapları andırır.Key value structure vardır
// Diziler sıralı bellek bölgeleridir.Dolaysısıyla dizlerer erişim indisleme ile yapılır
// Sıralı belleklere (structred) ihtiyaç varsa dizi kullanmak mantıklıdır.

// Eğer veriler kompleks ise o zaman dizilerde erişim güçlüğü ortaya çıkıyor

//** OBJECT

// Nesnelerde Key-value (property-value) yapısı kullanılır.
// Nesnelerde aradığımız veriye erişmek için property adını kullanmak yeterlidir.

// Object tanımlamanın 4 farklı yöntemi vardır.En çok kullanılan literal yön.

const insan = {
  ad: "Can",
  soyad: "Yilmaz",
  yas: 30,
  meslek: "developer",
  diller: ["Java", "JS", "C++", "SQL", "Phyton"],
};

console.log(insan); // object clasından inherit oluyor ve oranın özelliklerini kullanabiliyoruz herhangi bir ınheritance yapmamamıza rağmen

// insan nesnesinden bir veriye  erişmek istersek

console.log(insan.ad); // Can alırız

// 2.Yöntem (kçşeli parantez erişimi)
//Avantajı köşeli parantez içerisine bir expresion yazılabilir.
console.log(insan["ad"]); // Can alırız

const yazı = "Adım :";
console.log(`${yazı} ${insan.ad}'dır.Yaşım ${insan.yas}'dur `);
// Adım : Can'dır.Yaşım 30'dur  çıktısı alırız

// const bilgiSecimi = prompt(
//   "isteiğin bilgiyi yazınız (ad soyad yas meslek ve diller)"
// );

// if (insan[bilgiSecimi]) {
//   console.log(insan[bilgiSecimi]);
// } else {
//   console.log("yanlış seçim lütfen tekrar giriniz ");
// }

//Sonradan  yeni bilgiler eklemek için
insan.konum = "Türkiye";
insan.email = "insan@gmail.com";
insan["dogum tarihi"] = 1994;

console.log(insan);

// ==================== Nesne Methodları ==================

// bir nesne içerisinde fonsksiyornlarda kullanılabilir buna biz nesne met. den

const kisi = {
  ad: "alperen",
  soyad: "sozkeser",
  dogumTarihi: 1994,
  meslek: "developer",
  tool: "Selenium",
  ehliyet: true,
  yasHesapla: function () {
    console.log(this); // ne olduğuu görmek için bakıyoruzBurada bize kisi nesnesini dönderdi.
    return new Date().getFullYear() - this.dogumTarihi;
  },
  ozet: function () {
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasındadır. Mesleği ${
      this.meslek
    } 'lıktır`;
  },
};
const tarih = new Date();

console.log(kisi.yasHesapla());
console.log(kisi.ozet());


// ======================================================
//                  Nesne Iterasyon Ornekleri
// ======================================================




const kisiler = [
  {
    ad: "mustafa",
    soyad: "can",
    meslek: "developer",
    yas: 20,
  },
  {
    ad: "ayse",
    soyad: "yilmaz",
    meslek: "tester",
    yas: 25,
  },
  {
    ad: "canan",
    soyad: "ari",
    meslek: "grafiker",
    yas: 35,
  },
  {
    ad: "ali",
    soyad: "veli",
    meslek: "team lead",
    yas: 26,
  },
  {
    ad: "ceren",
    soyad: "yilmaz",
    meslek: "developer",
    yas: 24,
  },
];
console.log(kisiler);


// ÖRNEK1: kisiler dizisindeki kisilerin mesleklerini konsola yazdiralim.
kisiler.forEach((x) => console.log(x.meslek));


//ÖRNEK2:kisiler dizisindeki tüm bireylerin yaşını bir arttırarak yeni bir diziye saklayiniz.
const yaslar = kisiler.map((x) => x.yas + 1);
console.log(yaslar);



// ÖRNEK3: kisiler dizisinindeki kişilerin isimlerini büyük harf olarak alan ve yaşlarini da 5 artıran yeni bir nesne oluşturan kodu yaziniz.
const buyukHarf = kisiler.map((x) => {
  return {
    ad: x.ad.toUpperCase(),
    yas: x.yas + 5,
    soyad: x.soyad,
  };
});
console.log(buyukHarf);



// ÖRNEK4: Yaşı 25' eşit veya küçük olanların adlarını yazdıran kodu yazınız.
kisiler.filter((x) => x.yas <= 25).forEach((a) => console.log(a.ad));



// ÖRNEK5: Mesleği developer olanların isim ve yaşlarını bir diziye kaydediniz.
const developer = kisiler
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return {
      ad: x.ad,
      yas: x.yas,
    };
  });
console.log(developer);



//ÖRNEK6: kisilerin ortalama yasini hesaplayiniz.
const ortalamaYas =
  kisiler.reduce((toplam, kisi) => toplam + kisi.yas, 0) / kisiler.length;
console.log(ortalamaYas);