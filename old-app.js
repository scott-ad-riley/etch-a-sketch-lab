$(document).ready(function () {
  var canvas = document.getElementById('main');
  var context = canvas.getContext('2d');
  context.fillStyle = "antiquewhite";
  context.fillRect(0, 0, canvas.width, canvas.height);
  var dialHorizontal = $(".dial.horizontal")
  var dialVertical = $(".dial.vertical")
  context.beginPath();
  var generateChangeFunc = function (isVert) {
    var scope = {
      v: null,
      up: 0,
      down: 0,
      i: 0
    }
    return function (v, up, down, i) {
      $.extend(this, scope)
      console.log("args", v, up, down, i)
      if(v > this.cv){
        if(up){
            if(isVert) {
              // context path go down
              console.log("go down")
            } else {
              // context path go left
              console.log("go left")
            }
            up=0;
        } else {
          up=1;
          down=0;
        }
      } else if(v < this.cv) {
        if(down){
          if(isVert) {
            // context path go up
            console.log("go up")
          } else {
            // context path go right
            console.log("go right")
          }
          down=0;
        } else {
          down=1;
          up=0;
        }
      }
      v = this.cv;
    }
  }
  var changeFunc = function (v, up, down, i) {
      console.log("args", v, up, down, i)
      var isVert = true;
      if(v > this.cv){
        if(up){
            if(isVert) {
              // context path go down
              console.log("go down")
            } else {
              // context path go left
              console.log("go left")
            }
            up=0;
        } else {
          up=1;
          down=0;
        }
      } else if(v < this.cv) {
        if(down){
          if(isVert) {
            // context path go up
            console.log("go up")
          } else {
            // context path go right
            console.log("go right")
          }
          down=0;
        } else {
          down=1;
          up=0;
        }
      }
      v = this.cv;
    }
  // createInfiniteWheel(dialVertical, generateChangeFunc(true));
  createInfiniteWheel(dialVertical, changeFunc);
  // createInfiniteWheel(dialHorizontal, generateChangeFunc(false));
  createInfiniteWheel(dialHorizontal, changeFunc);


}) 


var createInfiniteWheel = function ($el, changeFunc) {
 $el.knob({min : 0, max : 20, stopper : false, change : changeFunc});
}