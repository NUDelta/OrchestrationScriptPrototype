import React from 'react';

const responseToolbox = [

    /*
    {
      name: "Logic",
      colour: "#5C81A6",
      blocks: [
        { type: "if" },
        { type: "not" },
        { type: "and" },
        { type: "or" },
        { type: "logic_compare" },
      ],
    },
    {
      name: "Situation",
      colour: "#5C81A6",
      blocks: [{ type: "situation_instance" }],
    },
    */
    {
      name: "Communication",
      colour: "#998362",
      blocks: [{ type: "send" }],
    },
    {
      name: "Text",
      colour: "#68DEC2",
      blocks: [{ type: "text" }],
    },
    {
      name: "Medium",
      colour: "#998362",
      blocks: [{ type: "slack" }, { type: "email" }],
    },
    {
      name: "Time",
      colour: "#F08080",
      blocks: [
        { type: "time" },
      ],
    },
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
        { type: "sig" },
        { type: "sprint" },
        { type: "days_of_the_week" },
        { type: "office_hour" },
        { type: "studio" },
        { type: "week" },
        { type: "math_number" },
      ],
    },
];

export { responseToolbox };