/* eslint-disable no-undef */
// function EraserTool() {
//   this.icon = 'assets/eraser.png';
//   this.name = 'eraser';
//   const previousMouseX = -1;
//   const previousMouseY = -1;

//   // eslint-disable-next-line func-names
//   this.draw = function () {
//     document.addEventListener('mouseover', (event) => {
//       strokeWeight(80);
//       stroke();
//       line(event.clientX, event.clientY, previousMouseX, previousMouseY);
//     });
//   };
// }

// export default EraserTool;

function EraserTool() {
  this.name = "eraser";
  this.icon = "assets/eraser.png";

  const points = 15;
  const spread = 0;

  // eslint-disable-next-line func-names
  this.draw = function () {
    const r = random(5, 10);
    if (mouseIsPressed) {
      // eslint-disable-next-line no-plusplus
      erase();
      for (let index = 0; index < points; index++) {
        point(
          random(mouseX - spread, mouseX + spread),
          random(mouseY - spread, mouseY + spread)
        );
      }
      noErase();
    }
  };
}

export default EraserTool;
