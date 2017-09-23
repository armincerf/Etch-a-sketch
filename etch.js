$(document).ready(function() {

  

  var gridSize = 75;
  $('#frame')
    .css('width', gridSize + 'vh')
    .css('height', gridSize + 'vh');
  var colour = '#000'
  var prevColour = '#0'

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
      $(this).css('background', colour);
    });

    var mouseDown = 0;
    $(document)
      .mousedown(function(){ mouseDown = 1; })
      .mouseup(function(){ mouseDown = 0; });

    $('#frame div').mousemove(function() {
      if (mouseDown === 1)
        $(this).css('background', colour);
    });
    $('#frame div').on('dragstart', function() {
      return false;
    });
  }

  function randomColour() {
    colour = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    prevColour = colour;
    updateColour();
  }
  function selectRubber(){
    prevColour = colour;
    colour = '#fff';
    updateColour();
  }
  function selectPen(){
    colour = prevColour;
    updateColour();
  }
  function updateColour(){
    $('#preview').css('color', colour);
    $('#preview').css('background-color', colour);
  }

  $('#create').on('click', function(){
    createGrid();
  });
  $('#random').on('click', function(){
    randomColour();
  })
  $('#rubber').on('click', function(){
    selectRubber();
  })
  $('#pen').on('click', function(){
    selectPen();
  })

}); //end ready

