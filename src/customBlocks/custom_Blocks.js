import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['if'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("If");
      this.appendValueInput("if")
          .setCheck("Boolean")
          .appendField("(input: condition)");
      this.appendValueInput("do")
          .setCheck(null)
          .appendField("(input: action)");
      this.setOutput(true, "event");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Python['if'] = function (block) { 
    return "...";
};

Blockly.Blocks['not'] = {
  init: function() {
    this.appendValueInput("not")
        .setCheck(null)
        .appendField("not");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['not'] = function (block) { 
    return "...";
};


Blockly.Blocks['new_boundary_function'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("Boundary Function Name"), "Name");
        this.appendStatementInput("Content")
            .setCheck(null);
        this.setInputsInline(true);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['new_boundary_function'] = function (block) {
    var text_name = block.getFieldValue('Name');
    var statements_content = Blockly.Python.statementToCode(block, 'Content');
    // TODO: Assemble Python into code variable.
    var code = 'def ' + text_name + '(_object,**kwargs):\n' + statements_content + '\n';
    return code;
};

Blockly.Blocks['return'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("return");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['return'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'return ' + value_name + '\n';
    return code;
};

Blockly.Blocks['set'] = {
    init: function() {
      this.appendValueInput("name")
          .setCheck(null)
          .appendField("set");
      this.appendValueInput("set")
          .setCheck(null)
          .appendField("to");
      this.setInputsInline(true);
      this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Python['set'] = function (block) {return "";};

Blockly.Blocks['concept_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Concept Variable");
    this.appendValueInput("set")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['concept_variable'] = function (block) {return "";};

Blockly.Blocks['and'] = {
  init: function() {
    this.appendValueInput("left")
    this.appendValueInput("right")
        .appendField("AND");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['and'] = function (block) {return "";};

Blockly.Blocks['or'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendValueInput("right")
        .setCheck(null)
        .appendField("OR");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['or'] = function (block) {return "";};

Blockly.Blocks['addition'] = {
  init: function() {
    this.appendValueInput("left")
        .setCheck(null);
    this.appendValueInput("right")
        .setCheck(null)
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['addition'] = function (block) {return "";};