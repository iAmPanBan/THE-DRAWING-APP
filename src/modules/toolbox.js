/* eslint-disable no-undef */
function Toolbox() {
  const self = this;

  this.tools = [];
  this.selectedTool = null;

  // eslint-disable-next-line func-names
  const toolbarItemClick = function () {
    // remove any existing borders

    const items = selectAll('.sideBarItem');
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < items.length; index++) {
      items[index].style('border', '0');
    }

    const toolName = this.id().split('sideBarItem')[0];
    self.selectTool(toolName);
    loadPixels();
  };

  // add a new tool icon to the html page

  // eslint-disable-next-line func-names
  const addToolIcon = (icon, name) => {
    const sideBarItem = createDiv(`<img src='${icon}'></div>`);
    sideBarItem.class('sideBarItem');
    sideBarItem.id(`${name}sideBarItem`);
    sideBarItem.parent('sidebar');
    sideBarItem.mouseClicked(toolbarItemClick);
  };

  // add a tool to the tools array

  // eslint-disable-next-line func-names
  this.addTool = function (tool) {
    // eslint-disable-next-line no-prototype-builtins
    if (!tool.hasOwnProperty('icon') || !tool.hasOwnProperty('name')) {
      // alert('make sure your tool has both a name and an icon');
    }
    this.tools.push(tool);
    addToolIcon(tool.icon, tool.name);
    // if no tool is selected (ie. none have been added so far)
    // make this tool the selected one.
    if (this.selectedTool === null) {
      this.selectTool(tool.name);
    }
  };

  // eslint-disable-next-line func-names
  this.selectTool = function (toolName) {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < this.tools.length; index++) {
      if (this.tools[index].name === toolName) {
        // if the tool has an unselectTool method run it.
        if (
          this.selectedTool !== null
          // eslint-disable-next-line no-prototype-builtins
          && this.selectedTool.hasOwnProperty('unselectTool')
        ) {
          this.selectedTool.unselectTool();
        }
        // select the tool and highlight it on the toolbar
        this.selectedTool = this.tools[index];
        select(`#${toolName}sideBarItem`).style(
          'border',
          '2px solid grey',
        );

        // eslint-disable-next-line no-prototype-builtins
        if (this.selectedTool.hasOwnProperty('populateOptions')) {
          this.selectedTool.populateOptions();
        }
      }
    }
  };
}

export default Toolbox;
