import "./App.css";
import "./customBlocks/custom_Blocks";
import React from "react";
import ReactBlockly from "react-blockly";
import Blockly from "blockly";
import "./customBlocks/communication_blocks";
import "./customBlocks/function_blocks";
import "./customBlocks/time_blocks";
import "./customBlocks/resource_block";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//import DarkTheme from "@blockly/theme-dark";
import MyTimeline from "./Timeline";
//import HorizontalLabelPositionBelowStepper from "./Stepper";
import Select from "react-select";
import DiscreteSlider from "./Slider";
//import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
//import "react-pro-sidebar/dist/css/styles.css";
import CollapsibleTable from "./dictionary/Dictionary";

import "intersection-observer";
import { ScrollView } from "@cantonjs/react-scroll-view";

const options = [
  { value: "km", label: "Knowledge Maps" },
  { value: "se", label: "Scaffolded Exercises" },
  { value: "we", label: "Weekly" },
  { value: "st", label: "Skill Tracking" },
];

export default function App() {

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  const toolboxCategories = [
    {
      name: "Logic",
      colour: "#5C81A6",
      blocks: [
        //{type: 'if'},
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
      name: "Resources",
      colour: "#CEABFA",
      blocks: [

        {type: 'ipm'},
        {type: 'sprint_log'},
        {type: 'rrc'},
        {type: 'prc'},
        {type: 'stash'},
        {type: 'pair research sign up (studio)'},
        {type: 'lip_signup'},
        //{type: 'dtr_meeting_log'},
        {type: 'urg_guide'},
        {type: 'previous_soap_notes'},
        {type: 'student'},
        {type: 'google calendar'},
        {type: 'student response to slack bot'},
      ]

    },
    {
      name: "Functions",
      colour: "#D3FFCE",
      blocks: [
        //{type: 'every'},
        { type: "contains" },
        { type: "wasupdatedv1" },
        { type: "filled" },
        { type: "was_read" },
        //{type: 'At'},
        { type: "fullfillment" },
      ],
    },
    /*
    {
      name: "Concepts",
      colour: "#D3FFCE",
      blocks: [{ type: "set" }, { type: "concept_variable" }],
    },
    {
      name: "Situation",
      colour: "#5C81A6",
      blocks: [{ type: "situation" }],
    },
    */
  ];
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
  const actionToolbox = [
    
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
  ];

  // not in use
  function workspaceDidChange(workspace) {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));

    //document.getElementById('generated-xml').innerText = newXml;

    /*
    const code = Blockly.Python.workspaceToCode(workspace);
    document.getElementById('code').value = code;
    */
  }

  return (
    <div
      style={
        {
          //backgroundColor: '#1e1e1e',
        }
      }
    >
      {/*<ProSidebar >
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>*/}

      {/*<DiscreteSlider />*/}

      <Grid container spacing={1}>
        {/*
      <Grid item xs = {2}>
        <MyTimeline></MyTimeline>
      </Grid>
      */}

        
        
        <Grid item xs={8}>



            <label style={{fontSize: "20px"}}>Instance1 Detector</label>
            <ReactBlockly
              toolboxCategories={toolboxCategories}
              initialXml={initialXml}
              wrapperDivClassName="one-third"
              workspaceConfiguration={
                {
                  /*grid: {
              spacing: 20,
              length: 3,
              colour: '#ccc',
              snap: true,
            },
            */
                  //theme: DarkTheme,
                }
              }
              workspaceDidChange={workspaceDidChange}
            />

            <label style={{fontSize: "20px"}}>Instance1 Response<br/>(make sure you both suggest actions and help mentees be aware of the underlying strategy)</label>
            <ReactBlockly
              toolboxCategories={actionToolbox}
              initialXml={initialXml}
              wrapperDivClassName="one-third"
              workspaceConfiguration={
                {
                  //theme: DarkTheme,
                }
              }
              workspaceDidChange={workspaceDidChange}
            />

            <label style={{fontSize: "20px"}}>Instance2 Detector</label>
            <ReactBlockly
              toolboxCategories={toolboxCategories}
              initialXml={initialXml}
              wrapperDivClassName="one-third"
              workspaceConfiguration={
                {
                  /*grid: {
              spacing: 20,
              length: 3,
              colour: '#ccc',
              snap: true,
            },
            */
                  //theme: DarkTheme,
                }
              }
              workspaceDidChange={workspaceDidChange}
            />

            <label style={{fontSize: "20px"}}>Instance2 Response<br/>(make sure you both suggest actions and help mentees be aware of the underlying strategy)</label>
            <ReactBlockly
              toolboxCategories={actionToolbox}
              initialXml={initialXml}
              wrapperDivClassName="one-third"
              workspaceConfiguration={
                {
                  //theme: DarkTheme,
                }
              }
              workspaceDidChange={workspaceDidChange}
            />

          {/*<pre id="generated-xml"></pre>*/}
          {/*<CollapsibleTable />*/}
        </Grid>

        {/*<textarea id="code" style={{ height: "200px", width: "400px" }} value=""></textarea>*/}
        <Grid item xs={4}>



          <label style={{fontSize: "20px"}}>Step1: List 2-4 instances this quarter when your mentee worked in an ineffective way.</label>
          <textarea style={{ height: "20%", width: "100%", fontSize: "20px" }}></textarea>

          <label style={{fontSize: "20px"}}>Step2: Choose 1 instance from step 1 which you would like to detect in the future.</label>
          <textarea style={{ height: "10%", width: "100%", fontSize: "20px" }}></textarea>

          <label style={{fontSize: "20px"}}>Step3: Why was that instance an ineffective way of working in that case?</label>
          <textarea style={{ height: "20%", width: "100%", fontSize: "20px" }}></textarea>

          <label style={{fontSize: "20px"}}>Step4: What’s the underlying effective strategy you are trying to teach here?</label>
          <textarea style={{ height: "10%", width: "100%", fontSize: "20px" }}></textarea>

          <label style={{fontSize: "20px"}}>Step5: Think about mentee’s current and future project risk to brainstorm 0-4 more future instances when this effective strategy won’t be used?</label>
          <textarea style={{ height: "20%", width: "100%", fontSize: "20px" }}></textarea>


          

          
        {/*
          <label>Applicable Set: who to detect</label>
          <Select
            options={options}
            placeholder="Choose a project group"
            isMulti
          />
          <label>Note Section</label>
          <textarea style={{ height: "100%", width: "100%" }}></textarea>
        */}
        </Grid>

        
      </Grid>

      

    </div>
  );
}
