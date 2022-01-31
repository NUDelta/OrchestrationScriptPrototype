import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['ipm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ipm")
        .appendField(new Blockly.FieldDropdown([["module -> topic (output: string)", "module -> topic (output: string)"], ["module -> Type (output: string)", "module -> Type (output: string)"], ["module -> description (output: string)", "module -> description (output: string)"],
          ["module -> read? (output: boolean)", "module -> read? (output: boolean)"], ["module -> understood? (output: boolean)", "module -> understood? (output: boolean)"], ["module -> applied? (output: boolean)", "module -> applied? (output: boolean)"], ["module -> questions (output: string)", "module -> questions (output: string)"]]), "NAME");
        this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
 };

 Blockly.Blocks['student response to slack bot'] = {
   init: function() {
     this.appendDummyInput()
         .appendField("student response to slack bot");
     this.appendValueInput("message")
             .setCheck("String")
             .appendField("(input: slack bot name)");
     this.appendDummyInput("(output: string)")
             .appendField("(output: string)");
         this.setInputsInline(false);
     this.setOutput(true, null);
     this.setColour(290);
  this.setTooltip("");
  this.setHelpUrl("");
   }
  };

  Blockly.Blocks['detection triggered - mentor wants response triggered (true or false)'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("detection triggered - mentor wants response triggered (true or false");
      this.appendDummyInput("(output: boolean)")
              .appendField("(output: boolean)");
          this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(290);
   this.setTooltip("");
   this.setHelpUrl("");
    }
   };

Blockly.Blocks['sprintlog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sprint Log")
        .appendField(new Blockly.FieldDropdown([
          ["points spent", "points spent"],
          ["points committed", "points committed"],
          ["percent sprint tasks", "percent sprint tasks"],
          ["avg num tasks per story", "avg num tasks per story"],
          ["num stories", "num stories"],
          ["stories", "stories"],
          ["num tasks", "num tasks"],
          ["tasks","tasks"]]), "NAME");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["N/A","N/A"],
          ["all","all"],
          ["tech","tech"],
          ["design","design"],
          ["research","research"],
          ["done","done"],
          ["backlogged","backlogged"],
          ["in progress","in progress"],
          ["unmarked","unmarked"],
          ["roadblocks","roadblocks"]]), "NAME");
        this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['rrc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RRC")
        .appendField(new Blockly.FieldDropdown([
          ["all","all"],
          ["Planning view -> gaps in canvas", "Planning view -> gaps in canvas"],["Planning view -> Focus for sprint", "Planning view -> Focus for sprint"], ["Planning view -> What we learned", "Planning view -> What we learned"],

          ["section 1: identify your research audience","section 1: identify your research audience"], ["section 2: define class of problems and desired outcomes","section 2: define class of problems and desired outcomes"], ["section 3: existing approaches and schools of thought (farther approaches)","section 3: existing approaches and schools of thought (farther approaches)"], ["section 4: existing approaches and schools of thought (closer approaches)","section 4: existing approaches and schools of thought (closer approaches)"], ["section 5: research question","section 5: research question"], ["section 6: conceptual contribution","section 6: conceptual contribution"], ["section 7: technical contribution","section 7: technical contribution"], ["section 8: synthesis tree","section 8: synthesis tree"], ["section 9: study design","section 9: study design"], ["section 10: core takeaways","section 10: core takeaways"], ["section 11: revised understanding of conceptual and technical approach","section 11: revised understanding of conceptual and technical approach"], ["section 12: future work","section 12: future work"]]), "NAME");
        this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
 };

 Blockly.Blocks['stash'] = {
   init: function() {
     this.appendDummyInput()
         .appendField("stash")
         .appendField(new Blockly.FieldDropdown([["riskiest risk","riskiest risk"],["blocker", "blocker"],["why blocker is challenging", "why blocker is challenging"],
         ["Which LIP learning module would be most helpful", "Which LIP learning module would be most helpful"], ["What skill/expertise one looks for", "What skill/expertise one looks for"],
          ["Pair Research request", "Pair Research request"], ["New understanding of blocker", "New understanding of blocker"]]), "NAME");
     this.appendDummyInput("output: string")
         .appendField("(output: string)");
         this.setInputsInline(false);
     this.setOutput(true, null);
     this.setColour(290);
  this.setTooltip("");
  this.setHelpUrl("");
   }
  };

  Blockly.Blocks['pair research sign up (studio)'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pair research sign up (studio)")
          .appendField(new Blockly.FieldDropdown([["Did they sign up for PR during studio (output: boolean)","Did they sign up for PR during studio (output: boolean)"], ["What time did they submit their PR (output: time)", "What time did they submit their PR (output: time)"],["Content of their PR request (output: string)","Content of their PR request (output: string)"],
        ["who they were paired with (output: string)", "who they were paired with (output: string)"]]), "NAME");
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
    this.appendDummyInput("output: string")
        .appendField("(output: string)");
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
        .appendField(new Blockly.FieldDropdown([
        ["all","all"],
        ["Planning View -> Gaps in canvas", "Planning View -> Gaps in canvas"],
        ["Planning view -> Focus for sprint", "Planning view -> Focus for sprint"], ["Planning view -> What we learned", "Planning view -> What we learned"],
        ["section 1: identify a design situation","section 1: identify a design situation"], ["section 2: test if a design problem","section 2: test if a design problem"],
        ["section 3: describe broader impact","section 3: describe broader impact"], ["section 4-7: design arguments","section 4-7: design arguments"],
        ["section 8-9: check your design arguments","section 8-9: check your design arguments"], ["section 10: interface arguments","section 10: interface arguments"],
         ["section 11: interface models","section 11: interface models"], ["section 12: system arguments","section 12: system arguments"], ["section 13: system models","section 13: system models"],
         ["section 14a: study aims and expected outcomes","section 14a: study aims and expected outcomes"], ["section 14b: study aims and expected outcomes","section 14b: study aims and expected outcomes"],
         ["section 15a: study setup (participants)","section 15a: study setup (participants)"], ["section 15b: study setup (scenario)","section 15b: study setup (scenario)"],
         ["section 16: data collection","section 16: data collection"], ["section 17: core findings","section 17: core findings"], ["section 18: design implications","section 18: design implications"]]), "NAME");
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
        .appendField("LIP sign up")
        .appendField(new Blockly.FieldDropdown([["which learning module they signed up for","which learning module they signed up for"]]));
    this.appendDummyInput("output: string")
        .appendField("(output: string)");
    this.setOutput(true, "resource");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['google calendar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("google calendar")
        .appendField(new Blockly.FieldDropdown([["SIG meeting time","SIG meeting time"],["OH meeting time", "OH meeting time"], ["studio time", "studio time"], ["status update date", "status update date"]]));
    this.appendDummyInput("output: time")
        .appendField("(output: time)");
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
      this.appendDummyInput("output: string")
          .appendField("(output: string)");
          this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(290);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['student'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Student")
        .appendField(new Blockly.FieldDropdown([["Jason","Jason"], ["Hang","Hang"]]), "NAME")
        .appendField(new Blockly.FieldDropdown([["D_points","D_points"], ["T_points","T_points"], ["R_points","R_points"], ["points committed","points committed"],["points spent", "points spent"], ["progress (percent of committed points done)", "progress (percent of committed points done"], ["burndown (hours spent / points required)","burndown (hours spent / points required"]]), "NAME");
    this.appendDummyInput("output: number")
        .appendField("(output: number)");
        this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['ipm'] = function (block) { return "...";};
Blockly.Python['sprintlog'] = function (block) { return "...";};
Blockly.Python['rrc'] = function (block) { return "...";};
Blockly.Python['prc'] = function (block) { return "...";};
Blockly.Python['stash'] = function (block) { return "...";};
Blockly.Python['pair research sign up (studio)'] = function (block) { return "...";};
Blockly.Python['lip_signup'] = function (block) { return "...";};
Blockly.Python['dtr_meeting_log'] = function (block) { return "...";};
Blockly.Python['urg_guide'] = function (block) { return "...";};
Blockly.Python['previous_soap_notes'] = function (block) { return "...";};
Blockly.Python['google calendar'] = function (block) { return "...";};
Blockly.Python['student'] = function (block) { return "...";};
Blockly.Python['student response to slack bot'] = function (block) { return "...";};
Blockly.Python['ipdetection triggered - mentor wants response triggered (true or false)m'] = function (block) { return "...";};
