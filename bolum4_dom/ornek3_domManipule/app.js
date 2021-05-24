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
