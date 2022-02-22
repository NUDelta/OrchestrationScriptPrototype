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
     this.setColour("#0066cc");
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
    this.setColour("#0066cc");
 this.setTooltip("");
 this.setHelpUrl("");
  }
 };


Blockly.Blocks['high_by_end_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("By the end of sprint");
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['high_halfway_through_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Half way through the sprint");
    this.setOutput(true, null);
    this.setColour("#cc9900");
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
    this.setColour("#cc9900");
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
    this.setColour("#0066cc");
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
    this.setColour("#0066cc");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['before_first_sig_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before first SIG of sprint");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['before_first_studio_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before first Studio of sprint");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['before_first_oh_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before first OH of sprint");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['before_second_sig_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before second SIG of sprint");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['before_second_studio_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before second Studio of sprint");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['before_second_oh_of_sprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("before second OH of sprint");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['slacked_someone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Have you slacked ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("type name"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#68A65C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['slacked_deliverables'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Have you slacked deliverables to ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("type channel OR thread name"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#68A65C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['high_mysore_signup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mysore signup is ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("type here!"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc9900");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['high_sprint_log_contains'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sprint Log Stories or Tasks contains");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("type here!"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#0066cc");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['high_sprint_updated'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sprint Log not updated");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#0066cc");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

///////////////////////////

Blockly.Blocks['time_subcategory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("-----------------TIME----------------");
    this.setColour("#000000");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['studio_subcategory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("-----------------STUDIO----------------");
    this.setColour("#000000");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['github_subcategory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("-----------------GITHUB----------------");
    this.setColour("#000000");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sprint_log_subcategory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("-----------------SPRINT_LOG----------------");
    this.setColour("#000000");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['canvas_subcategory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("-----------------CANVAS----------------");
    this.setColour("#000000");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['slack_subcategory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("-----------------SLACK----------------");
    this.setColour("#000000");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
