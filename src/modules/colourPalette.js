/* eslint-disable no-undef */
let currentColour = "black";
export const getCurrentColour = () => currentColour;

function ColourPalette() {
  // a list of web colour strings
  this.colours = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "orange",
    "pink",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua"
  ];
  // make the start colour be black
  currentColour = "black";

  // eslint-disable-next-line func-names
  const colourClick = function () {
    // remove the old border
    const current = select(`#${currentColour}Swatch`);
    current.style("border", "0");

    // get the new colour from the id of the clicked element
    const c = this.id().split("Swatch")[0];

    // set the selected colour and fill and stroke
    currentColour = c;
    fill(c);
    stroke(c);

    // add a new border to the selected colour
    this.style("border", "2px solid blue");
  };

  // eslint-disable-next-line func-names
  this.loadColours = function () {
    // set the fill and stroke properties to be black at the start of the programme
    // running
    fill(this.colours[0]);
    stroke(this.colours[0]);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.colours.length; i++) {
      const colourID = `${this.colours[i]}Swatch`;

      const colourSwatch = createDiv();
      colourSwatch.class("colourSwatches");
      colourSwatch.id(colourID);

      select(".colourPalette").child(colourSwatch);
      select(`#${colourID}`).style("background-color", this.colours[i]);
      colourSwatch.mouseClicked(colourClick);
    }

    select(".colourSwatches").style("border", "2px solid blue");
  };

  this.loadColours();
}

export default ColourPalette;
