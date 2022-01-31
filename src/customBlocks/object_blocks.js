import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['project_team'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("project_team")
        .appendField(new Blockly.FieldDropdown([["total sprint points spent", "total sprint points spent"],
                                                ["total sprint points committed", "total sprint points committed"],
                                                ["total sprint tech points committed", "total sprint tech points committed"],
                                                ["total sprint design points committed", "total sprint design points committed"],
                                                ["total sprint research points committed", "total sprint research points committed"],
                                                ["percent sprint tasks done", "percent sprint tasks done"],
                                                ["percent sprint tasks backlogged", "percent sprint tasks backlogged"],
                                                ["percent sprint tasks in progress", "percent sprint tasks in progress"],
                                                ["avg num tasks per story in sprint log", "avg num tasks per story in sprint log"],
                                                ["num lines code committed", "num lines code committed"],

                                              ]), "NAME");
        this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
 };

 Blockly.Blocks['sprint_log'] = {
   init: function() {
     this.appendDummyInput()
         .appendField("sprint_log")
         this.setInputsInline(false);
     this.setOutput(true, null);
     this.setColour(110);
  this.setTooltip("");
  this.setHelpUrl("");
   }
  };

  Blockly.Blocks['planning_view_prc'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("planning_view_prc")
          this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(110);
   this.setTooltip("");
   this.setHelpUrl("");
    }
   };

   Blockly.Blocks['planning_view_rrc'] = {
     init: function() {
       this.appendDummyInput()
           .appendField("planning_view_rrc")
           this.setInputsInline(false);
       this.setOutput(true, null);
       this.setColour(110);
    this.setTooltip("");
    this.setHelpUrl("");
     }
    };

    Blockly.Blocks['rrc'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("rrc")
            this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(110);
     this.setTooltip("");
     this.setHelpUrl("");
      }
     };

     Blockly.Blocks['prc'] = {
       init: function() {
         this.appendDummyInput()
             .appendField("prc")
             this.setInputsInline(false);
         this.setOutput(true, null);
         this.setColour(110);
      this.setTooltip("");
      this.setHelpUrl("");
       }
      };

 Blockly.Python['project_team'] = function (block) { return "...";};
Blockly.Python['sprint_log'] = function (block) { return "...";};
Blockly.Python['planning_view_prc'] = function (block) { return "...";};
Blockly.Python['planning_view_rrc'] = function (block) { return "...";};
Blockly.Python['rrc'] = function (block) { return "...";};
Blockly.Python['prc'] = function (block) { return "...";};
