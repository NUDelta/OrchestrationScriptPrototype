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

/*
import ReactBlockly from "react-blockly";
import {toolboxCategories, actionToolbox, timeToolbox} from "./toolboxCategories";
import Blockly from "blockly";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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
    <div style={{/*backgroundColor: '#1e1e1e',*/}}>

      <Scaffolding />

      <label style={{fontSize: "20px"}}>Instance1 Detector</label>
      <DetectorWorkspace />

      <label style={{fontSize: "20px"}}>Instance1 Response<br/>(make sure you both suggest actions and help mentees be aware of the underlying strategy)</label>
      <ResponseWorkspace />

      <label style={{fontSize: "20px"}}>Instance2 Detector</label>
      <DetectorWorkspace />

      <label style={{fontSize: "20px"}}>Instance2 Response<br/>(make sure you both suggest actions and help mentees be aware of the underlying strategy)</label>
      <ResponseWorkspace />

    </div>
  );
}
