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

/*  ========= LET==========
-Eğer değişkenimizin değişmesigerekiryorsa const yerine let kullanırız -Başlangıçta ilk değer atamasına gerek yoktur.
-Let block-Scorp bir değişkendir.
-Var ise global scope bir tanımlamadır ve class seviyesinde tanımlanması gerekir Eğer fonction için de kullanılırsa o zaman globalScope olmaz.*/

//? Block scope sadece tanımlı olduğu alanda geçerlidir.Var her yerde  geçerlidir. ikisi arasındaki fark budur.

let sayı;
console.log(sayı); // undefined
sayı=5.5;
console.log(sayı); // 5.5
console.log(typeof sayı); // number 

const dil=null;
console.log(dil); // null
console.log(typeof dil); // obect 



// ARİTMETİK OPERATORLER 

const sucuk =40,
const sakız =2;
const kola =5;
const toplamFiyat=sucuk+ sakız+cola;
toplamFiyat++; // 48
toplamFiyat+=50; // 98 olutr yazdırırsak 
console.log(toplamFiyat); // 47

console.log(toplamFiyat , kola); // birden faza değişkeni yazdırmak için arasına virgül konulur.


// + operatörü String birleştirme işlemi de gerçekleştirir.

const ad="alperen";
const soyisim=" sozkeser";
console.log(ad+soyisim); // alperen sozkeser


const s1=2, s2=7;

// ` ` işareti ES6 da String şablonları olarak geçer

/*
 console.log(`HARCAMA : ${ değişken} TL `)  burada backtıck kullanılır
 console.log("HARCAMA: " +değişken + TL ) şekilnde yazmak ile aynıdır
 */


 const ad1 ="alperen";
 const yas=55;

 console.log(`Benim adım ${ad1} yaşım ${yas} ' dir.`); 
  // benim adım alperen yaşım 55'dir. nasıl yazrsanız aynısı giibi yazılyor boşluklar falan  
  // console.log(`YAŞ: ${yıl-doğum tarihi}`);


  const taban=2;
  const us=4;
console.log(taban ** us); // 2 üzeri 4 sonucunu verir 16  ** ifardesi üs alır.


// ========= karşılaştırma operatörü=======

// == işareti veri tpii kontrol etmez sadece değerleri kotrol eder
// === iareti hem değer hem de veri tipi nin konrtol eder.

// 0 , false ,null ,undefined , "" , NaN  ifadeleri false kabul edilir. 


// ============ TERNARY ==========
const name1=prompt("isminizi giriniz");
const age = prompt("yaşınızı giriniz : " );
console.log("yaşınız : " + age );
 
// burada biz kullanıcıdan yaş girmesini istedik 
// veri girişlerinin çoğunu string kabul eder ama biz sayıya çevirmek istersek ya prompt fonc başına + koyarız veya Number (prompt()) şeklinde yapabiliriz 

(age>=18) ? console.log("ehliyet alabilir") : console.log("ehliyet aalamaz");

const result =(age>=18) ? `${name1} ehliyet alabilir ` : `${name1} ehliyet alamaz`; 












