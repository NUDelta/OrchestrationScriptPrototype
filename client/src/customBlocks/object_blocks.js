import Blockly from 'blockly';
import 'blockly/python';



 Blockly.Blocks['github'] = {
   init: function() {
     this.appendDummyInput()
         .appendField("Github")
         .appendField(new Blockly.FieldDropdown([
           ["num lines code committed", "num lines code committed"],
           ["num branches created", "num branches created"]]), "NAME");
         this.setInputsInline(true);
     this.setOutput(true, null);
     this.setColour(110);
  this.setTooltip("");
  this.setHelpUrl("");
   }
  };


Blockly.Python['github'] = function (block) { return "...";};



Blockly.Blocks['slack'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Slack")
        .appendField(new Blockly.FieldDropdown([
          ["num unique people messaged", "num unique people messaged"]]), "NAME");
        this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
 };

 Blockly.Blocks['high_pr_request'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Last Studio PR Request Contained");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("type here!"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#0066cc");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['high_mysore_signup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Last Studio Mysore Signup Contained ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("type here!"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#0066cc");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['slack'] = function (block) { return "...";};
