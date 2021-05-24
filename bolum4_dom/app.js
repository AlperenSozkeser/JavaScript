// ! Class'lara erişim için .classAdı
// ! id 'li bir html eleanına erişim için ise #id yazarız

function hesapla() {
  const r = document.getElementById("r").value;
  const h = document.querySelector(".h").value;
  const sonuc = (Math.PI * r * r * h).toFixed(2);
  document.querySelector(".hacim").textContent = sonuc;
  //burada textcontent yerine  innerhtml  de yazabiliriz. 
}

const buton = document.querySelector(".btn");
buton.style.color = "red";
buton.style.backgroundColor = "black";
