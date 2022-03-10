/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import FreehandTool from "./modules/freehandTool.js";
import LineToTool from "./modules/lineToTool.js";
import SprayCanTool from "./modules/sprayCanTool.js";
import MirrorDrawTool from "./modules/mirrorDrawTool.js";
import CircleTool from "./modules/circle.js";
import Rectangle from "./modules/rect.js";
import Toolbox from "./modules/toolbox.js";
import ColourPalette from "./modules/colourPalette.js";
import CustomTool from "./modules/triangle.js";
import EraserTool from "./modules/eraserTool.js";
import CuttingTool from "./modules/cuttingTool.js";
import PasteTool from "./modules/pasteTool.js";
import OtherTools from "./modules/otherTools.js";
import HelperFunctions from "./modules/helperFunctions.js";
import textInput from "./modules/textInput.js";

// global variables that will store the toolbox colour palette
// and the helper functions
let toolbox = null;
let colourP = null;
let helpers = null;
let others = null;

const contentDiv = document.querySelector("#content");
const overlayCanvas = document.createElement("canvas");
overlayCanvas.style.position = "absolute";
window.overlayCtx = overlayCanvas.getContext("2d");
contentDiv.appendChild(overlayCanvas);

window.setup = () => {
  // create a canvas to fill the content div from index.html
  const canvasContainer = select("#content");
  window.w = canvasContainer.size().width;
  window.h = canvasContainer.size().height;
  const canvas = createCanvas(window.w, window.h);
  canvas.parent("content");
  overlayCanvas.width = window.w;
  overlayCanvas.height = window.h;
  overlayCtx = overlayCanvas.getContext("2d");

  // create helper functions and the colour palette
  helpers = new HelperFunctions();
  colourP = new ColourPalette();

  // create a toolbox for storing the tools
  toolbox = new Toolbox();
  others = new OtherTools();

  // add the tools to the toolbox.
  const toolsArray = [
    new FreehandTool(),
    new LineToTool(),
    new SprayCanTool(),
    new MirrorDrawTool(),
    new CircleTool(),
    new Rectangle(),
    new CustomTool(),
    new EraserTool(),
    new CuttingTool(),
    new PasteTool(),
    new textInput(),
  ];

  toolsArray.forEach((tool) => toolbox.addTool(tool));
  background(255);
};

window.draw = () => {
  if (toolbox.selectedTool.hasOwnProperty("draw")) {
    toolbox.selectedTool.draw();
    strokeWeight(others.pensiz.value());
    others.change_bg();
  } else {
    // eslint-disable-next-line no-alert
    alert("it doesn't look like your tool has a draw method!");
  }
};

