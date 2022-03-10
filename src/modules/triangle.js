/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function CustomTool() {
  this.icon = 'assets/triangle.png';
  this.name = 'triangle';

  let startMouseX = -1;
  let startMouseY = -1;
  // eslint-disable-next-line no-unused-vars
  const spacing = 1;
  let drawing = false;

  // eslint-disable-next-line func-names
  this.draw = function () {
    if (mouseIsPressed) {
      if (startMouseX === -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        loadPixels();
      } else {
        updatePixels();
        noFill();
        triangle(startMouseX, mouseY, mouseX, startMouseY, startMouseX, startMouseY);
      }
    } else if (drawing) {
      loadPixels();
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}

export default CustomTool;
