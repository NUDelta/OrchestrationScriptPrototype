import Blockly from 'blockly';
import 'blockly/python';



 Blockly.Blocks['github3'] = {
   init: function() {
     this.appendDummyInput()
         .appendField(new Blockly.FieldDropdown([["team", "team"],
                                                 ["student1", "student1"],
                                                 ["student2", "student2"]]), "NAME");
     this.appendDummyInput()
         .appendField("Github")
         .appendField(new Blockly.FieldDropdown([
           ["working on tech", "working on tech"]]), "NAME");

         this.setInputsInline(true);
     this.setOutput(true, null);
     this.setColour(110);
  this.setTooltip("");
  this.setHelpUrl("");
   }
  };

Blockly.Blocks['sprint_log3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["team", "team"],
                                                ["student1", "student1"],
                                                ["student2", "student2"]]), "NAME");
    this.appendDummyInput()
        .appendField("Sprint Log")
        .appendField(new Blockly.FieldDropdown([
          ["working on tech", "working on tech"],
          ["working hard", "working hard"],
        ["stories are not complete", "stories are not complete"],
      ["has not finished anything", "student has not finished anything"],
          ["working on user testing", "working on user testing"],
          ["working on argumentation", "working on argumentation"],
          ["has not finished deliverables", "student has not finished deliverables"],
          ["has spent a lot of time","student has spent a lot of time"]]), "NAME");
        this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
 };


Blockly.Blocks['high_by_end_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("By the end of sprint");
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['high_halfway_through_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Half way through the sprint");
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['high_pr_request'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PR request contains");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("type here!"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['high_deliverables'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("No deliverables attached in slack thread");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['high_canvas_update'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Canvas not updated");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['high_learn_nothing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Student does not learn anything new");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['high_new_argument'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Student has new");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["design","design"], ["interface","interface"], ["system","system"]]), "argumentation");
    this.appendDummyInput()
        .appendField("argument");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
