import "../App.css";
import "../customBlocks/custom_Blocks";
import {React} from "react";
import "../customBlocks/communication_blocks";
import "../customBlocks/function_blocks";
import "../customBlocks/time_blocks";
import "../customBlocks/resource_block";
import "../customBlocks/object_blocks";
import "intersection-observer";
import "react-pro-sidebar/dist/css/styles.css";
import Scaffolding from "../Scaffolding";
import DetectorWorkspace from "../blockly_workspace/DetectorWorkspace";
//import ResponseWorkspace from "../blockly_workspace/ResponseWorkspace";
import Grid from "@material-ui/core/Grid";
import Select from "react-select";
import map from "lodash/map";
import range from "lodash/range";
import {Link, NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import RecordList from "../components/recordList";

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
  { value: "cs1", label: "Supporting Help-Seeking in CS1 Office Hours" },
  { value: "cardinal", label: "Cardinal" },
  { value: "path", label: "PATH: Process Adjustment by Tackling Hang-ups" },
  { value: "qa", label: "Q&A Buddy" },
  { value: "amy", label: "Amy" },
  { value: "lauren", label: "Lauren" },
  { value: "cindy", label: "Cindy" },
  { value: "alexandra", label: "Alexandra" },
  { value: "yvan", label: "Yvan" },
  { value: "parveen", label: "Parveen" },
  { value: "sydney", label: "Sydney" },
  { value: "richard", label: "Richard" },
  { value: "hang", label: "Hang" },
  { value: "jason", label: "Jason" },
  { value: "jonathan", label: "Jonathan" },
  { value: "molly", label: "Molly" },
  { value: "kapil", label: "Kapil" },
  { value: "ryan", label: "Ryan" },
  { value: "leesha", label: "Leesha" },
  { value: "gobi", label: "Gobi" },
  { value: "harrison", label: "Harrison" },
];

export default function Home() {

  return (
    <div style={{/*backgroundColor: '#1e1e1e',*/marginLeft:16, marginRight:16, marginTop:16,marginBottom:16}}>


      <Grid container spacing={5}>

        <Grid item xs={3}>

          <Scaffolding />
          

        </Grid>

        <Grid item xs={9}>

          <label style={{fontSize: "15px"}}>Step4: Please select or write in text which student(s) and/or project groups(s) you want to detect this ineffective strategy for.</label><br/>
          <Select options = {options} style={{fontSize: "15px", marginTop: 10}} placeholder = "Choose a project group/student" isMulti/><br/>

          <label style={{fontSize: "15px", marginBottom: 16}}>Step5: Detector and Response<br/>Using your answer from Step3 as a guide, create one or more ineffective strategy / slack message pairs (connect them with IDs) with the if block in the Logic category to represent the condition you are detecting and the suggested one or multiple actions you wish to send.</label>
          <DetectorWorkspace />

          {/*
          <label style={{fontSize: "15px", marginBottom: 16}}>Step6: Response<br/>Using your answer from Step3 as a guide, express the response you would like to trigger to support the student across the venues/tools/processes in the DTR network if the detector expression is evaluated to true.</label>
          <ResponseWorkspace />
          */}
          {/*
          <label style={{fontSize: "15px", marginBottom: 16}}>Step6: Response<br/>Using your answer from Step3 as a guide, express one or more responses you would like to trigger to support the student across the venues/tools/processes in the DTR network if the detector expression is evaluated to true.(scroll to define more responses)</label>
          <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
            {map(range(10), _ => (
              <Container />
            ))}
          </div>
            */}
          
          {/*
        
          <label style={{fontSize: "15px", marginBottom: 16}}>Step6: Response<br/>Using your answer from Step3 as a guide, express one or more responses you would like to trigger to support the student across the venues/tools/processes in the DTR network if the detector expression is evaluated to true.</label>
          <div/>
          <Link to="/learning_strategy" target="_blank">
            <Button variant="contained" onClick={() => {

              }}>Add a new learning strategy</Button>
          </Link>
          

          */}

        </Grid>

      </Grid>
      
      {/*
      <Link to="/create">
            <Button variant="contained" onClick={() => {
              }}>ADD TEST SCRIPT</Button>
      </Link>
      <RecordList/>
      */}

    </div>
  );
}

