// burada yorumlar dizisini başka bir file oluşturduk ve sayfanın sonuna export yapıyoruz sonra html sayfasına type="module" ekliyoruz script src elementi içine sonra kendi js sayfamızda import ediyoruz ve kullanabiliyoruz.
import yorumlar from "./data.js";


// Bilgilere erişelim

const resim = document.getElementById("kişi-resim");
const yazar = document.getElementById("yazar");
const açıklama = document.getElementById("açıklama");
const meslek = document.getElementById("meslek");

// Butonlara erişelim

const ileriBtn = document.querySelector(".ileri-btn");
const geriBtn = document.querySelector(".geri-btn");
const rastgeleBtn = document.querySelector(".rasgele-btn");

let index = 0;

const kişiyiGöster = function (index) {
  //yorumlar dizisinin 0. elemanını aldık ve bunu resim 'in src attrıbute 'üne atadık.
  const kişi = yorumlar[index];
  resim.src = kişi.resim;

  // text content ile innerhtml arasındaki fark
  // text content de sadece yazı gönderilir
  // ınnerhtml de biz html kodları kullanabiliyoruz.
  // meslek.innerHTML=`<li>merhaba</li>` gibi
  yazar.textContent = kişi.ad;
  meslek.innerHTML = kişi.meslek;
  açıklama.textContent = kişi.yorum;
};

kişiyiGöster(index);

ileriBtn.onclick = function () {
  index++;
  if (index > yorumlar.length - 1) {
    index = 0;
  }
  kişiyiGöster(index);
};

geriBtn.onclick = function () {
  index--;
  if (index < 0) {
    index = yorumlar.length - 1;
  }
  kişiyiGöster(index);
};

rastgeleBtn.onclick = function () {
  index = Math.floor(Math.random() * yorumlar.length);
  kişiyiGöster(index);
};
