document.getElementById('button').addEventListener('click', function() {
    fetch('expression.txt')
      .then(response => response.text())
      .then(data => {
        var paragraph = document.createElement('p');
        paragraph.textContent = data;
        document.getElementById('content').appendChild(paragraph);
      })
      .catch(error => console.error(error));
  });