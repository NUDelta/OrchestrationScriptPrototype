import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['ipm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IPM");
    this.appendValueInput("section")
        .setCheck("String")
        .appendField("(input: section)");
    this.setOutput(true, "resource");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sprint_log'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sprint Log");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["current","current"], ["previous","previous"], ["next","next"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, "resource");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rrc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RRC")
        .appendField(new Blockly.FieldDropdown([["identify your research audience","identify your research audience"], ["define class of problems and desired outcomes","define class of problems and desired outcomes"], ["existing approaches and schools of thought (farther approaches)","existing approaches and schools of thought (farther approaches)"], ["existing approaches and schools of thought (closer approaches)","existing approaches and schools of thought (closer approaches)"], ["research question","research question"], ["conceptual contribution","conceptual contribution"], ["technical contribution","technical contribution"], ["synthesis tree","synthesis tree"], ["study design","study design"], ["core takeaways","core takeaways"], ["revised understanding of conceptual and technical approach","revised understanding of conceptual and technical approach"], ["future work","future work"]]), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
 };
 
 Blockly.Blocks['urg_guide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("URG Guide");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
 };
 

Blockly.Blocks['prc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PRC")
        .appendField(new Blockly.FieldDropdown([["identify a design situation","identify a design situation"], ["test if a design problem","test if a design problem"], ["describe broader impact","describe broader impact"], ["design arguments","design arguments"], ["check your design arguments","check your design arguments"], ["interface arguments","interface arguments"], ["interface models","interface models"], ["system arguments","system arguments"], ["system models","system models"], ["study aims and expected outcomes","study aims and expected outcomes"], ["study setup (participants)","study setup (participants)"], ["study setup (scenario)","study setup (scenario)"], ["data collection","data collection"], ["core findings","core findings"], ["design implications","design implications"]]), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
 };
 

Blockly.Blocks['lip_signup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LIP sign up");
    this.setOutput(true, "resource");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dtr_meeting_log'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DTR Meeting Log");
    this.setOutput(true, "resource");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['previous_soap_notes'] = {
  init: function () {
      this.appendDummyInput()
          .appendField("Previous SOAP Notes")
          .appendField(new Blockly.FieldDropdown([["subjective", "subjective"], ["objective", "objective"], ["assessment", "assessment"], ["plan", "plan"], ["follow up", "follow up"]]), "NAME");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(290);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Python['ipm'] = function (block) { return "...";};
Blockly.Python['sprint_log'] = function (block) { return "...";};
Blockly.Python['rrc'] = function (block) { return "...";};
Blockly.Python['prc'] = function (block) { return "...";};
Blockly.Python['lip_signup'] = function (block) { return "...";};
Blockly.Python['dtr_meeting_log'] = function (block) { return "...";};
Blockly.Python['urg_guide'] = function (block) { return "...";};
Blockly.Python['previous_soap_notes'] = function (block) { return "...";};