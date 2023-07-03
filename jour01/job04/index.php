<!DOCTYPE html>
<!-- <html lang="en"> -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js"></script>
    <title>Document</title>
</head>
<body>
<?php
    // Inclusion du fichier script.js
    require_once 'script.js';
    // Utilisation de la fonction bisextile
    $annee = 2020;
    $estBisextile = bisextile($annee);

    if ($estBisextile) {
      echo "$annee est une année bissextile.";
    } else {
      echo "$annee n'est pas une année bissextile.";
    }
  ?>

</body>
</html>