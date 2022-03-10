/* eslint-disable no-undef */
import { textPaste } from "./textHelper.js";

function textInput() {
  this.icon = "./assets/textInput.png";
  this.name = "textInput";

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

        if (mouseIsPressed) {
          document.getElementById("myInput").value;
          async function paste(input) {
            const text = await navigator.clipboard.read();
            input.value = text;
          }
        }
      }
    } else if (drawing) {
      // save the pixels with the most recent rectangle and reset the
      // drawing tool and start locations
      const copy = textPaste();
      set(startMouseX, startMouseY, copy);

      loadPixels();
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}

export default textInput;
