import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['send'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("send");
      this.appendValueInput("message")
          .setCheck("String")
          .appendField("(input: message)");
    /*
      this.appendValueInput("recipient")
          .setCheck("recipient")
          .appendField("(input: recipient)");
    */
      this.appendValueInput("medium")
          .setCheck("medium")
          .appendField("(input: medium)");
      this.setOutput(true, "event");
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Python['send'] = function (block) { 
    return "...";
};

Blockly.Blocks['person'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Recipient: Person");
    this.appendValueInput("name")
        .setCheck("String")
        .appendField("(input: name)");
    this.setOutput(true, "recipient");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['person'] = function (block) { 
    return "...";
};

Blockly.Blocks['email_address'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Recipient: Email Address");
    this.appendValueInput("email")
        .setCheck("String")
        .appendField("(input: email)");
    this.setOutput(true, "recipient");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['email_address'] = function (block) { 
    return "...";
};

Blockly.Blocks['slack_channel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Recipient: Slack Channel");
    this.appendValueInput("name")
        .setCheck("String")
        .appendField("(input: channel)");
    this.setOutput(true, "recipient");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['slack_channel'] = function (block) { 
    return "...";
};

Blockly.Blocks['slack'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Medium: Slack");
    this.setOutput(true, "medium");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['slack'] = function (block) { 
    return "...";
};

Blockly.Blocks['email'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Medium: Email");
    this.setOutput(true, "medium");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['email'] = function (block) { 
    return "...";
};