function tri(numbers, order) {
    var length = numbers.length;
  
    for (var i = 0; i < length - 1; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (order === "asc") {
          if (numbers[j] > numbers[j + 1]) {
            var temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
          }
        } else if (order === "desc") {
          if (numbers[j] < numbers[j + 1]) {
            var temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
          }
        }
      }
    }
  
    return numbers;
  }
  
  // Exemple d'utilisation de la fonction tri
  var numbers = [8, 3, 6, 2, 9, 1, 5, 4, 7];
  var orderedNumbers = tri(numbers, "asc");
  console.log(orderedNumbers); // Affiche [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  orderedNumbers = tri(numbers, "desc");
  console.log(orderedNumbers); // Affiche [9, 8, 7, 6, 5, 4, 3, 2, 1]
  