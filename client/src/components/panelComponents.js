import React, { useState } from "react";
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
//CustomizeTime, Communication, Studio, Sig, Oh, OtherTime, SprintLog, Prc, Rrc, Github, StudioTools

function CustomizeTime (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>Time object: specify when you want to check a resource or execute an action</b>
            <br />
            <ul>
                <li>Modifier: “at”, “before”, “after”, “* day * hours * minutes at/before/after”</li>
                <li>Event: “beginning of sprint”, “middle of sprint”, “end of sprint”, “middle of week”, “SIG”, “office hour”, “studio”, “Sunday”, “Monday”, “Tuesday”, “Wednesday”, “Thursday”, “Friday”, “Saturday”</li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>class Time: <br/>&nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, modifier, event):<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.modifier = modifier<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.event = event</p>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: Time(modifier = "at", event = "office hour")</p>
        </Paper>
    </div>
}

function Communication (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>have_you_slacked()</b>
            <br />
            <ul>
                <li>Description: this function returns wheher your mentee has sent a slack message to a person</li>
                <li>Input: string(name)	</li>
                <li>Output: boolean</li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: have_you_slacked("Haoqi")</p>
        </Paper>
        <br/>
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>have_you_slacked_deliverables_to()</b>
            <br />
            <ul>
                <li>Description: this function returns whether your mentee has sent deliverable to a given Slack channel or thread</li>
                <li>Input: string(channel/thread name)</li>
                <li>Output: boolean</li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: have_you_slacked_deliverables_to("sig-not")</p>
        </Paper>
        <br/>
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>send_question_and_ask()</b>
            <br />
            <ul>
                <li>Description: this function sends a question to a person at a specified time and return whether their answer contain one or more keywords</li>
                <li>Input: string(name), string(question), Time(time), string(one or more keywords)</li>
                <li>Output: </li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: send_question_and_ask("Jason", "What deliverables have you planned for this sprint?", Time("One hour before", "Office Hour"), "takeaways")</p>
        </Paper>
    </div>
}

function Studio (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>Title</b>
            <br />
            <ul>
                <li>Description: </li>
                <li>Input: </li>
                <li>Output: </li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: </p>
        </Paper>
    </div>
}

function Sig (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>Title</b>
            <br />
            <ul>
                <li>Description: </li>
                <li>Input: </li>
                <li>Output: </li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: </p>
        </Paper>
    </div>
}

function Oh (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>Title</b>
            <br />
            <ul>
                <li>Description: </li>
                <li>Input: </li>
                <li>Output: </li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: </p>
        </Paper>
    </div>
}

function OtherTime (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>Title</b>
            <br />
            <ul>
                <li>Description: </li>
                <li>Input: </li>
                <li>Output: </li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: </p>
        </Paper>
    </div>
}

function SprintLog (){

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
    ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {setPage(newPage);};
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [rows, setRows] = useState(originalRows);
    const [searched, setSearched] = useState("");
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

    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>    
            <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />
            <br/>
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
    </div>
}

function Prc (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>Title</b>
            <br />
            <ul>
                <li>Description: </li>
                <li>Input: </li>
                <li>Output: </li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: </p>
        </Paper>
    </div>
}

function Rrc (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>Title</b>
            <br />
            <ul>
                <li>Description: </li>
                <li>Input: </li>
                <li>Output: </li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: </p>
        </Paper>
    </div>
}

function Github (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>Title</b>
            <br />
            <ul>
                <li>Description: </li>
                <li>Input: </li>
                <li>Output: </li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: </p>
        </Paper>
    </div>
}

function StudioTools (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>Title</b>
            <br />
            <ul>
                <li>Description: </li>
                <li>Input: </li>
                <li>Output: </li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: </p>
        </Paper>
    </div>
}

export {CustomizeTime, Communication, Studio, Sig, Oh, OtherTime, SprintLog, Prc, Rrc, Github, StudioTools}