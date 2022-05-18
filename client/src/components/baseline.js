import React, { useState } from "react";
import {Link, NavLink} from "react-router-dom";
import CodeEditor from '@uiw/react-textarea-code-editor';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SearchBar from "./SearchBar";

//import MaterialTable from "material-table";

function createData(name, input, output, type) {
    return { name, input, output, type };
   }
     
const originalRows = [
createData("Sprint_log.working_on_tech", "none", "boolean", "tools"),
createData("Sprint_log.working_on_user_testing", "none", "boolean", "tools"),
createData("Sprint_log.working_on_argumentation", "none", "boolean", "tools"),
createData("Sprint_log.one_fourth_through_points", "none", "boolean", "tools"),
createData("Sprint_log.halfway_through_points", "none", "boolean", "tools"),
createData("Sprint_log.three_fourths_through_points", "none", "boolean", "tools"),
createData("Sprint_log.hours_spent_on_tech", "none", "int", "tools"),
createData("Sprint_log.hours_spent_on_design", "none", "int", "tools"),
createData("Sprint_log.hours_spent_on_research", "none", "int", "tools"),
createData("Sprint_log.hours_spent_on_argumentation", "none", "int", "tools"),
createData("Sprint_log.over_points_on_a_story", "none", "boolean", "tools"),
createData("Sprint_log.at_least_one_task _is_complete", "none", "boolean", "tools"),
createData("Sprint_log.at_least_one_story_is_incomplete", "none", "boolean", "tools"),
createData("Sprint_log.at_least_one_story_is_complete", "none", "boolean", "tools"),
createData("Sprint_log.all_stories_completed", "none", "boolean", "tools"),
createData("Sprint_log.has_not_finished_any_tasks", "none", "boolean", "tools"),
createData("Sprint_log.stories_or_tasks.contains()", "string", "boolean", "tools"),
createData("Sprint_log.not_updated", "none", "boolean", "tools"),
createData("Sprint_log.updated", "none", "boolean", "tools"),
createData("Canvas.not_updated", "none", "boolean", "tools"),
createData("Canvas.updated", "none", "boolean", "tools"),
createData("PRC_has_new.gap_in_canvas_which_is_risky", "none", "boolean", "tools"),
createData("PRC_has_new.focus_for_sprint", "none", "boolean", "tools"),
createData("PRC_has_new.problem_statement", "none", "boolean", "tools"),
createData("PRC_has_new.interface_model", "none", "boolean", "tools"),
createData("PRC_has_new.system_model", "none", "boolean", "tools"),
createData("PRC_has_new.study_design", "none", "boolean", "tools"),
createData("PRC_has_new.testing_takeaways", "none", "boolean", "tools"),
createData("RRC_has_new.research_audience", "none", "boolean", "tools"),
createData("RRC_has_new.class_of_problems", "none", "boolean", "tools"),
createData("RRC_has_new.existing_approaches", "none", "boolean", "tools"),
createData("RRC_has_new.research_question", "none", "boolean", "tools"),
createData("RRC_has_new.conceptual_contribution", "none", "boolean", "tools"),
createData("RRC_has_new.technical_contribution", "none", "boolean", "tools"),
createData("RRC_has_new.synthesis_tree", "none", "boolean", "tools"),
createData("RRC_has_new.study_design", "none", "boolean", "tools"),
createData("RRC_has_new.core_takeaways", "none", "boolean", "tools"),
createData("RRC_has_new.revised_understanding_of_conceptual_and_technical_approach", "none", "boolean", "tools"),
createData("RRC_has_new.future_work", "none", "boolean", "tools"),
createData("last_studio_pr_request_contained()", "string", "boolean", "tools"),
createData("last_studio_mysore_signup_contained()", "string", "boolean", "tools"),
createData("have_you_slacked()", "string: name", "boolean", "people"),
createData("have_you_slacked_deliverables_to()", "string: channel/thread name", "boolean", "people"),
createData("send_question_and_ask()", "string: name, string: question, string: time, string: keyword", "boolean", "people"),
];


export default function Baseline() {


    const [code, setCode] = React.useState(
        `if (){ //specify learning opportunity\n       //specify support strategies \n\n\n\n\n}`
    );

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [rows, setRows] = useState(originalRows);
    const [searched, setSearched] = useState("");
    //const classes = useStyles();

    const requestSearch = (searchedVal) => {
        const filteredRows = originalRows.filter((row) => {
        return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };
    
    return (
    <div style={{/*backgroundColor: '#1e1e1e',*/marginLeft:16, marginRight:16, marginTop:16,marginBottom:16}}>
        <Link to="/">
            <Button variant="outlined" onClick={() => {
            }}>Experiment/Control</Button>
        </Link>
        <Grid container spacing={5}>

            <Grid item xs={6}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <SearchBar
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                />
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                        <TableCell>Function name</TableCell>
                        <TableCell align="right">Input</TableCell>
                        <TableCell align="right">Output</TableCell>
                        <TableCell align="right">Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows 
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => (
                        <TableRow key={row.number}>
                            <TableCell component="th" scope="row">
                            {row.name}
                            </TableCell>
                            <TableCell align="right">{row.input}</TableCell>
                            <TableCell align="right">{row.output}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                        
            </Paper>
            </Grid>
        
            <Grid item xs={6}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <CodeEditor
                value={code}
                language="js"
                placeholder="Please enter JS code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    fontSize: 20,
                    backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
                />
            </Paper>
            </Grid>
        </Grid>
       
    </div>
    );
  }