function bisextile(annee) {
  if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Exemple d'utilisation de la fonction bisextile
var anneeTest = 2020;
var estBisextile = bisextile(anneeTest);
console.log(estBisextile); // Affiche true
