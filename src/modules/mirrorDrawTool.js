/* eslint-disable no-undef */
function MirrorDrawTool() {
  this.name = 'mirrorDraw';
  this.icon = 'assets/mirrorDraw.jpg';

  // which axis is being mirrored (x or y) x is default
  this.axis = 'x';
  // line of symmetry is halfway across the screen
  this.lineOfSymmetry = width / 2;

  // this changes in the jquery click handler. So storing it as
  // a variable self now means we can still access it in the handler
  const self = this;

  // where was the mouse on the last time draw was called.
  // set it to -1 to begin with
  let previousMouseX = -1;
  let previousMouseY = -1;

  // mouse coordinates for the other side of the Line of symmetry.
  let previousOppositeMouseX = -1;
  let previousOppositeMouseY = -1;

  // eslint-disable-next-line func-names
  this.draw = function () {
    // display the last save state of pixels
    updatePixels();

    // do the drawing if the mouse is pressed
    if (mouseIsPressed) {
      // if the previous values are -1 set them to the current mouse location
      // and mirrored positions
      if (previousMouseX === -1) {
        previousMouseX = mouseX;
        previousMouseY = mouseY;
        previousOppositeMouseX = this.calculateOpposite(mouseX, 'x');
        previousOppositeMouseY = this.calculateOpposite(mouseY, 'y');
      } else {
        // if there are values in the previous locations
        // draw a line between them and the current positions
        line(previousMouseX, previousMouseY, mouseX, mouseY);
        previousMouseX = mouseX;
        previousMouseY = mouseY;

        // these are for the mirrored drawing the other side of the
        // line of symmetry
        const oX = this.calculateOpposite(mouseX, 'x');
        const oY = this.calculateOpposite(mouseY, 'y');
        line(previousOppositeMouseX, previousOppositeMouseY, oX, oY);
        previousOppositeMouseX = oX;
        previousOppositeMouseY = oY;
      }
    } else {
      // if the mouse isn't pressed reset the previous values to -1
      previousMouseX = -1;
      previousMouseY = -1;

      previousOppositeMouseX = -1;
      previousOppositeMouseY = -1;
    }

    // after the drawing is done save the pixel state. We don't want the
    // line of symmetry to be part of our drawing

    loadPixels();

    // push the drawing state so that we can set the stroke weight and colour
    push();
    strokeWeight(3);
    stroke('red');
    // draw the line of symmetry
    if (this.axis === 'x') {
      line(width / 2, 0, width / 2, height);
    } else {
      line(0, height / 2, width, height / 2);
    }
    // return to the original stroke
    pop();
  };

  /* calculate an opposite coordinate the other side of the
     *symmetry line.
     *@param n number: location for either x or y coordinate
     *@param a [x,y]: the axis of the coordinate (y or y)
     *@return number: the opposite coordinate
     */
  // eslint-disable-next-line func-names
  this.calculateOpposite = function (n, a) {
    if (a !== this.axis) {
      return n;
    }

    if (n < this.lineOfSymmetry) {
      return this.lineOfSymmetry + (this.lineOfSymmetry - n);
    }

    return this.lineOfSymmetry - (n - this.lineOfSymmetry);
  };

  // eslint-disable-next-line func-names
  this.unselectTool = function () {
    updatePixels();
    // reorganize options
    others.display();
    select('#directionButton').style('display:none;');
  };

  // eslint-disable-next-line func-names
  this.populateOptions = function () {
    select('.options').html(
      "<button id='directionButton'>Make Horizontal</button>",
    );
    // click handler
    // eslint-disable-next-line func-names
    select('#directionButton').mouseClicked(function () {
      const button = select(`#${this.elt.id}`);
      if (self.axis === 'x') {
        self.axis = 'y';
        self.lineOfSymmetry = height / 2;
        button.html('Make Vertical');
      } else {
        self.axis = 'x';
        self.lineOfSymmetry = width / 2;
        button.html('Make Horizontal');
      }
    });
  };
}

export default MirrorDrawTool;
