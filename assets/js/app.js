//REVISIONS
// Declarez une variable nommée "boucler" contenant true
// Declarez un tableau members contenant Aida67, lapie002, anneserrano, Jennysmille, nunkabuk, RCosson, kaonb-ax, FerEmilie, crazychouwi, KiluaZoldyc, patatobeur, Sam11360, elo062, hermeline, Biciclet,
// SI la variable boucler vaut true ALORS
  // Bouclez sur le tableau que vous avez déclaré ci-dessus
  // Mttre un switch pour qu'au moment où la boucle se trouve sur votre pseudo cela ajoute "Affiche " devant votre pseudo dans la console et sur l'écran et par defaut seulement le pseudo des autres
// FIN REVISIONS
// COURS AJAX
  // AJAX Jquery .ajax() ou .get()
  // Faites une requete vers l'API REST de Github pour récupérer les informations de votre compte
// FIN COURS AJAX

var boucler = true;
var tableau = ["Aida67", "lapie002", "anneserrano", "Jennysmille", "nunkabuk", "RCosson", "kaonb-ax", "FerEmilie", "crazychouwi", "KiluaZoldyc", "patatobeur", "Sam11360", "elo062", "hermeline", "Biciclet",];
$("#check").click(function (){
  if (boucler == true) {
    for (var i = 0; i < tableau.length; i++) {
      switch (tableau[i]) {
        case "kaonb-ax":
          console.log("Affiche "+tableau[i]);
          $("#check").append( "<h5>Affiche "+tableau[i]+"</h5>" );
          break;
        default:
          $("#check").append( "<h5> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"+tableau[i]+"</h5>" );
          console.log("        "+tableau[i]);
          break;
      }
    }
  }
})
