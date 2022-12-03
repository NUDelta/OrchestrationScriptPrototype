import "../App.css";
import React from "react";
import ReactBlockly from "react-blockly";
import { BlocklyWorkspace } from "react-blockly";
import blockSearchData from './blockSearchData.json';
import Blockly from "blockly";
import "../customBlocks/communication_blocks";
import "../customBlocks/function_blocks";
import "../customBlocks/time_blocks";
import "../customBlocks/resource_block";
import "../customBlocks/object_blocks";
import "../customBlocks/high_level";
import "../customBlocks/custom_Blocks";
import {blockTextContent} from "../customBlocks/custom_Blocks";
import "intersection-observer";
import "react-pro-sidebar/dist/css/styles.css";
//import {toolboxCategories} from "./blockly_toolbox/detectionToolbox";
import { detectionToolbox } from "../blockly_toolbox/detectionToolbox";
//import { responseToolbox } from "./blockly_toolbox/responseToolbox";

export default function DetectorWorkspace() {

    // initial configuration
    const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

    function workspaceDidChange(workspace) {
        const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
        /*
        document.getElementById('generated-xml').innerText = newXml;
        const code = Blockly.Python.workspaceToCode(workspace);
        document.getElementById('code').value = code;
        */
    }

    const [searchStr, setSearchStr] = React.useState("");

    const filterDetectionToolbox = (toolbox, searchString) => {
      let newToolbox = [...toolbox];

      const newCategory = {
        name: "Search Results",
        colour: "#990000",
        blocks: []
      };

      // go thru all blocks, put copies of the matches into newCategory
      for (let i = 0; i<toolbox.length; i++) {
        const category = toolbox[i];
        for (let j=0; j<category.blocks.length; j++) {
          const type = category.blocks[j].type; // string, (eventually) key of our JSON object

          // get the text!
          console.log(`type: ` + type + `bTC[type]:` + blockTextContent[type]);

          let text = undefined;
          if (blockSearchData[type]) {
            const textValues = Object.values(blockSearchData[type]);
            const dropdownText = textValues[1].join(" ");
            text = textValues[0] + dropdownText + textValues[2] + textValues[3];
          }

          if (searchString.length > 0
            && text && text.toLowerCase().includes(searchString.toLowerCase())) {
            newCategory.blocks.push({type: type});
          }
        }
      }
      
      newToolbox.unshift(newCategory);
      return newToolbox;
    }

    const showTips = () => {
      alert(`Make sure to remember the difference between your script’s way of detecting a situation, and the actual situation you’re trying to detect. For example, your script may detect that a team hasn’t updated their sprint log recently, but you’re really trying to detect if a student has planned their sprint effectively, which is more qualitative and harder to detect directly — a non-updated sprint log is an indicator that the student hasn’t planned, but it’s not a guarantee of this.`);
      alert(`Think of the indicators as flags, and not sure-fire guarantees that your situation has occurred.`);
      alert(`Think about gaps between your detector’s model of the situation, and the actual situation. Think to yourself, “how could these indicators fail to capture the actual situation I’m trying to detect with my script”?`);
      alert(`Remember that many situations worth detecting are qualitative and so can’t be fully detected automatically — you may need to have mentors manually review the situation, and only use the data to automatically indicate to mentors that a situation *might* have occurred. For example, if you are trying to detect if a student has planned their sprint effectively, a non-updated sprint log might trigger a script to notify the mentor or mentees to consider if they’ve planned effectively, and to check in/seek help if they’re not sure.`);
      alert(`Think about how human input and automatic scripts can work together instead of automating everything. Human input is good for making decisions and evaluating open-ended input/qualitative situations; automatic scripts are good for detecting data in real time, but there are usually only indicators of a situation, without surefire guarantees.`);
    }

    const [step, setStep] = React.useState(1);
    const steps = [[`How are you going to detect this situation?`,
    `Think about the situation that you want to detect in order to trigger your script. Do you want to trigger the script at a particular time? Before/after a particular meeting (venue)? Based on particular updates (or inactivity) on a particular tool like the sprint log or canvas?
    
    `,`Example: If your student is building prototype but does not have a plan to test it, you can potential detect this by checking their sprint log to see what they are working on or by asking your student a question on slack and checking their answer to it, or by checking both
    `],
    [`Construct the detector`,
    `Now, arrange those blocks, combined with a situation block and perhaps conditional logic under the “Logic” tab, to construct a detector for your situation. 
    `,`Example: you could attach the “slack question” block to the situation block, and have the question block ask “what do you plan on working on this week?”, and check if the response contains “work on prototype”.
    `],
    [`Check your detector for false positives

    `,`Think about reasons why your detector could fail by getting triggered when you wouldn’t want it to be. Do the signals/conditions you’re using always imply that the situation you’re detecting has actually occurred? If not, try adding a human check.
    
    `,`For example, a slack question block checking if a response contains “working on prototype” could get triggered if the student says they’re working on a low-fidelity prototype for a basic user test (rather than spending their time on a high-fidelity prototype without testing), or if a student says they’re *not* working on a prototype! Because of this, it’s often best to either requires categorical responses (specify “(y/n)” or exactly what phrase for the mentee to use in the question, then check for that), or to manually review the open-ended student response, rather than trying to assume what an open-ended response would look like. You can also pair a human-triggered signal with another tool to try and avoid this!
    `],
  [`Check your detector for false negatives

  `,`Think about reasons why your detector could fail by not getting triggered when you would want it to trigger.
  
  `,`Example: Students don’t always respond to Slack messages or update their canvases/logs. If your detector is only relying solely on one of these signals, it might fall short in some situations
  `]];

    return (
      <div style = {{marginBottom: 16, marginTop: 10}}>
        Filter blocks: <input onChange={(e) => setSearchStr(e.target.value)}></input>
        <span id="Tips" style = {{marginLeft: 400}}>
          <button onClick={showTips}>
            Tips for Good Scripts
          </button>
        </span>
        <h2>Follow this guide to write good scripts:</h2>
        <h3>Step {step}</h3>
        <p>{steps[step - 1].map((x) => {
          return <p>{x}</p>;
        })}</p>
        <span>
          {step > 1 && <button onClick={()=>setStep(step - 1)}>
            Back
          </button>}
          {step < steps.length && <button onClick={()=>setStep(step + 1)}
          style = {step > 1 ? {marginLeft: 200} : {}}>
            Next
          </button>}
        </span>
        <br/>
        <br/>
        <ReactBlockly
            toolboxCategories={filterDetectionToolbox(detectionToolbox, searchStr)}
            initialXml={initialXml}
            wrapperDivClassName="fill-height"
            workspaceConfiguration={
            {
                /*
                grid: {
                spacing: 20,
                length: 3,
                colour: '#ccc',
                snap: true,
                },
                */

                // theme: DarkTheme,

                zoom: {
                controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2,
                pinch: true
                },


            }
            }

            workspaceDidChange={workspaceDidChange}
        />
      </div>
    );
}
