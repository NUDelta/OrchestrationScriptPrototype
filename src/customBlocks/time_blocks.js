import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("time");
      this.appendValueInput("Modifier")
          .setCheck("modifier");
      this.appendValueInput("Event")
          .setCheck("event");
      this.setOutput(true, "time");
      this.setColour(330);
   this.setTooltip("");
   }
};

Blockly.Python['time'] = function (block) {
    
    return "time_in_python";
};

Blockly.Blocks['after'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("after");
      this.setOutput(true, "modifier");
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Python['after'] = function (block) { 
    return "...";
};

Blockly.Blocks['before'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before");
    this.setOutput(true, "modifier");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['before'] = function (block) { 
    return "...";
};

Blockly.Blocks['during'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("during");
    this.setOutput(true, "modifier");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['during'] = function (block) { 
    return "...";
};

Blockly.Blocks['at'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("at");
    this.setOutput(true, "modifier");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['at'] = function (block) { 
    return "...";
};

Blockly.Blocks['sig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SIG");
    this.setOutput(true, "event");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['sig'] = function (block) { 
    return "...";
};

Blockly.Blocks['sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sprint");
    this.appendValueInput("number")
        .setCheck("Number");
    this.setOutput(true, "event");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
    }
};

Blockly.Python['sprint'] = function (block) { 
    return "...";
};

Blockly.Blocks['days_of_the_week'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Days of the week");
    this.setOutput(true, "event");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['days_of_the_week'] = function (block) { 
    return "...";
};

Blockly.Blocks['mysore'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mysore");
    this.setOutput(true, "event");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['mysore'] = function (block) { 
    return "...";
};

Blockly.Blocks['office_hour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Office hours");
    this.setOutput(true, "event");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['office_hour'] = function (block) { 
    return "...";
};

Blockly.Blocks['studio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Studio");
    this.setOutput(true, "event");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['studio'] = function (block) { 
    return "...";
};

Blockly.Blocks['week'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("week");
    this.appendValueInput("number_of_week")
        .setCheck("Number");
    this.setOutput(true, "event");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['week'] = function (block) { 
    return "...";
};