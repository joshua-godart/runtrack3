function sommenombrespremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
      return nombre1 + nombre2;
    } else {
      return false;
    }
  }
  
  // Fonction pour vérifier si un nombre est premier
  function estNombrePremier(nombre) {
    if (nombre < 2) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
      if (nombre % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Exemple d'utilisation de la fonction sommenombrespremiers
  var resultat = sommenombrespremiers(5, 7);
  console.log(resultat); // Affiche 12
  
  resultat = sommenombrespremiers(4, 9);
  console.log(resultat); // Affiche false
  