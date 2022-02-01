import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['every'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Every");
    this.appendValueInput("time")
        .setCheck("time")
        .appendField("(input: time)");
    this.appendValueInput("action")
        .setCheck(null)
        .appendField("(input: action)");
    this.setOutput(true, "recipient");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['every'] = function (block) {
    return "...";
};

Blockly.Blocks['contains'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("(input 1)");
        this.appendDummyInput()
            .appendField("Contains?");
        this.appendValueInput("blah")
            .setCheck(null)
            .appendField("(input 2)");
        this.appendDummyInput("output: true or false")
            .appendField("(output: true or false)");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
 };

 Blockly.Python['contains'] = function (block) {
    return "...";
};

Blockly.Blocks['was_updated'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("(input)");
    this.appendDummyInput()
        .appendField("Was Updated?");
    this.appendDummyInput("output: true or false")
        .appendField("(output: true or false)");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['wasUpdated'] = function (block) {
    return "...";
};

/*
Blockly.Blocks['wasupdatedv1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wasUpdated");
    this.appendValueInput("resource")
        .setCheck(null)
        .appendField("(input: resource)");
    this.appendDummyInput()
        .appendField("(output: boolean)");
    this.setInputsInline(false);
    /*
    this.appendValueInput("time_period")
        .setCheck(null)
        .appendField("(input: time period)");

    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Python['wasupdatedv1'] = function (block) {
    return "...";
};
*/

Blockly.Blocks['At'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("At");
    this.appendValueInput("time")
        .setCheck("time")
        .appendField("(input: time)");
    this.appendValueInput("action")
        .setCheck(null)
        .appendField("(input: action)");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['At'] = function (block) {
    return "...";
};

Blockly.Blocks['tf_slack_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("True / False Slack Message");
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("(input: message to send)");
    this.appendValueInput("time")
        .setCheck(null)
        .appendField("(input: time to send)");
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("(input: recipient)");
    this.appendDummyInput("output: recipient responded true or false")
        .appendField("(output: recipient responded true or false)");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['tf_slack_message'] = function (block) {
    return "...";
};

Blockly.Blocks['slack_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Slack Message");
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("(input: message to send)");
    this.appendValueInput("time")
        .setCheck(null)
        .appendField("(input: time to send)");
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("(input: recipient)");
    this.appendDummyInput("output: message received")
        .appendField("(output: message received)");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['slack_message'] = function (block) {
    return "...";
};


Blockly.Blocks['timestamp'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Timestamps when updated(output: list of timestamps)");
      this.appendDummyInput()
          .appendField("(output: list of timestamps)");
      this.appendValueInput("resource")
          .setCheck(null)
          .appendField("(input: resource)");
      this.appendValueInput("start")
          .setCheck(null)
          .appendField("(input: start time)");
      this.appendValueInput("end")
          .setCheck("time")
          .appendField("(input: end time)");
      this.setOutput(true, "list");
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
Blockly.Python['timestamp'] = function (block) {
    return "...";
};

Blockly.Blocks['distinct'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Count distinct days(output: number)");
    this.appendDummyInput()
        .appendField("(output: number)");
    this.appendValueInput("list")
        .setCheck("list")
        .appendField("(input: list of timestamps)");
    this.setOutput(true, "Number");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['distinct'] = function (block) {
    return "...";
};

Blockly.Blocks['filled'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("filled");
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("(input: resource)");
        this.appendDummyInput("output: boolean")
            .appendField("(output: boolean)");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
 };

 Blockly.Python['filled'] = function (block) {
    return "...";
};



Blockly.Blocks['was_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("wasRead");
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("(input: resource)");
        this.appendDummyInput("output: boolean")
            .appendField("(output: boolean)");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
 };

 Blockly.Python['was_read'] = function (block) {
    return "...";
};
