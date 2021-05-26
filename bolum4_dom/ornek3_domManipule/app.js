// aç butonuna her tıklandığında çalışır
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "img/lamba_on.gif";
};

document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "img/lamba_off.gif";
};

document.querySelector(".resim").onmouseover = function () {
  document.querySelector(".resim").src = "img/lamba_on.gif";
};

document.querySelector(".resim").onmouseout = function () {
  document.querySelector(".resim").src = "img/lamba_off.gif";
};

// klavyeden her bir tuşa basıldığında bu fonction tetiklenecek.
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");
  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};

const sonDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const text = document.createTextNode("Programlama Dilleri");
h1.appendChild(text); // burada içerisinde yazı olan bir h1 oluşturduk ve koyacağımız yeri belirleyip koymamız gerekir.
sonDiv.after(h1); //burada h1'i sonDivden sonra koyduk yada beforeda yapabilriz.
h1.className="yeni-h1";
//** burada class ismi verdik ve css'de yaptık stillendirmeyi ama istersek  burada da aşağıdaki gibi yapabiliriz.
// h1.style.marginTop = "20px";
// h1.style.color = "grey";
// h1.style.textAlign = "left";
// h1.style.marginBottom = "10px";

const ekle = (document.querySelector(".ekle").onclick = function () {
  // ekleme yapılacak elemanı aldım
  const liste = document.querySelector(".liste");
  // input elemanına girilen yeni değeri aldım
  const satır = document.querySelector(".dil").value;
  // girlen satırı eklemek için yeni bir li oluşturduk
  const yeniLi = document.createElement("li");
  // yeni li'nin içine yazılacak text nodu oluşturduk bu girlen satır
  yeniLi.appendChild(document.createTextNode(satır));
  // yeni eklenen satırı var olan listeye bağladık
  liste.appendChild(yeniLi);
});

document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");
  liste.removeChild(liste.lastElementChild); // son elemanı sil
  // liste.removeChild(liste.firstElementChild); llk elemanı sil
};
