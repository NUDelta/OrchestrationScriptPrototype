import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['soap_notes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SOAP Notes")
        .appendField(new Blockly.FieldDropdown([["subjective", "subjective"],
                                                ["objective", "objective"],
                                                ["assessment","assessment"],
                                                ["plan", "plan"]]), "NAME");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["First SIG", "First SIG"],
                                                ["Second SIG", "Second SIG"],
                                                ["First OH","First OH"],
                                                ["Second OH", "Second OH"],
                                                ["All", "All"]]), "NAME");
        this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
 };

 Blockly.Blocks['github'] = {
   init: function() {
     this.appendDummyInput()
         .appendField("Github")
         .appendField(new Blockly.FieldDropdown([
           ["num lines code committed", "num lines code committed"]]), "NAME");
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
