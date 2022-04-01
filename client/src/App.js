import "./App.css";
import "./customBlocks/custom_Blocks";
import {React} from "react";
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
import {Link, Route, Routes} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Home from "./components/Home";
import Create from "./components/create";
import Edit from "./components/edit";

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
import { Paper } from "@material-ui/core";
*/

export default function App() {

  return (

    <div style={{/*backgroundColor: '#1e1e1e',*/marginLeft:16, marginRight:16, marginTop:16,marginBottom:16}}>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/learning_strategy" element={<ResponseWorkspace/>}/>
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        
      </Routes>
    </div>

  );
}




/*
const Container = () => {
  return (
    <div style={{ height: "300px", width: "514px", margin: "16px" }}>
      
      <ResponseWorkspace/>
    </div>
  );
};
*/
