import React from 'react';

const detectionToolbox = [
    {
      name: "Logic",
      colour: "#5C81A6",
      blocks: [
        {type: 'if'},
        {type: 'not'},
        {type: 'and'},
        {type: 'or'},
        {type: 'logic_compare'},

      ]

    },
    {
      name: "Text",
      colour: "#68DEC2",
      blocks: [{ type: "text" }],
    },
    {
      name: "Math",
      colour: "#ACAEEA",
      blocks: [
        { type: "math_round" },
        { type: "math_number" },
        { type: "addition" },
        { type: "subtraction" },
        { type: "abs" },
        { type: "negative" },
        { type: "greater_than" },
        { type: "less_than" },
      ],
    },
    {
      name: "Tools",
      colour: "#68A65C",
      blocks: [

        //{type: 'soap_notes'},
        {type: 'github'},
        {type: 'slack'},
        //{type: 'detection triggered - mentor wants response triggered (true or false)'},
      ]

    },
    {
      name: "Resources",
      colour: "#CEABFA",
      blocks: [

        //{type: 'ipm'},
        {type: 'sprintlog'},
        {type: 'rrc'},
        {type: 'prc'},
        //{type: 'stash'},
        {type: 'pr_studio'},
        {type: 'lip_signup'},
        {type: 'soap_notes'},
        //{type: 'dtr_meeting_log'},
        /*{type: 'urg_guide'},
        {type: 'previous_soap_notes'},
        {type: 'student'},
        {type: 'google calendar'},
        {type: 'student response to slack bot'},*/
        //{type: 'detection triggered - mentor wants response triggered (true or false)'},
      ]

    },
    {
      name: "Functions",
      colour: "#D3FFCE",
      blocks: [
        //{type: 'every'},
        { type: "contains" },
        { type: "was_updated" },
        { type: 'slack_message'},
        //{ type: "filled" },
        //{ type: "was_read" },
        //{type: 'At'},
        //{ type: "tf_slack_message" },
      ],
    },
    {
      name: "HighLevel",
      colour: "#D3FFCE",
      blocks: [
        { type: "sprint_log3"},
        { type: "github3"},
        { type: "high_by_end_of_sprint"},
        { type: "high_halfway_through_sprint"},
        { type: "high_pr_request"},
        { type: "high_deliverables"},
        { type: "high_canvas_update"},
        { type: "high_learn_nothing"},
        { type: "high_new_argument"},
      ],
    },

    {
      name: "Concepts",
      colour: "#D3FFCE",
      blocks: [
        { type: "set" },
        { type: "concept_variable" }],
    },

    {
      name: "Time",
      colour: "#F08080",
      blocks: [
        { type: "time" },
      ],
    },
    /*
    {
      name: "Modifier",
      colour: "#F08080",
      blocks: [
        { type: "modifier" },
      ],
    },

    {
      name: "Event",
      colour: "#F08080",
      blocks: [
        { type: "first_sig" },
        { type: "second_sig"},
        { type: "sprint" },
        //{ type: "days_of_the_week" },
        { type: "first_office_hour" },
        { type: "second_office_hour"},
        { type: "first_studio"},
        { type: "second_studio"},
        { type: "week" },
        { type: "math_number" },
      ],
    },
    */

    /*
    {
      name: "Situation",
      colour: "#5C81A6",
      blocks: [{ type: "situation" }],
    },
    */
  ];

  /*
const timeToolbox = [
    {
      name: "Time",
      colour: "#F08080",
      blocks: [
        { type: "time" },
        { type: "time_elapsed" },
        { type: "time_period" },
      ],
    },
    {
      name: "Modifier",
      colour: "#F08080",
      blocks: [
        { type: "after" },
        { type: "before" },
        { type: "during" },
        { type: "at" },
      ],
    },
    {
      name: "Event",
      colour: "#F08080",
      blocks: [
        { type: "sig" },
        { type: "sprint" },
        { type: "days_of_the_week" },
        { type: "office_hour" },
        { type: "studio" },
        { type: "week" },
      ],
    },
    {
      name: "Math",
      colour: "#ACAEEA",
      blocks: [
        { type: "math_round" },
        { type: "math_number" },
        { type: "addition" },
      ],
    },
  ];
  */



export { detectionToolbox };
