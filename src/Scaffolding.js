import React from 'react';
// import Collapsible from 'react-collapsible';

export default function Scaffolding() {
    return (
      <div>

        <label style={{fontSize: "15px"}}>Step1: Think back to a time when your student wasn't working or learning effectively. Describe the situation that occurred and how you noticed that it was happening.</label>
        <textarea style={{ height: "20vh", width: "100%", fontSize: "15px", marginBottom: 16, marginTop: 10 }}></textarea>

        <label style={{fontSize: "15px"}}>Step2: How did you support your student in practicing alternative working or learning strategies? Keep in mind how this strategy can occur across venues/tools/processes in the DTR network.</label>
        <textarea style={{ height: "10vh", width: "100%", fontSize: "15px", marginBottom: 16, marginTop: 10 }}></textarea>

        <label style={{fontSize: "15px"}}>Step3: Restate the situation you described in step1, define your script target in step4, and write a detector script and a response script for them in step5 and 6. </label>
        <textarea style={{ height: "20vh", width: "100%", fontSize: "15px", marginTop: 10, marginBottom: 16 }}></textarea>

      </div>
    );
}