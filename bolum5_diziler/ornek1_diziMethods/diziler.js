const dogum = 1994;
const yaslar = [30, 25, 45];
const isimler = [
  "alperen",
  "yusuf",
  "alpaslan",
  "can",
  20,
  40,
  true,
  20.4,
  2021 - dogum,
  yaslar,
];

// burada dizi içine dizi bile koyabiliriz
// istersek dizi içinde işlem yapabiliriz ve bunu eleman alarak alabiliriz
// İçiçe kullanmada biraz karışık olabiliyor bundan dolayı pek tercih edilmez
console.log(isimler[isimler.length - 1][1]);
console.log(isimler[0]);

// dizimizin içerisinde değişiklik yaptık
console.log((isimler[3] = "canan"));
console.log(isimler);

//Js 'de aynı diziye farklı veri tipinde eleman koyabiliriz

isimler[isimler.length - 2] = "false";

// ! kullandığımız değişken non-primitive ise const'u değişken olarak kullanırsak const'u değiştirebilriz ama bu primitive'ler için geçerli değildir.Bunun sebebi saklandığı yer ile ilgilidir

console.log(isimler);

//======================= DİZİYİ DEĞİŞTİREN METOLAR ===================

const h1 = document.querySelector("#meyveler");
let meyveler = ["elma", "Armut", "Muz"];

// burada biz h1 eiketinin içine innerHTML ile metveler dizisini yazdırdık

meyveler.pop(); // dizini son elemanını siler
meyveler.push("Çilek"); // sizinin sonuna bir eleman ekledik
meyveler.push("Kiraz", "Karpuz"); // istersek birden fazla eleman da ekleyebiliriz.Ekleme sonrasında bize eleman sayısını döndürür.
meyveler.reverse(); // diziyi terse çevirir
meyveler.shift(); // dizinin ilk elemanını siler ve onu bize döndürür
meyveler.unshift("Karpuz"); // Dizinin 0. index'ine eleman ekler.Dizinin son eleman sayısını döndürür.
meyveler.push("Kavun");
meyveler.sort(); // Diziyi alfabetik olarak sıralar.Burada ASCII önemlidir.
meyveler.splice(1, 0, "Erik");
// Bir dizide araya veya bir elemanı silip onun yerine eleman eklemek için bu fonksiyon kullnaılır.
// bu tam olarak 1.indexe eleman ekle ikincisinde 0 eleman silinsin mi veya silinmesin mi eğer silmek istiyorsak 1 istemiyorsak 0 yaparız.

console.log(meyveler);
h1.innerHTML = meyveler;

//================ DİZİ ERİŞİM METOTLARI =======================

const sayılar = [3, 5, 2, "2", "Üç", 2, "beş", 5];
console.log(sayılar.includes(5)); // true döndürdü.içerisnde var mı diye baktı
console.log(sayılar.includes("5")); // false döner.

const İkiIndex = sayılar.indexOf(2);
console.log(İkiIndex); // 2 döndürdü.YAni ilk gördüğü ikinin indexini döndürdü.

const sayılar1 = sayılar.join();
console.log(sayılar1); // 3,5,2,2,Üç,2,beş,5 ,
// Join bizim dizimizi birleştirip String hale getirdi Aralarındaki virgül'ü kaldırmak istersek joın("") şeklinde yazarız.Veya istediğimiz neyse onu koyabiliriz.

const sayılar2 = sayılar.toString();
console.log(sayılar2);
// tostring() fonk. sadece dizi elemanlarına ,(virgül) koyarak birleştirir ve String yapar.

const arabalar = ["bmw", "audi", "mercedes", "ferrari", "anadol"];
const arabalar1 = arabalar.slice(2);
console.log(arabalar1); // (3) ["mercedes", "ferrari", "anadol"]
// bu fonk. ile biz verdiğimiz rakam ve sonrasını alıp yeni bir dizi oluşturuyor.

arabalar1.push("fiat"); // sonuna fiat ekledik.
console.log(arabalar1); //  ["mercedes", "ferrari", "anadol", "fiat"]

const arabalar2 = arabalar.slice(1, 3); // 1 dahil 3 dahil değil.
console.log(arabalar2); // ["audi", "mercedes"]

const yazılar=["a","b","ad","soyad","yas"];
const rakamlar=[3,5,1,4,7];
//biz sayılar ve rakamlar dizilerini birleştirip yeni bir dizi oluşturmak istiyorsak concat() kullanıyoruz.

const birlesik=yazılar.concat(rakamlar,true ,false);
console.log(birlesik); // (10) ["a", "b", "ad", "soyad", "yas", 3, 5, 1, 4, 7,true, false]] döndürdü.İlk hangisini yazarsak ilk o yazılır.







