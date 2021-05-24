// ================ GETELEMENTBYID() =================

const paragraf = document.getElementById("par");
paragraf.style.backgroundColor = "black";
paragraf.style.color = "white";
paragraf.style.fontFamily = "19px";

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.height = "25px";
buton.style.backgroundColor = "yellow";
buton.style.color = "black";
buton.style.fontSize = "17px";
buton.innerHTML = "ARA";

// ================ GETELEMENTSBYTAGNAME() =================

const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300px";
resim[0].style.border = "3px solid black";

// ================ GETELEMENTSBYCLASSNAME() =================

const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "black";
h1[0].style.textAlign = "center";

//================== QUERYSELECTOR() =========================

const tit = document.querySelector(".title");
tit.innerHTML = "DOM Selector🐱‍🏍👀🤦‍♂️😍❤😊💕🤦‍♂️😉😉😎";

const body = document.querySelector("#body");
body.style.backgroundImage = "Linear-gradient(grey,white)";

//====================== EVENTS ============================

// örnek1: mouse over, mouse out

document.querySelector(".h1").onmouseover = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "white";
  // h1.style.backgroundColor = "black";
};

document.querySelector(".h1").onmouseout = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "black";
  // h1.style.backgroundColor = "white";
};

// addEvenListener()

document.querySelector("#btn").addEventListener("mouseover", function () {
  const buton = document.querySelector("#btn");
  buton.style.width = "150px";
});

document.querySelector("#btn").addEventListener("mouseout", () => {
  const buton = document.querySelector("#btn");
  buton.style.width = "100px";
});
// burada ilk olarak event'ı yazıyoruz sonra diğer parametre olarak fonksiyonu yazıyoruz.
