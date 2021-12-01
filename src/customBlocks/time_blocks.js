import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("time");
      this.appendValueInput("Modifier")
          .appendField("(input: modifier)");
      this.appendValueInput("Event")
          .setCheck("event")
          .appendField("(input: event)");
      this.setOutput(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Python['time'] = function (block) {
    
    return "time_in_python";
};

Blockly.Blocks['modifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Modifier: ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "days");
    this.appendDummyInput()
        .appendField("days");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["6","6"], ["12","12"]]), "hours");
    this.appendDummyInput()
        .appendField("hours");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["0","0"], ["5","5"], ["15","15"], ["30","30"], ["45","45"]]), "minutes");
    this.appendDummyInput()
        .appendField("minutes");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["after","after"], ["before","before"], ["during","during"], ["at","at"]]), "which_modifier");
    this.setInputsInline(true);
    this.setOutput(true, "event");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['modifier'] = function (block) { 
    return "...";
};

Blockly.Blocks['after'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Modifier: After");
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
        .appendField("Modifier: Before");
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
        .appendField("Modifier: During");
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
        .appendField("Modifier: At");
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
        .appendField("Event: SIG");
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
        .appendField("Event: Sprint");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["current","current"], ["last","last"], ["next","next"]]), "which_sprint");
    this.setInputsInline(true);
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
        .appendField("Event: Days of the week");
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
        .appendField("Event: Mysore");
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
        .appendField("Event: Office hours");
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
        .appendField("Event: Studio");
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
        .appendField("Event: week");
    this.appendValueInput("number_of_week")
        .setCheck("Number")
        .appendField("(input: week number)");
    this.setOutput(true, "event");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['week'] = function (block) { 
    return "...";
};

Blockly.Blocks['time_elapsed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["5","5"], ["10","10"]]), "weeks");
    this.appendDummyInput()
        .appendField("weeks");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "days");
    this.appendDummyInput()
        .appendField("days");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["6","6"], ["12","12"]]), "hours");
    this.appendDummyInput()
        .appendField("hours");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["0","0"], ["5","5"], ["15","15"], ["30","30"], ["45","45"]]), "minutes");
    this.appendDummyInput()
        .appendField("minutes");
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setInputsInline(true);
  }
};

Blockly.Python['time_elapsed'] = function (block) { 
  return "...";
};

Blockly.Blocks['time_period'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Time period");
    this.appendValueInput("start")
        .setCheck(null)
        .appendField("(input: start time)");
    this.appendValueInput("end")
        .setCheck(null)
        .appendField("(input: end time)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['time_period'] = function (block) { 
  return "...";
};