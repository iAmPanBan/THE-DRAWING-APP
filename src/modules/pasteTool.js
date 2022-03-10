/* eslint-disable no-undef */
import { getCopy } from "./cuttingTool.js";

function PasteTool() {
  this.icon = "./assets/paste.png";
  this.name = "paste";

  let drawing = false;
  let startMouseX = -1;
  let startMouseY = -1;

  this.draw = function () {
    if (mouseIsPressed) {
      if (startMouseX === -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        // save the current pixel Array
        loadPixels();
      }
    } else if (drawing) {
      // save the pixels with the most recent rectangle and reset the
      // drawing tool and start locations

      const copy = getCopy();
      set(startMouseX, startMouseY, copy);

      loadPixels();
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;

      
    }
  };
}

export default PasteTool;
