$(document).ready(function() {
    // Array to store the correct order of images
    const correctOrder = ['img1/arc1.png', 'img1/arc2.png', 'img1/arc3.png', 'img1/arc4.png', 'img1/arc5.png', 'img1/arc6.png'];
  
    // Function to check if the images are in the correct order
    function checkOrder() {
      let currentOrder = [];
      $('#rainbow img').each(function() {
        currentOrder.push($(this).attr('src'));
      });
  
      if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
        $('#resultMessage').text('Vous avez gagné').css('color', 'green');
      } else {
        $('#resultMessage').text('Vous avez perdu').css('color', 'red');
      }
    }
  
    // Shuffle the images
    function shuffleImages() {
      const $images = $('#rainbow img');
      for (let i = 0; i < $images.length; i++) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        $images.eq(randomIndex).before($images.eq(i));
      }
    }
  
    // Click event for the shuffle button
    $('#shuffle').on('click', function() {
      shuffleImages();
      $('#resultMessage').text('').css('color', 'black');
    });
  
    // Click event for the images to move them to the correct position
    $('#rainbow img').on('click', function() {
      $(this).appendTo('#rainbow');
      checkOrder();
    });
  });
  