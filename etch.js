$(document).ready(function() {

  

  var gridSize = 75;
  $('#frame')
    .css('width', gridSize + 'vh')
    .css('height', gridSize + 'vh');
  var color = '#000'

  function createGrid() {
    $('#frame').html('').css('background', '#fff');

    $('#num').val('36');
    var n = 36; //grid res

    for (var i = 0; i < (n * n); i++) {
      var square = document.createElement('div');
      $(square)
        .css('height', (gridSize / n) + 'vh')
        .css('width', (gridSize / n) + 'vh');
      $('#frame').append(square);
      $('#frame').css('outline', '1px solid #aaa');
    }


    $('#frame div').on('mousedown', function() {
      $(this).css('background', color);
    });

    var mouseDown = 0;
    $(document)
      .mousedown(function(){ mouseDown = 1; })
      .mouseup(function(){ mouseDown = 0; });

    $('#frame div').mousemove(function() {
      if (mouseDown === 1)
        $(this).css('background', color);
    });
    $('#frame div').on('dragstart', function() {
      return false;
    });
  }

  function randomColour() {
    color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    $('#preview').css('color', color);
    $('#preview').css('background-color', color);



  }

  $('#create').on('click', function(){
    createGrid();
  });
  $('#random').on('click', function(){
    randomColour();
  })

}); //end ready

