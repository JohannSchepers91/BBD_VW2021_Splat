/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
 (function() {

    let currentButton;
  
    function handlePlay(event) {
      // Add code for playing sound.
    }
  
    function save(button) {
      // Add code for saving the behavior of a button.
    }
  
    function handleSave() {
      document.body.setAttribute('mode', 'edit');
      save(currentButton);
    }
  
    function enableEditMode() {
      document.body.setAttribute('mode', 'edit');
      document.querySelectorAll('.button').forEach(btn => {
        btn.removeEventListener('click', handlePlay);
        btn.addEventListener('click', enableBlocklyMode);
      });
    }
  
    function enableMakerMode() {
      document.body.setAttribute('mode', 'maker');
      document.querySelectorAll('.button').forEach(btn => {
        btn.addEventListener('click', handlePlay);
        btn.removeEventListener('click', enableBlocklyMode);
      });
    }
  
    function enableBlocklyMode(e) {
      document.body.setAttribute('mode', 'blockly');
      currentButton = e.target;
    }
  
    document.querySelector('#edit').addEventListener('click', enableEditMode);
    document.querySelector('#done').addEventListener('click', enableMakerMode);
    document.querySelector('#save').addEventListener('click', handleSave);
  
    enableMakerMode();
    // Blockly.inject('blocklyDiv', {
    //   toolbox: document.getElementById('toolbox'),
    //   scrollbars: false
    // });
  
    var toolbox = '<xml>';
    toolbox += '  <block type="controls_if"></block>';
    toolbox += '  <block type="controls_whileUntil"></block>';

    toolbox += '  <block type="controls_if"></block>';
    toolbox += '  <block type="controls_whileUntil"></block>';

    toolbox += '<block type="logic_boolean"></block>';


    toolbox += '<block type="logic_operation"></block>';


    toolbox += '</xml>';


    var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});
    
   
    
  
  })();
  