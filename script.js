var pierre = document.querySelector("#pierre");
var choixOrdi = Math.floor(Math.random() * 3);

pierre.addEventListener("click", function afficher() {
  document.getElementById("pierre2").src = "images/pierre.png";
  choixOrdi = Math.floor(Math.random() * 3);
  console.log(choixOrdi);
  console.log("nouvelle image");
  whoWinner();
});
var feuille = document.querySelector("#feuille");
feuille.addEventListener("click", function afficher() {
  document.getElementById("pierre2").src = "images/feuille.png";
  console.log("gjvkjdfk");
  choixOrdi = Math.floor(Math.random() * 3);
  console.log(choixOrdi);
  whoWinner();
});
var ciseaux = document.querySelector("#ciseaux");
ciseaux.addEventListener("click", function afficher() {
  document.getElementById("pierre2").src = "images/ciseaux.jpg";
  choixOrdi = Math.floor(Math.random() * 3);
  console.log(choixOrdi);
  console.log("nouvelle image");
  whoWinner();
});

/*var pierre = document.querySelector("#ciseaux");
pierre.addEventListener("click", function afficher() {
  document.getElementById("adversaire").src = "images/pierre.png";
  console.log("nouvelle image");
});

var feuille = document.querySelector("#pierre");
feuille.addEventListener("click", function afficher() {
  document.getElementById("adversaire").src = "images/feuille.png";
  console.log("gjvkjdfk");
});
var ciseaux = document.querySelector("#feuille");
ciseaux.addEventListener("click", function afficher() {
  document.getElementById("adversaire").src = "images/ciseaux.jpg";
});
*/
console.log(choixOrdi);
function whoWinner() {
  if (choixOrdi === 0) {
    document.getElementById("#pierre");
    console.log("pierre");
    document.getElementById("adversaire").src = "images/pierre.png";
  } else if (choixOrdi === 1) {
    document.getElementById("#feuille");
    document.getElementById("adversaire").src = "images/ciseaux.jpg";

    console.log("feuille");
  } else if (choixOrdi === 2) {
    document.getElementById("#ciseaux");
    document.getElementById("adversaire").src = "images/feuille.png";
    console.log("ciseaux");
  }
}
