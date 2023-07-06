$(document).ready(function() {
  $('#filterBtn').click(function() {
    var id = $('#id').val();
    var name = $('#name').val();
    var type = $('#type').val();

    $.ajax({
      url: 'pokemon.json',
      dataType: 'json',
      success: function(data) {
        var filteredData = data.filter(function(pokemon) {
          if (id && pokemon.id != id) return false;
          if (name && !pokemon.name.toLowerCase().includes(name.toLowerCase())) return false;
          if (type && !pokemon.type.includes(type)) return false;
          return true;
        });

        displayResults(filteredData);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error(errorThrown);
      }
    });
  });

  function displayResults(data) {
    var resultsContainer = $('#results');
    resultsContainer.empty();

    if (data.length === 0) {
      resultsContainer.text('Aucun résultat trouvé.');
      return;
    }

    var list = $('<ul></ul>');
    data.forEach(function(pokemon) {
      var listItem = $('<li></li>').text('#' + pokemon.id + ' - ' + pokemon.name.english + ', ' + pokemon.name.french + ' (' + pokemon.type.join(', ') + ')');
      list.append(listItem);
    });

    resultsContainer.append(list);
  }
});

