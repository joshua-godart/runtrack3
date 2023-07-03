// script.js

function bisextile(annee) {
    // Vérification des conditions pour être bissextile
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }

  // Export de la fonction pour pouvoir l'utiliser dans d'autres fichiers
  moduleodule.exports = bisextile;