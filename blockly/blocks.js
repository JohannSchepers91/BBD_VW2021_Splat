Blockly.defineBlocksWithJsonArray(
    [{
        "type": "start",
        "message0": "START %1",
        "args0": [
          {
            "type": "input_statement",
            "name": "code",
            "align": "CENTRE"
          }
        ],
        "inputsInline": false,
        "colour": 270,
        "tooltip": "Begin",
        "helpUrl": ""
      },
      {
        "type": "walk",
        "message0": "walk",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 135,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "turn",
        "message0": "Turn %1 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "turn",
            "options": [
              [
                "Left",
                "Turn.left"
              ],
              [
                "Right",
                "Turn.right"
              ],
              [
                "Back",
                "Turn.back"
              ]
            ]
          },
          {
            "type": "input_statement",
            "name": "turn"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 135,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "if_do_else",
        "message0": "If %1 then %2 else %3",
        "args0": [
          {
            "type": "input_value",
            "name": "condition"
          },
          {
            "type": "input_statement",
            "name": "do_code"
          },
          {
            "type": "input_statement",
            "name": "NAME"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "repeat_until",
        "message0": "Repeat Until %1 do %2",
        "args0": [
          {
            "type": "input_value",
            "name": "condition"
          },
          {
            "type": "input_statement",
            "name": "NAME"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "not",
        "message0": "Not %1",
        "args0": [
          {
            "type": "input_value",
            "name": "condition"
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "and",
        "message0": "%1 And %2",
        "args0": [
          {
            "type": "input_value",
            "name": "condition1"
          },
          {
            "type": "input_value",
            "name": "condition2"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "or",
        "message0": "%1 Or %2",
        "args0": [
          {
            "type": "input_value",
            "name": "condition1"
          },
          {
            "type": "input_value",
            "name": "condition2"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "is_color",
        "message0": "Is player color %1 ? %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "value",
            "options": [
              [
                "Red",
                "1"
              ],
              [
                "Yellow",
                "2"
              ],
              [
                "Blue",
                "4"
              ],
              [
                "Orange",
                "3"
              ],
              [
                "Purple",
                "5"
              ],
              [
                "Green",
                "6"
              ],
              [
                "Grey",
                "0"
              ],
              [
                "Goop",
                "7"
              ]
            ]
          },
          {
            "type": "input_statement",
            "name": "NAME"
          }
        ],
        "output": "CONDITION",
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "is_tile_ahead",
        "message0": "Is Tile %1 Ahead? %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "value",
            "options": [
              [
                "Empty",
                "Empty"
              ],
              [
                "Wall",
                "Wall"
              ],
              [
                "Splat",
                "Splat"
              ],
              [
                "Mixer",
                "Mixer"
              ],
              [
                "Bank",
                "Bank"
              ],
              [
                "Junction",
                "Junction"
              ]
            ]
          },
          {
            "type": "input_statement",
            "name": "value"
          }
        ],
        "output": "CONDITION",
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "is_tile_current",
        "message0": "Is Current Tile %1 ? %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "value",
            "options": [
              [
                "Empty",
                "Empty"
              ],
              [
                "Wall",
                "Wall"
              ],
              [
                "Splat",
                "Splat"
              ],
              [
                "Mixer",
                "Mixer"
              ],
              [
                "Bank",
                "Bank"
              ],
              [
                "Junction",
                "Junction"
              ]
            ]
          },
          {
            "type": "input_statement",
            "name": "value"
          }
        ],
        "output": "CONDITION",
        "colour": 315,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "deposit",
        "message0": "Deposit %1",
        "args0": [
          {
            "type": "field_input",
            "name": "value",
            "text": "0"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 30,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "reached_end",
        "message0": "Reached End",
        "output": "CONDITION",
        "colour": 30,
        "tooltip": "",
        "helpUrl": ""
      }]

);

Blockly.JavaScript['repeat_until'] = function(block) {

    let value = Blockly.JavaScript.statementToCode(block, "condition", Blockly.JavaScript.ORDER_NONE);
    let value2 = Blockly.JavaScript.statementToCode(block, "code", Blockly.JavaScript.ORDER_NONE);

    alert (JSON.stringify(value));

    return `holderItems.push("repeat_until");\n`;

};

Blockly.JavaScript['reached_end'] = function(block) {

    return `HEllow workd\n`;
};