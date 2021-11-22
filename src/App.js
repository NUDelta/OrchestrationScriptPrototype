import "./App.css";
import "./customBlocks/custom_Blocks";
import React from "react";
import ReactBlockly from "react-blockly";
import Blockly from "blockly";
import "./customBlocks/communication_blocks";
import "./customBlocks/function_blocks";
import "./customBlocks/time_blocks";
import "./customBlocks/resource_block";
import "intersection-observer";
import "react-pro-sidebar/dist/css/styles.css";
import {toolboxCategories, actionToolbox, timeToolbox} from "./toolboxCategories";
import Scaffolding from "./Scaffolding";

/*
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
const options = [
  { value: "km", label: "Knowledge Maps" },
  { value: "se", label: "Scaffolded Exercises" },
  { value: "we", label: "Weekly" },
  { value: "st", label: "Skill Tracking" },
];

// const toolboxCategories = toolboxCategories;

export default function App() {

  // initial configuration
  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  // currently not in use
  function workspaceDidChange(workspace) {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    /*
    document.getElementById('generated-xml').innerText = newXml;
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
      
      <Scaffolding />
      
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

    </div>
  );
}
