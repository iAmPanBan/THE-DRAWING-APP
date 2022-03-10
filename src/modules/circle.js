/* eslint-disable no-undef */
function CircleTool() {
  this.icon = "./assets/circle.png";
  this.name = "circle";

  let startMouseX = -1;
  let startMouseY = -1;
  let drawing = false;

  // eslint-disable-next-line func-names
  this.draw = function () {
    // only draw when mouse is clicked
    if (mouseIsPressed) {
      // if it's the start of drawing a new circle
      if (startMouseX === -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        // save the current pixel Array
        loadPixels();
      } else {
        updatePixels();
        // draw the circle
        noFill();
        ellipse(
          startMouseX,
          startMouseY,
          mouseX - startMouseX,
          mouseY - startMouseY
        );
      }
    } else if (drawing) {
      loadPixels();
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}

export default CircleTool;
