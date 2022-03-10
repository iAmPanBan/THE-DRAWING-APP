/* eslint-disable no-undef */
function FreehandTool() {
  // set an icon and a name for the object
  this.icon = 'assets/freehand.jpg';
  this.name = 'freehand';

  let previousMouseX = -1;
  let previousMouseY = -1;

  // eslint-disable-next-line func-names
  this.draw = function () {
    // if the mouse is pressed
    if (mouseIsPressed) {
      if (previousMouseX === -1) {
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      } else {
        line(previousMouseX, previousMouseY, mouseX, mouseY);
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
    } else {
      previousMouseX = -1;
      previousMouseY = -1;
    }
  };
}

export default FreehandTool;
