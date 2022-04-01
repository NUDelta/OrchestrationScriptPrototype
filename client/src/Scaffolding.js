import React from 'react';
// import Collapsible from 'react-collapsible';

export default function Scaffolding() {
    return (
      <div>

        <label style={{fontSize: "15px"}}>Step1: Think back to a time when one of your students was not working or learning effectively this quarter. Describe what the student did and how you noticed it was happening.</label>
        <textarea style={{ height: "20vh", width: "100%", fontSize: "15px", marginBottom: 16, marginTop: 10 }}></textarea>

        <label style={{fontSize: "15px"}}>Step2: After you noticed this situation, how did you support your student in practicing a more effective working or learning strategy?<br/>In an ideal world, how would you have supported them to implement the effective strategy across the venues/tools/processes in the DTR network?</label>
        <textarea style={{ height: "10vh", width: "100%", fontSize: "15px", marginBottom: 16, marginTop: 10 }}></textarea>

        <label style={{fontSize: "15px"}}>Step3: Restate more concisely the <br/>1) the ineffective working or learning strategy you are trying to detect and <br/>2) how you would like to support the student to implement the effective strategy across the venues/tools/processes in the DTR network?</label>
        <textarea style={{ height: "20vh", width: "100%", fontSize: "15px", marginTop: 10, marginBottom: 16 }}></textarea>

      </div>
    );
}