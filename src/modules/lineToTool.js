/* eslint-disable no-undef */
function LineToTool() {
  this.icon = 'assets/lineTo.jpg';
  this.name = 'LineTo';

  let startMouseX = -1;
  let startMouseY = -1;
  let drawing = false;

  // eslint-disable-next-line func-names
  this.draw = function () {
    // only draw when mouse is clicked
    if (mouseIsPressed) {
      // if it's the start of drawing a new line
      if (startMouseX === -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        // save the current pixel Array
        loadPixels();
      } else {
        updatePixels();
        // draw the line
        line(startMouseX, startMouseY, mouseX, mouseY);
      }
    } else if (drawing) {
      loadPixels();
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}

export default LineToTool;
