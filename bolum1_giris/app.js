console.log("hello JavaScript") ;

console.log("java Script Java'dan kolay bir dildir.");

console.error("bu bir hatadır");
// bunu yaparsak biz hata bildirmiş oluruz.

console.warn("bu bir uyarıdır");
// bunu yaptığımız da uyarı veriyoruz

alert("dikkat et");
// kullanıcıya bilgi vermek için kullanıyoruz 

console.log("alperen");


/*
iki tür eri tipi vardır
1- nesne 
2-ilkel veri tipleri 
  - number
  -String
  -Boolean
  -Undefined
  -Null
  -Symbol
  -BigInt
*/

// Modern JS ile let ve const geldi öncesinde  sadece var kullanıyordu Bunlar değişken tanımlama keyword'dür.

// ** ================= DEĞİŞKEN TANIMLAMA===================== 

var pi=3.14;
console.log(pi);
console.log(typeof pi); // çıktı olarak number aldık.

pi="3";
console.log(pi);
console.log(typeof pi );

pi=true;
console.log(pi);
console.log(typeof pi);


var isim="Alperen";
console.log(isim);
console.log(typeof isim);


isim=4;
console.log(isim);
console.log(typeof isim);

// var keyword ile değişken tanımlanabilir ancak modern JS ile var keyword'ünün kullanımı azaldı.Çünkü var global bir değişken gibi düşünülüyor.

// biz const ve let yeni değişken tanımlama keyword'leridir 

// const sadece başlangıçta değer atanır ve sonradan değiştirilmez (non-primitive data türleri hariç ).Başlangıçta da değer atamazsak hata verir.

// let var değişkeninin local halidir 

const piSayısı=5;
console.log(piSayısı);







