Blockly.defineBlocksWithJsonArray([

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
        {type: "field_dropdown", name: "turn", options: [
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

Blockly.JavaScript['repeat_until'] = function(block) {

    let value = Blockly.JavaScript.statementToCode(block, "condition", Blockly.JavaScript.ORDER_NONE);
    let value2 = Blockly.JavaScript.statementToCode(block, "code", Blockly.JavaScript.ORDER_NONE);

    alert (JSON.stringify(value));

    return `holderItems.push("repeat_until");\n`;

};

Blockly.JavaScript['reached_end'] = function(block) {

    return `HEllow workd\n`;
};