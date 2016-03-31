var canvas, context, x = 0, y = 0;
$(document).ready(function () {
  canvas = document.getElementById('main');
  context = canvas.getContext('2d');
  context.fillStyle = "antiquewhite";
  resetContext();
  context.beginPath();

  $("#reset").on("click", resetContext);

  var dialHorizontal = $(".dial.horizontal")
  createInfiniteWheel(dialHorizontal, false)
  var dialVertical = $(".dial.vertical")
  createInfiniteWheel(dialVertical, true)
}) 

var resetContext = function () {
  context.closePath();
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(0, 0, canvas.width, canvas.height);
  x = 0;
  y = 0;
  context.moveTo(0, 0);
  context.beginPath(); // thanks john/erik!
}

var canvasIncrease = function (isVert) {
  // console.log("increase", isVert)
  if (isVert) {
    if (y + 5 > canvas.height) {
      y = canvas.height;
    } else {
      y += 5;
    }
  } else {
    if (x + 5 > canvas.width) {
      x = canvas.width;
    } else {
      x += 5;
    }
  }
  context.lineTo(x, y);
  context.moveTo(x, y);
  context.stroke();
  context.closePath();
}

var canvasDecrease = function (isVert) {
  // console.log("decrease", isVert)

  if (isVert) {
    if (y - 5 < 0) {
      y = 0;
    } else {
      y -= 5;
    }
  } else {
    if (x - 5 < 0) {
      x = 0;
    } else {
      x -= 5;
    }
  }
  context.lineTo(x, y);
  context.moveTo(x, y);
  context.stroke();
  context.closePath();

}

var createInfiniteWheel = function ($el, isVert) {
  var v, up=0,down=0,i=0;
  var incr = function() { i++; canvasIncrease(isVert) }
  var decr = function() { i--; canvasDecrease(isVert) };
  // blame the guy who wrote this http://anthonyterrien.com/knob/
  $($el).knob( { min : 0 , max : 20 , stopper : false , change : function () { if(v > this.cv){ if(up){decr(); up=0; }else{up=1;down=0;} } else { if(v < this.cv){ if(down){ incr(); down=0; }else{down=1;up=0;} } } v = this.cv; }});
}