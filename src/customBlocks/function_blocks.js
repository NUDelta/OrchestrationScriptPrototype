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
    this.appendValueInput("venue")
        .appendField("(input: venue)");
    this.appendValueInput("time")
        .appendField("(input: time elapsed since venue)");
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['wasUpdated'] = function (block) { 
    return "...";
};


Blockly.Blocks['wasupdatedv1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wasUpdated");
    this.appendValueInput("resource")
        .setCheck("resource")
        .appendField("(input: resource)");
    this.appendValueInput("time_period")
        .setCheck(null)
        .appendField("(input: time period)");
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['wasupdatedv1'] = function (block) { 
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

Blockly.Blocks['timestamp'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Timestamps when updated(output: list of timestamps)");
      this.appendDummyInput()
          .appendField("(output: list of timestamps)");
      this.appendValueInput("resource")
          .setCheck("resource")
          .appendField("(input: resource)");
      this.appendValueInput("start")
          .setCheck("time")
          .appendField("(input: start time)");
      this.appendValueInput("end")
          .setCheck("time")
          .appendField("(input: end time)");
      this.setOutput(true, "list");
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
Blockly.Python['timestamp'] = function (block) { 
    return "...";
};

Blockly.Blocks['distinct'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Count distinct days(output: number)");
    this.appendDummyInput()
        .appendField("(output: number)");
    this.appendValueInput("list")
        .setCheck("list")
        .appendField("(input: list of timestamps)");
    this.setOutput(true, "Number");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['distinct'] = function (block) { 
    return "...";
};
