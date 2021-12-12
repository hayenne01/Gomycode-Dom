const btnPlus = document.querySelectorAll(".btn-plus") ;
const qte = document.querySelectorAll(".quantity") ;
const prices = document.querySelectorAll(".prx") ;
const btnMinus = document.querySelectorAll(".btn-moin") ;
const btnLike = document.querySelectorAll(".btn-like")
const like = document.querySelectorAll(".fa-heart")
const btnDelete = Array.from(document.getElementsByClassName("btn-delete")) ;
const product = Array.from(document.getElementsByClassName("card")) ;
// --------------------------------------------------------------------
function totale() {
  const prices = document.querySelectorAll(".prx");
  const qte = document.querySelectorAll(".quantity");

  let somme = 0;
  for (let i = 0; i < prices.length; i++) {
    somme = somme + prices[i].innerHTML * qte[i].innerHTML;
  }
  document.getElementById("total-price").innerHTML = somme;
}
//----------------------------------------------------------------------
for (let i = 0; i <= btnPlus.length - 1; i++) {
  btnPlus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    totale();
  });
}
//-----------------------------------------------------------
for (let i = 0; i <= btnMinus.length - 1; i++) {
  btnMinus[i].addEventListener("click", function () {
    if (qte[i].innerHTML > 0) {
      qte[i].innerHTML--;
      totale();
    }
  });
}
//----------------------------------------------------------------------
for (let i = 0; i < btnDelete.length; i++) {
  btnDelete[i].addEventListener("click", function () {
    product[i].remove();
    totale();
  });
}
//----------------------------------------------------------------------
for (let i = 0; i < btnLike.length; i++) {
    btnLike[i].addEventListener("click" , function () {
        if (btnLike[i].style.color === "red") {
            btnLike[i].style.color = "black" ;
        } else {
            btnLike[i].style.color = "red";
        }
    });
    
}
