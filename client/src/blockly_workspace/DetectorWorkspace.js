import "../App.css";
import "../customBlocks/custom_Blocks";
import React from "react";
import ReactBlockly from "react-blockly";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import "../customBlocks/communication_blocks";
import "../customBlocks/function_blocks";
import "../customBlocks/time_blocks";
import "../customBlocks/resource_block";
import "../customBlocks/object_blocks";
import "../customBlocks/high_level";
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

    return (
      <div style = {{marginBottom: 16, marginTop: 10}}>
        <ReactBlockly
            toolboxCategories={detectionToolbox}
            initialXml={initialXml}
            wrapperDivClassName="fill-height75"
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
