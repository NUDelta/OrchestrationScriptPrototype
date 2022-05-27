import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import APIList from "./apiList";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const initialStrategy = 'function supportStrategy() {\n// define a support strategy that runs when the evaluated situationDetector is true\n  const strategyName = "";\n  const message = "";\n  const time = Time(modifier: "", event: "");\n\n// deliver the support strategy\n  send_slack_message(strategyName, message, time);\n}'

const initialSituation = 'function situationDetector() {\n// specify a boolean condition for the situation  you want to detect using the API on the left\n  return true;\n}'

const Strategy = () => {
  return <div>
  <Paper sx={{ width: '100%', overflow: 'hidden'}} style={{ padding: 8}}>
      <CodeEditor
      value={initialStrategy}
      language="js"
      placeholder="Please enter JS code."
      padding={15}
      style={{
          fontSize: 18,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
      />
  </Paper>
  </div>;
};

const initialStrategyList = [<Strategy key={0}/>];

const SituationStrategyPair = () => {
  const [strategyList, setStrategyList] = useState(initialStrategyList);
  const onStrategyButtonClick = event => {
    setStrategyList(strategyList.concat(<Strategy key={strategyList.length} />));
  };
  const [openCollapse, setOpenCollapse] = React.useState(true);
  const onCollapseButtonClick = event => {
    setOpenCollapse(!openCollapse);
};
  return <div>
  <Button variant="outlined" onClick={onCollapseButtonClick} style={{width:"100%"}}>{openCollapse ? <ExpandLess /> : <ExpandMore />}</Button>
  <Collapse in={openCollapse} timeout="auto" unmountOnExit>
  <Paper sx={{ width: '100%', overflow: 'hidden', padding: 16}} style={{ padding: 8}}>
  <Paper sx={{ width: '100%', overflow: 'hidden'}} style={{ padding: 8}}>
      <CodeEditor
      value={initialSituation}
      language="js"
      placeholder="Please enter JS code."
      padding={15}
      style={{
          fontSize: 18,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
      />
  </Paper>
  <br/>
  {strategyList}
  <Button variant="outlined" onClick={onStrategyButtonClick}>Add strategy</Button>
  </Paper>
  </Collapse>
   </div>;
};

export default function Baseline() {

    const [pairList, setPairList] = useState([<SituationStrategyPair key={0} />]);

    const onPairButtonClick = event => {
      setPairList(pairList.concat(<SituationStrategyPair key={pairList.length} />));
    }

    return (
    <div style={{marginLeft:16, marginRight:16, marginTop:16,marginBottom:16}}>
        <Grid container spacing={5}>
            <Grid item xs={6}>
                <APIList/>
            </Grid>
            <Grid item xs={6}>
            {pairList}
            <br/>
            <Button variant="outlined" onClick={onPairButtonClick}>Add Situation Strategy Pair</Button>
            </Grid>
        </Grid>
    </div>
    );
  }
