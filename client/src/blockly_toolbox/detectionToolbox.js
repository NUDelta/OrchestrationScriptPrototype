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
      name: "Concepts",
      colour: "#D3FFCE",
      blocks: [
        { type: "set" },
        { type: "concept_variable" }],
    },
    {
      name: "",
      colour: "#FFFFFF",
      blocks: [

      ],
    },
    {
      name: "People",
      colour: "#68A65C",
      blocks: [
        {type: 'slack_subcategory'},
        {type: 'slacked_someone'},
        {type: 'slacked_deliverables'},
        {type: 'slack_message'},
      ]

    },
    {
      name: "Time / Venues",
      colour: "#cc9900",
      blocks: [
        //sprint
        {type: 'time_modifier_subcategory'},
        {type: 'at'},
        {type: 'before'},
        {type: 'after'},
        {type: 'amount_time_modifier'},
        {type: 'time_subcategory'},
        {type: 'high_by_beginning_of_sprint'},
        {type: 'high_halfway_through_sprint'},
        {type: 'midweek'},
        {type: 'high_by_end_of_sprint'},
        {type: 'before_next_sig'},
        {type: 'before_next_oh'},
        {type: 'before_next_studio'},
        {type: 'sunday'},
        {type: 'monday'},
        {type: 'tuesday'},
        {type: 'wednesday'},
        {type: 'thursday'},
        {type: 'friday'},
        {type: 'saturday'},


        //{type: 'studio_subcategory'},
      ]

    },
    {
      name: "Tools",
      colour: "#0066cc",
      blocks: [
        {type: 'github_subcategory'},
        //github
        {type: 'github3'},
        //sprint log
        {type: 'sprint_log_subcategory'},
        {type: 'sprint_log3'},
        {type: 'high_sprint_log_contains'},
        {type: 'high_sprint_updated'},
        {type: 'high_sprint_updated2'},
        //canvas
        {type: 'canvas_subcategory'},
        {type: 'end_of_quarter_goal'},
        {type: 'high_canvas_update'},
        {type: 'high_canvas_update2'},
        {type: 'high_new_argument'},
        {type: 'high_new_argument_rrc'},
        //studio
        {type: 'studio_subcategory'},
        {type: 'high_pr_request'},
        {type: 'high_mysore_signup'},

      ]
    },

    /*
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

        {type: 'sprintlog'},
        {type: 'rrc'},
        {type: 'prc'},

        {type: 'pr_studio'},
        {type: 'lip_signup'},
        {type: 'soap_notes'},

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
    */

/*
    {
      name: "Time",
      colour: "#F08080",
      blocks: [
        { type: "time" },
      ],
    },*/
    {
      name: "",
      colour: "#FFFFFF",
      blocks: [

      ],
    },
    {
      name: "Response",
      colour: "#998362",
      blocks: [{type: "then"}],
    },
    /*
    {
      name: "Communication",
      colour: "#998362",
      blocks: [{ type: "send" }],
    },
    {
      name: "Medium",
      colour: "#998362",
      blocks: [{ type: "slack_medium" }, { type: "email" }],
    },
    */
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
