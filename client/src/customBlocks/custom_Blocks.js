import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['if'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Situation ID")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","OPTIONNAME"], ["5","OPTIONNAME"], ["6","OPTIONNAME"], ["7","OPTIONNAME"], ["8","OPTIONNAME"]]), "ID dropdown");
        this.appendDummyInput()
            .appendField("Situation name: ")
            .appendField(new Blockly.FieldTextInput("type name"), "situation_name");
        this.appendDummyInput()
            .appendField("If");
        this.appendValueInput("condition")
            //.setCheck("Boolean")
            .appendField("(input: condition)");
        this.appendDummyInput()
            .appendField("[reminder: you can break down your situation");
        this.appendDummyInput()
            .appendField("into multiple situation blocks]");
        this.setOutput(false);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['execute_all'] = {
    init: function () {
        this.appendValueInput("name")
            .setCheck(null)
            .appendField("Execute all");
        this.appendValueInput("set")
            .setCheck(null);
        this.setInputsInline(true);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['execute_all'] = function (block) {
    return "...";
};



Blockly.Blocks['then'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("In relation to situation ID: ")
            .appendField(new Blockly.FieldTextInput("type one or more IDs"), "situation_ID");
        /*
        this.appendDummyInput()
            .appendField("(Consider these resources when writing message)");
        this.appendDummyInput()
            .appendField("Venues ")
            .appendField(new Blockly.FieldDropdown([["None","none"], ["Office Hour","oh"], ["SIG","sig"], ["Pair Research","pr"], ["LIP/Mysore","lip"], ["Status Update","su"]]), "venues")
            .appendField(" People ")
            .appendField(new Blockly.FieldDropdown([["None","none"], ["Project Channel","pc"], ["SIG Channel","sc"], ["SIG mentor","sm"], ["On-boarding mentor","om"], ["Help-tech channel","hc"], ["Haoqi","hq"]]), "people")
            .appendField(" Tools ")
            .appendField(new Blockly.FieldDropdown([["None","none"], ["Sprint log","sl"], ["PRC","prc"], ["RRC","rrc"], ["Compass","cps"], ["Mysore templates","mt"], ["IPM","ipm"], ["Github","gh"], ["Learning modules","lm"], ["DTR meeting log","ml"]]), "tools");
        */
        this.appendDummyInput()
            .appendField("Then send a Slack message to");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("type name of recipient"), "NAME");
        this.appendDummyInput()
            .appendField("saying");
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("type suggestion"), "NAME1");
        this.setOutput(false);
        this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "days")
        .appendField("days")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["6","6"], ["12","12"]]), "hours")
        .appendField("hours")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["5","5"], ["15","15"], ["30","30"], ["45","45"]]), "minutes")
        .appendField("minutes");
        this.appendDummyInput()
            .appendField("")
            .appendField(new Blockly.FieldDropdown([
              ["At", "At"],
              ["Before", "Before"],
              ["After","After"]]), "NAME4");
            this.setInputsInline(false);
        this.appendDummyInput()
            .appendField("")
            .appendField(new Blockly.FieldDropdown([
              ["Beginning of Sprint", "Beginning of Sprint"],
              ["Middle of Sprint", "Middle of Sprint"],
              ["Middle of Week", "Middle of Week"],
              ["End of Sprint", "End of Sprint"],
              ["SIG", "SIG"],
              ["Office Hour", "Office Hour"],
              ["Studio", "Studio"],
              ["Sunday", "Sunday"],
              ["Monday", "Monday"],
              ["Tuesday", "Tuesday"],
              ["Wednesday", "Wednesday"],
              ["Thursday", "Thursday"],
              ["Friday", "Friday"],
              ["Saturday", "Saturday"]
              ]), "NAME5");
        this.appendDummyInput()
            .appendField("Execution mode: ")
            .appendField(new Blockly.FieldDropdown([
            ["Always execute", "Always execute"],
            ["Ask me before this triggers", "Ask me before this triggers"],
            ["Only executes if this is the first to be triggered", "Only executes if this is the first to be triggered"]
            ]), "NAME6");
            this.appendDummyInput("reflect")
                .appendField("Please go to step 6 to reflect on this suggestion.");
            /*
            this.appendDummyInput("check1")
              .appendField(new Blockly.FieldCheckbox("FALSE"), "check1")
              .appendField("would this strategy help your student");
            this.appendDummyInput("name6")
              .appendField("in this situation?")
            this.appendDummyInput("check1")
              .appendField(new Blockly.FieldCheckbox("FALSE"), "check1")
              .appendField("can other strategies help your student");
            this.appendDummyInput("name7")
              .appendField("in this situation? If so, add strategy blocks.")
            this.setInputsInline(false);
            */
        /*
        this.appendValueInput("do1")
            .setCheck(null)
            .appendField("(input: action)");
        this.appendValueInput("else")
            .setCheck(null)
            .appendField("else: ");
        this.appendValueInput("do2")
            .setCheck(null)
            .appendField("(input: action)");
        */
        this.setOutput(false);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['if'] = function (block) {
    return "...";
};

Blockly.Blocks['not'] = {
    init: function () {
        this.appendValueInput("not")
            .setCheck(null)
            .appendField("not");
            //.appendField("(output: boolean)");
        this.setOutput(true, "Boolean");
        this.setColour(210);
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
    init: function () {
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

Blockly.Python['set'] = function (block) { return ""; };

Blockly.Blocks['concept_variable'] = {
    init: function () {
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

Blockly.Python['concept_variable'] = function (block) { return ""; };

Blockly.Blocks['and'] = {
    init: function () {
        this.appendValueInput("left")
        this.appendDummyInput()
            .appendField("AND");
        this.appendValueInput("right")
            //.appendField("(output: boolean)");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['and'] = function (block) { return ""; };

Blockly.Blocks['or'] = {
    init: function () {
        this.appendValueInput("left")
            .setCheck(null)
        this.appendDummyInput()
            .appendField("OR");
        this.appendValueInput("right")
            .setCheck(null)
            //.appendField("(output: boolean)");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['or'] = function (block) { return ""; };

Blockly.Blocks['addition'] = {
    init: function () {
        this.appendValueInput("left")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("+");
        this.appendValueInput("right")
            .setCheck(null)
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['addition'] = function (block) { return ""; };

Blockly.Blocks['subtraction'] = {
    init: function () {
        this.appendValueInput("left")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("-");
        this.appendValueInput("right")
            .setCheck(null)
            
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['subtraction'] = function (block) { return ""; };

Blockly.Blocks['greater_than'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendValueInput("NAME")
          .setCheck(null)
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['greater_than'] = function (block) { return ""; };

  Blockly.Blocks['less_than'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("<");
      this.appendValueInput("NAME")
          .setCheck(null)
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['less_than'] = function (block) { return ""; };


Blockly.Blocks['abs'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("Abs");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['abs'] = function (block) {
    return "...";
};

Blockly.Blocks['negative'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("-");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['negative'] = function (block) {
    return "...";
};

Blockly.Blocks['individual'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("student");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["Aimee", "Aimee"], ["Ariella", "Ariella"], ["Ava", "Ava"], ["Charlotte", "Charlotte"], ["Gobi", "Gobi"], ["Grace", "Grace"], ["Hang", "Hang"], ["Harrison", "Harrison"], ["Jason", "Jason"], ["Jonathan", "Jonathan"], ["Kapil", "Kapil"], ["Kevin", "Kevin"], ["Leesha", "Leesha"], ["Mason", "Mason"], ["Molly", "Molly"], ["Neha", "Neha"], ["Nina", "Nina"], ["Roxy", "Roxy"], ["Ryan", "Ryan"]]), "student_name");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['individual'] = function (block) { return ""; };

Blockly.Blocks['project_group'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("project");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["Knowledge Maps", "Knowledge Maps"], ["Scaffolded Exercises", "Scaffolded Exercises"], ["Weekly", "Weekly"], ["Skill Tracking", "Skill Tracking"]]), "project");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['project_group'] = function (block) { return ""; };

Blockly.Blocks['situation'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Situation(boolean)");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"]]), "NAME");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['situation'] = function (block) { return ""; };

Blockly.Blocks['situation_instance'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Situation");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"]]), "NAME");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['situation_instance'] = function (block) { return ""; };
