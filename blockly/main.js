// Injection (Adding a Blockly workspace)
const workspace = Blockly.inject('blocklyDiv',{
    toolbox: document.getElementById('toolbox')
});


const executeBtn = document.getElementById("execute");

function showCode() {
    // Generate JavaScript code and display it.
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    alert(code);
}

function runCode() {
    // Generate JavaScript code and run it.
    // window.LoopTrap = 1000;
    // Blockly.JavaScript.INFINITE_LOOP_TRAP =
    //     'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    alert("Execute");
    console.log(code);
    // Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

    // try {
    //     eval(code);
    // } catch (e) {
    //     alert(e);
    // }
}

executeBtn.addEventListener('click',runCode);













