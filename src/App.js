import "./App.css";
import "./customBlocks/custom_Blocks";
import React from "react";
import "./customBlocks/communication_blocks";
import "./customBlocks/function_blocks";
import "./customBlocks/time_blocks";
import "./customBlocks/resource_block";
import "intersection-observer";
import "react-pro-sidebar/dist/css/styles.css";
import Scaffolding from "./Scaffolding";
import DetectorWorkspace from "./DetectorWorkspace";
import ResponseWorkspace from "./ResponseWorkspace";
import Grid from "@material-ui/core/Grid";

/*
import ReactBlockly from "react-blockly";
import {toolboxCategories, actionToolbox, timeToolbox} from "./toolboxCategories";
import Blockly from "blockly";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import DarkTheme from "@blockly/theme-dark";
import MyTimeline from "./Timeline";
import HorizontalLabelPositionBelowStepper from "./Stepper";
import Select from "react-select";
import DiscreteSlider from "./Slider";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import CollapsibleTable from "./dictionary/Dictionary";
import { ScrollView } from "@cantonjs/react-scroll-view";
*/

// define "applicable set"
/*
const options = [
  { value: "km", label: "Knowledge Maps" },
  { value: "se", label: "Scaffolded Exercises" },
  { value: "we", label: "Weekly" },
  { value: "st", label: "Skill Tracking" },
];
*/

export default function App() {

  return (
    <div style={{/*backgroundColor: '#1e1e1e',*/marginLeft:16, marginRight:16, marginTop:16,marginBottom:16}}>


      <Grid container spacing={5}>
        
        

        <Grid item xs={3}>

          <Scaffolding />

        </Grid>

        <Grid item xs={9}>

          <label style={{fontSize: "15px", marginBottom: 16}}>Step4: Detector<br/>(if the detector expression is evaluated to true, the response prompt will be triggered)</label>
          <DetectorWorkspace />

          <label style={{fontSize: "15px", marginBottom: 16}}>Step5: Response<br/>(make sure you both suggest actions and help mentees be aware of the underlying strategy)</label>
          <ResponseWorkspace />

        </Grid>
        

      </Grid>

    </div>
  );
}
