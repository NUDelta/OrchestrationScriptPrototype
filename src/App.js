import './App.css';
import './customBlocks/custom_Blocks';
import React from 'react';
import ReactBlockly from 'react-blockly';
import Blockly from 'blockly';
import './customBlocks/communication_blocks';
import './customBlocks/function_blocks';
import './customBlocks/time_blocks';
import './customBlocks/resource_block';

export default function App() {
  const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  const toolboxCategories = [
    {
      name: 'Logic',
      colour: '#5C81A6',
      blocks: [
        {type: 'controls_if'},
        {type: 'logic_compare'},
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
      name: 'Math',
      colour: '#ACAEEA',
      blocks: [
        {type: 'math_round'},
        {type: 'math_number'}
      ]
    },
    {
      name: 'Time',
      colour: '#F08080',
      blocks: [
        {type: 'time'},
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
        {type: 'mysore'},
        {type: 'office_hour'},
        {type: 'studio'},
        {type: 'week'},
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
      name: 'Communication',
      colour: '#998362',
      blocks: [
        {type: 'send'},
      ]
    },
    {
      name: 'Recipient',
      colour: '#998362',
      blocks: [
        {type: 'person'},
        {type: 'email_address'},
        {type: 'slack_channel'},
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
    {
      name: 'Functions',
      colour: '#D3FFCE',
      blocks: [
        {type: 'every'},
        {type: 'wasUpdated'},
        {type: 'At'},
        {type: 'fullfillment'},
      ]
    },
  ]
  function workspaceDidChange(workspace) {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    document.getElementById('generated-xml').innerText = newXml;

    const code = Blockly.Python.workspaceToCode(workspace);
    document.getElementById('code').value = code;
  }

  return (
    <>
      <ReactBlockly
        toolboxCategories={toolboxCategories}
        initialXml={initialXml}
        wrapperDivClassName="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
        }}
        workspaceDidChange={workspaceDidChange}
      />
      <pre id="generated-xml">
      </pre>
      <textarea id="code" style={{ height: "200px", width: "400px" }} value=""></textarea>
    </>
  )
}
