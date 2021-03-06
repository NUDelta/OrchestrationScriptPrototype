import "../App.css";
import "../customBlocks/custom_Blocks";
import React from "react";
import ReactBlockly from "react-blockly";
import Blockly from "blockly";
import "../customBlocks/communication_blocks";
import "../customBlocks/function_blocks";
import "../customBlocks/time_blocks";
import "../customBlocks/resource_block";
import "intersection-observer";
import "react-pro-sidebar/dist/css/styles.css";
//import {actionToolbox} from "./blockly_toolbox/detectionToolbox";
import { responseToolbox } from "../blockly_toolbox/responseToolbox";
import {Link, Route, Routes} from "react-router-dom";
import Button from '@material-ui/core/Button';

export default function ResponseWorkspace() {

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
      <div style = {{marginTop: 10}}>
        <ReactBlockly
            toolboxCategories={responseToolbox}
            initialXml={initialXml}
            wrapperDivClassName="fill-height"
            workspaceConfiguration={
            {
                //theme: DarkTheme,
                /*
                zoom: {
                  controls: true,
                  wheel: true,
                  startScale: 1.0,
                  maxScale: 3,
                  minScale: 0.3,
                  scaleSpeed: 1.2,
                  pinch: true
                },*/
            }
            
            }
            workspaceDidChange={workspaceDidChange}
        />
        <Link to="/">
            <Button 
              variant="contained" 
              onClick={() => {
                //Blockly.mainWorkspace.clear()
              }}
            >
            Add this learning strategy
            </Button>
        </Link>
      </div>
    );
}