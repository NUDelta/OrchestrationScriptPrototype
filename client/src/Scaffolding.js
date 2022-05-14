import React, { useEffect } from "react";
// import Collapsible from 'react-collapsible';

export default function Scaffolding() {
  const [q3, setQ3] = React.useState("Example pseudocode\nSituation: when this happens \nStrategy: do this, at this venue/time");
    return (
      <div>
        <b>Step 1: reflect on situation to script for</b>
        <br />
        <label style={{fontSize: "15px"}}>Think back to a time when one of your students was not working or learning effectively this quarter. Describe what the student did and how you noticed it was happening.</label>
        <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: example of a situation here</p>
        <textarea style={{ height: "20vh", width: "100%", fontSize: "15px", marginBottom: 16, marginTop: 10, resize: "vertical" }}></textarea>

        <b>Step 2: reflect on strategy for the above situation</b>
        <br />
        <label style={{fontSize: "15px"}}>After you noticed the above situation, how did you support your student in practicing a more effective working or learning strategy?
        </label>
        <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: example of a situation here</p>
        <textarea style={{ height: "10vh", width: "100%", fontSize: "15px", marginBottom: 16, marginTop: 10, resize: "vertical" }}></textarea>
        
        {/* 
        <label style={{fontSize: "15px"}}>Step3: Restate more concisely the <br/>1) the ineffective working or learning strategy you are trying to detect and <br/>2) 2 or more ways you would like to support the student to implement the effective strategy by getting support from appropriate venues/tools/people/processes in the DTR network?</label>
        */}

        <b>Step 3: describe your situation and strategy in pseudocode</b>
        <br />
        <label style={{fontSize: "15px"}}>Based on your answers for Steps 1 and 2, write pseudocode for both the situation and the support strategy. There's no need to get all the details in the pseudocode here, please refer to the example below.</label>
        <p style={{fontStyle: "italic", fontSize: "12px"}}>
          Example:
          <ul>
            <li>Situation: <u>when</u> example happens</li>
            <li>Strategy: <u>do</u> example <u>at</u> venue</li>
          </ul>
        </p>

        <textarea style={{ height: "20vh", width: "100%", fontSize: "15px", marginTop: 10, marginBottom: 16, resize: "vertical" }}></textarea>

      </div>
    );
}