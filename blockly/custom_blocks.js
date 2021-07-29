// import { Command } from "./models/Command.js";
Blockly.defineBlocksWithJsonArray([

    {
        "type": "movement",
        "message0": "Play %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VALUE",
            "options": [
              ["Walk", "new Command(Command.walk)"],
              
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 355,
    }
]);

// BLOCK GENERATORS
Blockly.JavaScript['movement'] = function(block) {
    let value = '\''+ block.getFieldValue('VALUE') + '\'';
    return 'new Command(Command.walk);';
};
/*Blockly.defineBlocksWithJsonArray([

  {
      type: "start",
      message0: "Start %1",
      args0: [
          {type: "input_statement", name: "code"}
      ]
  },
  
  {
      type: "walk",
      message0: "Walk",
      previousStatement: null,
      nextStatement: null
  },
  
  {
      type: "turn",
  
      message0: "Turn %1",
      args0: [
          {type: "field_dropdown", name: "value", options: [
              ["Left", "Turn.left"],
              ["Right", "Turn.right"],
              ["Back", "Turn.back"]
          ]}
      ],
  
      previousStatement: null,
      nextStatement: null
  },
  
  {
      type: "if_do_else",
  
      message0: "If %1",
      args0: [
          {type: "input_value", name: "condition", check: "CONDITION"}
      ],
  
      message1: "do %1",
      args1: [
          {type: "input_statement", name: "do_code"}
      ],
  
      message2: "else %1",
      args2: [
          {type: "input_statement", name: "else_code"}
      ],
  
      previousStatement: null,
      nextStatement: null
  },
  
  {
      type: "repeat_until",
  
      message0: "Repeat Until %1",
      args0: [
          {type: "input_value", name: "condition", check: "CONDITION"}
      ],
      
      message1: "do %1",
      args1: [
          {type: "input_statement", name: "code"}
      ],
  
      previousStatement: null,
      nextStatement: null,
      colour: 120
  },
  
  {
      type: "not",
  
      message0: "Not %1",
      args0: [
          {type: "input_value", name: "condition", check: "CONDITION"}
      ],
  
      output: null
  },
  
  {
      type: "and",
  
      message0: "And %1 %2",
      args0: [
          {type: "input_value", name: "condition1", check: "CONDITION"},
          {type: "input_value", name: "condition2", check: "CONDITION"}
      ],
      output: null
  },
  
  {
      type: "or",
  
      message0: "Or %1 %2",
      args0: [
          {type: "input_value", name: "condition1", check: "CONDITION"},
          {type: "input_value", name: "condition2", check: "CONDITION"}
      ],
      output: null
  },
  
  {
      type: "is_color",
      message0: "Is Player Color %1",
      args0: [
          {type: "field_dropdown", name: "value", options:[
              ["Red", "1"],
              ["Yellow", "2"],
              ["Blue", "4"],
              ["Orange", "3"],
              ["Purple", "5"],
              ["Green", "6"],
              ["Grey", "0"],
              ["Goop", "7"]
          ]}
      ],
  
      output: "CONDITION"
  },
  
  {
      type: "is_tile_ahead",
  
      message0: "Is Tile Ahead %1",
      args0: [
          {type: "field_dropdown", name: "value", options: [
              ["Empty", "Empty"],
              ["Wall", "Wall"],
              ["Splat", "Splat"],
              ["Mixer", "Mixer"],
              ["Bank", "Bank"],
              ["Junction", "Junction"]
          ]}
      ],
  
      output: "CONDITION"
  },
  
  {
      type: "is_tile_current",
  
      message0: "Is Tile %1",
      args0: [
          {type: "field_dropdown", name: "value", options: [
              ["Empty", "Empty"],
              ["Wall", "Wall"],
              ["Splat", "Splat"],
              ["Mixer", "Mixer"],
              ["Bank", "Bank"],
              ["Junction", "Junction"]
          ]}
      ],
  
      output: "CONDITION"
  },
  
  {
      type: "deposit",
  
      message0: "Deposit %1",
      args0: [
          {type: "field_input", name: "value", check: "Number"}
      ],
  
      previousStatement: null,
      nextStatement: null
  },
  
  {
      type: "reached_end",
  
      message0: "Reached End",
      output: "CONDITION"
  }
  
  ]);
  
  Blockly.JavaScript["start"] = function(block) {
  
      let code = Blockly.JavaScript.statementToCode(block, "code", Blockly.JavaScript.ORDER_NONE);
      let output = `[${code}]`;
  
      alert(output);
      try {
          eval(output)
      } catch (error) {
          alert(error);
      }
      return output;
  }
  
  Blockly.JavaScript["walk"] = function(block) {
  
      return `new Command(Command.walk), `;
  }
  
  Blockly.JavaScript["turn"] = function(block) {
  
      let value = block.getFieldValue("value");
  
      return `new Command(Command.turn, ${value}), `;
  }
  
  Blockly.JavaScript["if_do_else"] = function(block) {
  
      let condition = Blockly.JavaScript.statementToCode(block, "condition", Blockly.JavaScript.ORDER_NONE);
      let do_code = Blockly.JavaScript.statementToCode(block, "do_code", Blockly.JavaScript.ORDER_NONE);
      let else_code = Blockly.JavaScript.statementToCode(block, "else_code", Blockly.JavaScript.ORDER_NONE);
  
      return `new Command(Command.if_do_else, ${condition}, [${do_code}], [${else_code}]), `;
  }
  
  Blockly.JavaScript["repeat_until"] = function(block) {
  
      let condition = Blockly.JavaScript.statementToCode(block, "condition", Blockly.JavaScript.ORDER_NONE);
      let code = Blockly.JavaScript.statementToCode(block, "code", Blockly.JavaScript.ORDER_NONE);
  
      return `new Command(Command.repeat_until, ${condition}, [${code}]), `;
  }
  
  Blockly.JavaScript["reached_end"] = function(block) {
  
      return `new Command(Command.reached_end)`;
  }
  
  Blockly.JavaScript["is_color"] = function(block) {
  
      let value = Blockly.JavaScript.statementToCode(block, "value", Blockly.JavaScript.ORDER_NONE);
      return `new Command(Command.is_color, ${value}), `;
  }
  
  Blockly.JavaScript["not"] = function(block) {
  
      let condition = Blockly.JavaScript.statementToCode(block, "condition", Blockly.JavaScript.ORDER_NONE);
  
      return `new Command(Command.not, ${condition}), `;
  }
  
  Blockly.JavaScript["and"] = function(block) {
  
      let condition1 = Blockly.JavaScript.statementToCode(block, "condition1", Blockly.JavaScript.ORDER_NONE);
      let condition2 = Blockly.JavaScript.statementToCode(block, "condition2", Blockly.JavaScript.ORDER_NONE);
  
      return `new Command(Command.and, ${condition1}, [${condition2}]), `;
  }
  
  Blockly.JavaScript["or"] = function(block) {
  
      let condition1 = Blockly.JavaScript.statementToCode(block, "condition1", Blockly.JavaScript.ORDER_NONE);
      let condition2 = Blockly.JavaScript.statementToCode(block, "condition2", Blockly.JavaScript.ORDER_NONE);
  
      return `new Command(Command.or, ${condition1}, [${condition2}]), `;
  }
  
  Blockly.JavaScript["is_tile_ahead"] = function(block) {
  
      let value = Blockly.JavaScript.statementToCode(block, "value", Blockly.JavaScript.ORDER_NONE);
      return `new Command(Command.is_tile_ahead, ${value}), `;
  }
  
  Blockly.JavaScript["is_tile_current"] = function(block) {
  
      let value = Blockly.JavaScript.statementToCode(block, "value", Blockly.JavaScript.ORDER_NONE);
      return `new Command(Command.is_tile_current, ${value}), `;
  }
  
  Blockly.JavaScript["deposit"] = function(block) {
  
      let value = Blockly.JavaScript.statementToCode(block, "value", Blockly.JavaScript.ORDER_NONE);
      return `new Command(Command.deposit, ${value}), `;
  }*/