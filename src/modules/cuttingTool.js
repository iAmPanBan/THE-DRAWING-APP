/* eslint-disable no-undef */
import { getCurrentColour } from "./colourPalette.js";

let copy = null;
export const getCopy = () => copy;

function CuttingTool() {
  this.icon = "./assets/scissors.png";
  this.name = "cut";

  let startMouseX = -1;
  let startMouseY = -1;
  let drawing = false;

  this.draw = function () {
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
        //rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
        window.overlayCtx.clearRect(0, 0, window.w, window.h);
        window.overlayCtx.strokeRect(
          startMouseX,
          startMouseY,
          mouseX - startMouseX,
          mouseY - startMouseY
        );
      }
    } else if (drawing) {
      // save the pixels with the most recent rectangle and reset the
      // drawing tool and start locations
      updatePixels();
      copy = get(
        startMouseX,
        startMouseY,
        mouseX - startMouseX,
        mouseY - startMouseY
      );

      fill(255);
      noStroke();
      rect(
        startMouseX,
        startMouseY,
        mouseX - startMouseX,
        mouseY - startMouseY
      );

      window.overlayCtx.clearRect(0, 0, window.w, window.h);

      // reset stroke and fill
      stroke(getCurrentColour());
      fill(getCurrentColour());

      loadPixels();
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}

export default CuttingTool;
