import "./App.css";
import "./customBlocks/custom_Blocks";
import React from "react";
import "./customBlocks/communication_blocks";
import "./customBlocks/function_blocks";
import "./customBlocks/time_blocks";
import "./customBlocks/resource_block";
import "./customBlocks/object_blocks";
import "intersection-observer";
import "react-pro-sidebar/dist/css/styles.css";
import Scaffolding from "./Scaffolding";
import DetectorWorkspace from "./blockly_workspace/DetectorWorkspace";
import ResponseWorkspace from "./blockly_workspace/ResponseWorkspace";
import Grid from "@material-ui/core/Grid";
import Select from "react-select";
import map from "lodash/map";
import range from "lodash/range";
import { Paper } from "@material-ui/core";

/*
import ReactBlockly from "react-blockly";
import {toolboxCategories, actionToolbox, timeToolbox} from "./toolboxCategories";
import Blockly from "blockly";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import DarkTheme from "@blockly/theme-dark";
import MyTimeline from "./timeline/Timeline";
import HorizontalLabelPositionBelowStepper from "./timeline/Stepper";
import DiscreteSlider from "./timeline/Slider";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import CollapsibleTable from "./dictionary/Dictionary";
import { ScrollView } from "@cantonjs/react-scroll-view";
*/

// define "applicable set"
const options = [
  { value: "km", label: "Knowledge Maps" },
  { value: "se", label: "Scaffolded Exercises" },
  { value: "we", label: "Weekly" },
  { value: "st", label: "Skill Tracking" },
  { value: "os", label: "Orchestration Script" },
  { value: "ce", label: "Collective Experience" },
  { value: "cn", label: "Collective Narrative" },
  { value: "mr", label: "Metacognitive Reflection" },
  { value: "cer", label: "CE for Relationship Development" },
  { value: "qa", label: "Q&A Buddy" },
  { value: "aimee", label: "Aimee" },
  { value: "ariella", label: "Ariella" },
  { value: "cindy", label: "Cindy" },
  { value: "fardeem", label: "Fardeem" },
  { value: "hang", label: "Hang" },
  { value: "izzy", label: "Izzy" },
  { value: "jason", label: "Jason" },
  { value: "jenny", label: "jenny" },
  { value: "jonathan", label: "Jonathan" },
  { value: "neha", label: "Neha" },
  { value: "molly", label: "Molly" },
  { value: "roxy", label: "Roxy" },
  { value: "kapil", label: "Kapil" },
  { value: "ryan", label: "Ryan" },
  { value: "leesha", label: "Leesha" },
  { value: "gobi", label: "Gobi" },
  { value: "harrison", label: "Harrison" },
];

export default function App() {

  return (
    <div style={{/*backgroundColor: '#1e1e1e',*/marginLeft:16, marginRight:16, marginTop:16,marginBottom:16}}>


      <Grid container spacing={5}>

        <Grid item xs={3}>

          <Scaffolding />
          <label style={{fontSize: "15px"}}>Step4: Please select or write in text which student(s) and/or project groups(s) you want to detect this ineffective strategy for.</label>
          <Select options = {options} style={{fontSize: "15px", marginTop: 10}} placeholder = "Choose a project group/student" isMulti/>

        </Grid>

        <Grid item xs={9}>

          <label style={{fontSize: "15px", marginBottom: 16}}>Step5: Detector<br/>Using your answer from Step3 as a guide, create one or more ineffective strategy / slack message pairs with the if block in the Logic category to represent the condition you are detecting and the suggested action you wish to send.</label>
          <DetectorWorkspace />

          {/*
          <label style={{fontSize: "15px", marginBottom: 16}}>Step6: Response<br/>Using your answer from Step3 as a guide, express the response you would like to trigger to support the student across the venues/tools/processes in the DTR network if the detector expression is evaluated to true.</label>
          <ResponseWorkspace />
          */}
          <label style={{fontSize: "15px", marginBottom: 16}}>Step6: Response<br/>Using your answer from Step3 as a guide, express one or more responses you would like to trigger to support the student across the venues/tools/processes in the DTR network if the detector expression is evaluated to true.(scroll to define more responses)</label>
          <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
            {map(range(10), _ => (
              <Container />
            ))}
          </div>

        </Grid>

      </Grid>

    </div>
  );
}

const Container = () => {
  return (
    <div style={{ height: "300px", width: "514px", margin: "16px" }}>
      {/*<Paper style={{ height: "100%", width: "514px" }}>Hello</Paper>*/}
      <ResponseWorkspace/>
    </div>
  );
};
