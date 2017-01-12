
var canvasElement;
var CANVAS_WIDTH = 1000;
var CANVAS_HEIGHT = 600;
var FPS = 50;
var textX = 50;
var textY = 50;

$(document).ready(function(){
  canvasElement = $('#canvas');
  canvas = canvasElement.get(0).getContext("2d");
  console.log('canvasElement.get(0)', canvasElement.get(0));

  keyBindings();

  setInterval(function() {
    draw();
    update();
  }, 1000/FPS);

});

var player = {
  color: generateRandomColor(),
  x: Math.random() * CANVAS_WIDTH,
  y: Math.random() * CANVAS_HEIGHT,
  width: 100,
  height: 100,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }
};

function draw() {
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.draw();
}


function update() {
  textX += 1;
  textY += 1;
}

function keyBindings(){
  $(document).keypress(function(e){
    console.log(e.keyCode);
    switch(e.keyCode)
    {
      //left
      case 97:
        console.log('left');
        player.x -= 1;
        break;
      //right
      case 100:
        console.log('right');
        player.x += 1;
        break;
      //up
      case 119:
        console.log('up');
        player.y -= 1;
        break;
      //down
      case 115:
        console.log('down');
        player.y += 1;
        break;
    }
  });
}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
