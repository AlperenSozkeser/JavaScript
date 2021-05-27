

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


// ================ FOR IN DÖNGÜSÜ ==================== 

const koordinatlar = [120, 100, -100, 220, 330];
let negatifler = 0;
let pozitifler = 0;


for (let i in koordinatlar) {
  koordinatlar[i] < 0 ? negatif++ : pozitif++;
}


console.log(
  `Negatif Koordinat Sayısı : ${negatifler} Pozitif Koordinat Sayısı : ${pozitifler} `
);


// for ın döngüsü özellikle arraylerde ve nesnelerde dolaşabiliriz
//for of ile herşey üzerinde yanibir çok yerde kullanılabiir kullanım alanı geniştir
// En hızlı çalışan klasik for döngüsüdür
