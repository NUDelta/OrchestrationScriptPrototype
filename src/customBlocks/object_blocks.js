import Blockly from 'blockly';
import 'blockly/python';



 Blockly.Blocks['github'] = {
   init: function() {
     this.appendDummyInput()
         .appendField("Github")
         .appendField(new Blockly.FieldDropdown([
           ["num lines code committed", "num lines code committed"],
           ["num branches created", "num branches created"]]), "NAME");
     this.appendDummyInput()
         .appendField(new Blockly.FieldDropdown([["student1", "student1"],
                                                 ["student2", "student2"],
                                                 ["All", "All"]]), "NAME");
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
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["student1", "student1"],
                                                ["student2", "student2"],
                                                ["All", "All"]]), "NAME");
        this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
 };


Blockly.Python['slack'] = function (block) { return "...";};
