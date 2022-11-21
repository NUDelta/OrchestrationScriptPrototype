import "../App.css";
import React from "react";
import ReactBlockly from "react-blockly";
import { BlocklyWorkspace } from "react-blockly";
import blockSearchData from '../customBlocks/parser';
import Blockly from "blockly";
import "../customBlocks/parser"
//import "../customBlocks/communication_blocks";
//import "../customBlocks/function_blocks";
//import "../customBlocks/time_blocks";
//import "../customBlocks/resource_block";
//import "../customBlocks/object_blocks";
//import "../customBlocks/high_level";
//import "../customBlocks/custom_Blocks";
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

          let text = blockSearchData[type];

          if (searchString.length > 0
            && text && text.toLowerCase().includes(searchString.toLowerCase())) {
            newCategory.blocks.push({type: type});
          }
        }
      }
      
      newToolbox.unshift(newCategory);
      return newToolbox;
    }

    return (
      <div style = {{marginBottom: 16, marginTop: 10}}>
        Filter blocks: <input onChange={(e) => setSearchStr(e.target.value)}></input>
        <br/>
        Current string: {searchStr}
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
