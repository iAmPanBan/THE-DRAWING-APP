/* eslint-disable no-undef */

function HelperFunctions() {
  // event handler for the clear button event. Clears the screen
  select('#clearButton').mouseClicked(() => {
    background(255, 255, 255);
    loadPixels();
  });

  select('#saveImageButton').mouseClicked(() => {
    saveCanvas('myPicture', 'jpg');
  });

  // select("#undo").mouseClicked(function() {

  // })
}

export default HelperFunctions;
