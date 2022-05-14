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

const options_projects = [
  { value: "km", label: "Knowledge Maps (Alexandra)" },
  { value: "se", label: "Scaffolded Exercises (Jonathan)" },
  { value: "os", label: "Orchestration Script (Jason & Hang)" },
  { value: "cn", label: "Collective Narrative (Richard & Parveen)" },
  { value: "mr", label: "Metacognitive Reflection (Molly)" },
  { value: "cer", label: "OCE for Relationship Development (Cindy & Yvan)" },
  { value: "soap", label: "Interactive SOAP Notes (Sydney)" },
  { value: "cardinal", label: "Cardinal (Lauren)" },
  { value: "path", label: "PATH (Amy)" },
];

const options_undergrad_master = [
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
];

const options_phd = [
  { value: "kapil", label: "Kapil" },
  { value: "ryan", label: "Ryan" },
  { value: "leesha", label: "Leesha" },
  { value: "gobi", label: "Gobi" },
  { value: "harrison", label: "Harrison" },
];

const options_sigs = [
  { value: "ars", label: "ARS" },
  { value: "camp", label: "CAMP" },
  { value: "not", label: "NOT" },
  { value: "oce", label: "OCE" },
  { value: "rale", label: "RALE" },
  { value: "bbq", label: "BBQ" },
];

const options_other = [
  { value: "all", label: "All students" },
  { value: "all_under", label: "All undergraduate students" },
  { value: "all_master", label: "All masters students" },
  { value: "all_phd", label: "All PhD students" },
  { value: "all_new", label: "All new students" },
];

const options_venues = [
  { value: "km", label: "Office Hour" },
  { value: "se", label: "SIG" },
  { value: "we", label: "Pair Research" },
  { value: "st", label: "Lip/Mysore" },
  { value: "os", label: "Status Update" },
  { value: "ce", label: "Foundations Office Hour" },
];

const options_people = [
  { value: "km", label: "Project Channel" },
  { value: "se", label: "SIG Channel" },
  { value: "we", label: "SIG Mentor" },
  { value: "st", label: "On-boarding mentor" },
  { value: "os", label: "Help-tech channel" },
  { value: "ce", label: "Haoqi" },
  { value: "urg", label: "Students who have submitted URG" },
];

const options_tools = [
  { value: "km", label: "Sprint log" },
  { value: "se", label: "PRC" },
  { value: "we", label: "RRC" },
  { value: "st", label: "Compass" },
  { value: "os", label: "Mysore templates" },
  { value: "ce", label: "IPM" },
  { value: "gh", label: "Github" },
  { value: "lm", label: "Learning modules" },
  { value: "ml", label: "DTR meeting log" },
];

const combinedTargetOptions = [
{
  label: "Projects",
  options: [{ value: "all_projects", label: "All Projects" }, ...options_projects]
},
{
  label: "Students",
  options: [
    { value: "all_students", label: "All Students" },
    { value: "all_ugrad_ms_students", label: "All Undergrad/Masters Students" },
    { value: "all_phd_students", label: "All Ph.D. Students" },
    { value: "all_new", label: "All First-Quarter Students" },
    ...options_undergrad_master,
    ...options_phd
  ]
},
{
  label: "SIGs",
  options: [{ value: "all_sigs", label: "All SIGs" }, ...options_sigs]
}
]

export default function Home() {
  
  console.log(combinedTargetOptions)

  return (
    <div style={{/*backgroundColor: '#1e1e1e',*/marginLeft:16, marginRight:16, marginTop:16,marginBottom:16}}>


      <Grid container spacing={5}>

        <Grid item xs={3}>

          <Scaffolding />
          <b>Step 4: for whom should this script apply to?</b>
          <br />
          <label style={{fontSize: "15px"}}>Please select which student(s), projects(s), and/or SIG(s) you want this script to apply to.</label><br/>
          <Select options={combinedTargetOptions} style={{fontSize: "15px", marginTop: "20px"}} placeholder = "Choose who this script is for" isMulti/><br/>
          {/*
            <Select options = {options_projects} style={{fontSize: "15px", marginTop: 10}} placeholder = "Choose a project group" isMulti/><br/>
          <Select options = {options_undergrad_master} style={{fontSize: "15px", marginTop: 10}} placeholder = "Choose an undergrad/master's student" isMulti/><br/>
          <Select options = {options_phd} style={{fontSize: "15px", marginTop: 10}} placeholder = "Choose a PhD student" isMulti/><br/>
          <Select options = {options_sigs} style={{fontSize: "15px", marginTop: 10}} placeholder = "Choose a SIG" isMulti/><br/>
          <Select options = {options_other} style={{fontSize: "15px", marginTop: 10}} placeholder = "Other categoties" isMulti/><br/>
          */
          }

        </Grid>

        <Grid item xs={9}>

          <b>Step 5: compose your situation detector and working/learning strategy</b>
          <br />
          <label style={{fontSize: "15px", marginBottom: 16}}>Using your answer from Step 3 as a guide, create one or more ineffective strategy / slack message pairs (connect them with IDs) with the if block in the Logic category to represent the condition you are detecting and the suggested one or multiple actions you wish to send.</label>
          <DetectorWorkspace />

          <b>Step 6: reflect and expand your construction</b>
          <br />
          <label style={{fontSize: "15px"}}>In an ideal world, what are some other ways you would have supported them to implement the effective strategy by getting support from appropriate venues/tools/people/processes in the DTR network? Consider one or more of the following resources while writing new support strategies. </label>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <Select options = {options_venues} style={{fontSize: "15px", marginTop: 10}} placeholder = "Venues" isMulti/>
            </Grid>
            <Grid item xs={4}>
              <Select options = {options_people} style={{fontSize: "15px", marginTop: 10}} placeholder = "People" isMulti/>
            </Grid>
            <Grid item xs={4}>
              <Select options = {options_tools} style={{fontSize: "15px", marginTop: 10}} placeholder = "Tools" isMulti/>
            </Grid>
          </Grid>
              
          <textarea style={{ height: "15vh", width: "100%", fontSize: "15px", marginBottom: 16, marginTop: 10, resize: "vertical" }}></textarea>
          <label style={{fontSize: "15px"}}>When you are done, return to step 5 to add any new support strategies you came up with. </label>
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

