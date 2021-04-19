import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['every'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Every");
    this.appendValueInput("time")
        .setCheck("time")
        .appendField("(input: time)");
    this.appendValueInput("action")
        .setCheck(null)
        .appendField("(input: action)");
    this.setOutput(true, "recipient");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['every'] = function (block) { 
    return "...";
};

Blockly.Blocks['wasUpdated'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wasUpdated");
    this.appendValueInput("time")
        .setCheck("resource")
        .appendField("(input: resource)");
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['wasUpdated'] = function (block) { 
    return "...";
};

Blockly.Blocks['At'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("At");
    this.appendValueInput("time")
        .setCheck("time")
        .appendField("(input: time)");
    this.appendValueInput("action")
        .setCheck(null)
        .appendField("(input: action)");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['At'] = function (block) { 
    return "...";
};

Blockly.Blocks['fullfillment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fullfillment");
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("(input: message)");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "option");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['fullfillment'] = function (block) { 
    return "...";
};