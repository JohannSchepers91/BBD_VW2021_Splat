let options = {
    move: {
      scrollbars: {
        horizontal: true,
        vertical: true,
      },
      drag: true,
    },
    toolbox: document.getElementById('toolbox'),
};

// Injection (Adding a Blockly workspace)
const workspace = Blockly.inject('blocklyDiv',options);