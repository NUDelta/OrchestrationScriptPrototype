import './App.css';
import './customBlocks/custom_Blocks';
import React from 'react';
import ReactBlockly from 'react-blockly';
import Blockly from 'blockly';
import './customBlocks/communication_blocks';
import './customBlocks/function_blocks';
import './customBlocks/time_blocks';
import './customBlocks/resource_block';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DarkTheme from '@blockly/theme-dark';
import MyTimeline from './Timeline';
import HorizontalLabelPositionBelowStepper from './Stepper';
import Select from 'react-select';
import DiscreteSlider from './Slider';

const options = [
  {value: "km",label: "Knowledge Maps"},
  {value: "se",label: "Scaffolded Exercises"},
  {value: "we",label: "Weekly"},
  {value: "st",label: "Skill Tracking"},];

export default function App() {
  const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  const toolboxCategories = [
    
    {
      name: 'Text',
      colour: '#68DEC2',
      blocks: [
        {type: 'text'}
      ]
    },
    {
      name: 'Math',
      colour: '#ACAEEA',
      blocks: [
        {type: 'math_round'},
        {type: 'math_number'},
        {type: 'addition'}
      ]
    },
    {
      name: 'Resources',
      colour: '#CEABFA',
      blocks: [
        {type: 'ipm'},
        {type: 'sprint_log'},
        {type: 'rrc'},
        {type: 'prc'},
        {type: 'lip_signup'},
        {type: 'dtr_meeting_log'},
      ]
    },
    {
      name: 'Functions',
      colour: '#D3FFCE',
      blocks: [
        //{type: 'every'},
        {type: 'wasupdatedv1'},
        //{type: 'At'},
        //{type: 'fullfillment'},
      ]
    },
    {
      name: 'Concepts',
      colour: '#D3FFCE',
      blocks: [
        {type: 'set'},
        {type: 'concept_variable'},
      ]
    },
    {
      name: 'Situation',
      colour: '#5C81A6',
      blocks: [
        {type: 'situation'},
      ]
    },
  ]
  const timeToolbox = [
    {
      name: 'Time',
      colour: '#F08080',
      blocks: [
        {type: 'time'},
        {type: 'time_elapsed'},
        {type: 'time_period'},
      ]
    },
    {
      name: 'Modifier',
      colour: '#F08080',
      blocks: [
        {type: 'after'},
        {type: 'before'},
        {type: 'during'},
        {type: 'at'},
      ]
    },
    {
      name: 'Event',
      colour: '#F08080',
      blocks: [
        {type: 'sig'},
        {type: 'sprint'},
        {type: 'days_of_the_week'},
        {type: 'office_hour'},
        {type: 'studio'},
        {type: 'week'},
      ]
    },
    {
      name: 'Math',
      colour: '#ACAEEA',
      blocks: [
        {type: 'math_round'},
        {type: 'math_number'},
        {type: 'addition'}
      ]
    },
  ]
  const audienceToolbox = [
      {
        name: 'audience',
        colour: '#68DEC2',
        blocks: [
          {type: 'individual'},
          {type: 'project_group'},
        ]
      },
  ]
  const actionToolbox = [
    {
      name: 'Logic',
      colour: '#5C81A6',
      blocks: [
        {type: 'if'},
        {type: 'not'},
        {type: 'and'},
        {type: 'or'},
        {type: 'logic_compare'},

      ]
    },
    {
      name: 'Situation',
      colour: '#5C81A6',
      blocks: [
        {type: 'situation_instance'},
      ]
    },
    {
      name: 'Text',
      colour: '#68DEC2',
      blocks: [
        {type: 'text'}
      ]
    },
    {
      name: 'Communication',
      colour: '#998362',
      blocks: [
        {type: 'send'},
      ]
    },
    {
      name: 'Medium',
      colour: '#998362',
      blocks: [
        {type: 'slack'},
        {type: 'email'},
      ]
    },

  ]

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
      style={{
        //backgroundColor: '#1e1e1e',
      }}>

    <DiscreteSlider/>
    
    <Grid container spacing = {1}>
      {/*
      <Grid item xs = {2}>
        <MyTimeline></MyTimeline>
      </Grid>
      */}
      
      <Grid item xs = {9}>
      
      <label style = {{}}>Situation Detector: what to detect</label>
      <ReactBlockly
        toolboxCategories={toolboxCategories}
        initialXml={initialXml}
        wrapperDivClassName="one-third"
        workspaceConfiguration={{
          /*grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
          */
          //theme: DarkTheme,
        }}
        workspaceDidChange={workspaceDidChange}
      />
      {/*
      <label>Monitoring Condition: when to detect</label>
      <ReactBlockly
        toolboxCategories={timeToolbox}
        initialXml={initialXml}
        wrapperDivClassName="one-third"
        workspaceConfiguration={{
          theme: DarkTheme,
        }}
        workspaceDidChange={workspaceDidChange}
      />
      <label>Applicable Set: who to detect</label>
      <ReactBlockly
        toolboxCategories={audienceToolbox}
        initialXml={initialXml}
        wrapperDivClassName="one-third"
        workspaceConfiguration={{
          theme: DarkTheme,
        }}
        workspaceDidChange={workspaceDidChange}
      />
      */}

      {/*<HorizontalLabelPositionBelowStepper></HorizontalLabelPositionBelowStepper>*/}

      <label style = {{}}>Action Set</label>
      <ReactBlockly
        toolboxCategories={actionToolbox}
        initialXml={initialXml}
        wrapperDivClassName="one-third"
        workspaceConfiguration={{
          //theme: DarkTheme,
        }}
        workspaceDidChange={workspaceDidChange}
      />
      {/*<pre id="generated-xml"></pre>*/}
      
      </Grid>


      {/*<textarea id="code" style={{ height: "200px", width: "400px" }} value=""></textarea>*/}

      
      
      
      <Grid item xs = {3}>
      <label>Applicable Set: who to detect</label>
        <Select options = {options} placeholder = "Choose a project group" isMulti/>
        <label>Note Section</label>
        <textarea style = {{height: "100%", width: "100%"}}></textarea>
      </Grid>
      
      
    </Grid>

    </div>
    
  )
}
