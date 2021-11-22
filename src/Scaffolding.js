import React from 'react';

export default function Scaffolding() {
    return (
      <div>
        <label style={{fontSize: "20px"}}>Step1: List 2-4 instances this quarter when your mentee worked in an ineffective way.</label>
        <textarea style={{ height: "20vh", width: "100%", fontSize: "20px" }}></textarea>

        <label style={{fontSize: "20px"}}>Step2: Choose 1 instance from step 1 which you would like to detect in the future.</label>
        <textarea style={{ height: "10vh", width: "100%", fontSize: "20px" }}></textarea>

        <label style={{fontSize: "20px"}}>Step3: Why was that instance an ineffective way of working in that case?</label>
        <textarea style={{ height: "20vh", width: "100%", fontSize: "20px" }}></textarea>

        <label style={{fontSize: "20px"}}>Step4: What’s the underlying effective strategy you are trying to teach here?</label>
        <textarea style={{ height: "10vh", width: "100%", fontSize: "20px" }}></textarea>

        <label style={{fontSize: "20px"}}>Step5: Think about mentee’s current and future project risk to brainstorm 0-4 more future instances when this effective strategy won’t be used?</label>
        <textarea style={{ height: "20vh", width: "100%", fontSize: "20px" }}></textarea>

        <label style={{fontSize: "20px"}}>Step 6: Choose 2 instances from steps 2 and 5. In the workspaces below, please write the detection condition and the desired response if the instance is detected.</label>
        <textarea style={{ height: "10vh", width: "100%", fontSize: "20px" }}></textarea>
      </div>
    );
}