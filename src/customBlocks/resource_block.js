import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['ipm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IPM");
    this.appendValueInput("section")
        .setCheck("String")
        .appendField("(input: section)");
    this.setOutput(true, "resource");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sprint_log'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sprint Log");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["current","current"], ["previous","previous"], ["next","next"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, "resource");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rrc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RRC");
    this.appendValueInput("section")
        .setCheck("Number")
        .appendField("(input: section#)");
    this.setOutput(true, "resource");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['prc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PRC");
    this.appendValueInput("section")
        .setCheck("Number")
        .appendField("(input: section#)");
    this.setOutput(true, "resource");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lip_signup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LIP sign up");
    this.setOutput(true, "resource");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dtr_meeting_log'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DTR Meeting Log");
    this.setOutput(true, "resource");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['ipm'] = function (block) { return "...";};
Blockly.Python['sprint_log'] = function (block) { return "...";};
Blockly.Python['rrc'] = function (block) { return "...";};
Blockly.Python['prc'] = function (block) { return "...";};
Blockly.Python['lip_signup'] = function (block) { return "...";};
Blockly.Python['dtr_meeting_log'] = function (block) { return "...";};