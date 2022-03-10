/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function Rectangle() {
  this.icon = 'assets/rect.png';
  this.name = 'rectangle';

  let startMouseX = -1;
  let startMouseY = -1;
  let drawing = false;

  // draws the rectangle to the screen
  // eslint-disable-next-line func-names
  this.draw = function () {
    // only draw when mouse is clicked
    if (mouseIsPressed) {
      // if it's the start of drawing a new rectangle
      if (startMouseX === -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        // save the current pixel Array
        loadPixels();
      } else {
        // update the screen with the saved pixels to hide any previous
        // rect between mouse pressed and released
        updatePixels();
        // draw the rectangle
        noFill();
        rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
      }
    } else if (drawing) {
      // save the pixels with the most recent rectangle and reset the
      // drawing tool and start locations
      loadPixels();
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}
export default Rectangle;
