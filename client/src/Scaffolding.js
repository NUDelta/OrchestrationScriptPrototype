import React, { useEffect } from "react";
// import Collapsible from 'react-collapsible';

export default function Scaffolding() {
  const [q3, setQ3] = React.useState("Example pseudocode\nSituation: when this happens \nStrategy: do this, at this venue/time");
    return (
      <div>

        <label style={{fontSize: "15px"}}>Step1: Think back to a time when one of your students was not working or learning effectively this quarter. Describe what the student did and how you noticed it was happening.</label>
        <textarea style={{ height: "20vh", width: "100%", fontSize: "15px", marginBottom: 16, marginTop: 10, resize: "vertical" }}></textarea>

        <label style={{fontSize: "15px"}}>Step2: After you noticed this situation, how did you support your student in practicing a more effective working or learning strategy?
        
        </label>
        <textarea style={{ height: "10vh", width: "100%", fontSize: "15px", marginBottom: 16, marginTop: 10, resize: "vertical" }}></textarea>
        
        {/* 
        <label style={{fontSize: "15px"}}>Step3: Restate more concisely the <br/>1) the ineffective working or learning strategy you are trying to detect and <br/>2) 2 or more ways you would like to support the student to implement the effective strategy by getting support from appropriate venues/tools/people/processes in the DTR network?</label>
        */}
        <label style={{fontSize: "15px"}}>Step3: Based on your answers for step 1 and 2, write pseudocode for both the situation and the support strategy. <br/>There's no need to get all the details in the pseudocode here, please refer to the example below. </label>
        <textarea style={{ height: "20vh", width: "100%", fontSize: "15px", marginTop: 10, marginBottom: 16, resize: "vertical" }} value = {q3}></textarea>

      </div>
    );
}