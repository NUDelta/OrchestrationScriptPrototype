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
import {actionToolbox} from "./toolboxCategories";

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
      <div>
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