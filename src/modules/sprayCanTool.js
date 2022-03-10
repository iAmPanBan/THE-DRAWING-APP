/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function SprayCanTool() {
  this.name = 'sprayCanTool';
  this.icon = 'assets/sprayCan.jpg';

  const points = 13;
  const spread = 10;

  // eslint-disable-next-line func-names
  this.draw = function () {
    const r = random(5, 10);
    if (mouseIsPressed) {
      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < points; index++) {
        point(random(mouseX - spread, mouseX + spread), random(mouseY - spread, mouseY + spread));
      }
    }
  };
}

export default SprayCanTool;
