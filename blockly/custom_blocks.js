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