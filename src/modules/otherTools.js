/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
function OtherTools() {
  this.pensiz;
  this.colorPicker;

  // eslint-disable-next-line func-names
  this.display = function () {
    const a = select('.options').style('display:flex;align-items:center');
    createP('Pensize: ').parent(a).style('margin:50px');
    this.pensiz = createSlider(0.2, 100, 3).parent(a);
    this.pensiz.style('margin-left:0px;width:200px');

    // create the color picker and style it
    createP('Change Background: ').parent(a).style('margin-left:20px');
    this.colorPicker = createColorPicker().parent(a);
    this.colorPicker.style('margin: 20px; height: 40px; ');

    return this.pensiz;
  };
  // eslint-disable-next-line func-names
  this.change_bg = function () {
    this.colorPicker.mouseClicked(() => {
      background(this.colorPicker.value());
    });
  };
  this.display();
}

export default OtherTools;
