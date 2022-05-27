import React, { useState } from "react";
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
        </Paper>
    </div>
}

function Studio (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>Studio()</b>
            <br />
            <ul>
                <li>Description: time of studio</li>
                <li>Input: none</li>
                <li>Output: Time</li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: "Sprint_log.updated() and Studio()" returns whether your mentee's sprint log has been updated at studio</p>
        </Paper>
    </div>
}

function Sig (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>SIG()</b>
            <br />
            <ul>
                <li>Description: time of SIG</li>
                <li>Input: none</li>
                <li>Output: Time</li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: "Sprint_log.updated() and Sig()" returns whether your mentee's sprint log has been updated at SIG meeting</p>
        </Paper>
    </div>
}

function Oh (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>OfficeHour()</b>
            <br />
            <ul>
                <li>Description: time of office hour</li>
                <li>Input: none</li>
                <li>Output: Time</li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: "Sprint_log.updated() and OfficeHour()" returns whether your mentee's sprint log has been updated at Office Hour</p>
        </Paper>
    </div>
}

function OtherTime (){
    function createData(name, input, output, type) {
        return { name, input, output, type };
    }
    const originalRows = [
        createData("beginning_of_sprint()", "none", "Time", "venues"),
        createData("middle_of_sprint()", "none", "Time", "venues"),
        createData("end_of_sprint()", "none", "Time", "venues"),
        createData("middle_of_week()", "none", "Time", "venues"),
        createData("Sunday()", "none", "Time", "venues"),
        createData("Monday()", "none", "Time", "venues"),
        createData("Tuesday()", "none", "Time", "venues"),
        createData("Wednesday()", "none", "Time", "venues"),
        createData("Thursday()", "none", "Time", "venues"),
        createData("Friday()", "none", "Time", "venues"),
        createData("Saturday()", "none", "Time", "venues"),
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

function SprintLog (){

    function createData(name, input, output, type) {
        return { name, input, output, type };
    }
    const originalRows = [
        createData("Sprint_log.working_on_tech", "none", "boolean", "tools"),
        createData("Sprint_log.working_on_user_testing", "none", "boolean", "tools"),
        createData("Sprint_log.working_on_argumentation", "none", "boolean", "tools"),
        createData("Sprint_log.zero_point_planned", "none", "boolean", "tools"),
        createData("Sprint_log.one_forth_points_planned", "none", "boolean", "tools"),
        createData("Sprint_log.half_points_planned", "none", "boolean", "tools"),
        createData("Sprint_log.three_forth_points_planned", "none", "boolean", "tools"),
        createData("Sprint_log.all_points_planned", "none", "boolean", "tools"),
        createData("Sprint_log.points_planned_design", "none", "int", "tools"),
        createData("Sprint_log.points_planned_tech", "none", "int", "tools"),
        createData("Sprint_log.points_planned_research", "none", "int", "tools"),
        createData("Sprint_log.one_forth_points_spent", "none", "boolean", "tools"),
        createData("Sprint_log.half_points_spent", "none", "boolean", "tools"),
        createData("Sprint_log.three_forth_points_spent", "none", "boolean", "tools"),
        createData("Sprint_log.total_points_spent", "none", "int", "tools"),
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
        createData("Sprint_log.number_of_tasks", "none", "int", "tools"),
        createData("Sprint_log.number_of_stories", "none", "int", "tools"),
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
    function createData(name, input, output, type) {
        return { name, input, output, type };
    }
    const originalRows = [
        createData("Canvas.not_updated", "none", "boolean", "tools"),
        createData("Canvas.updated", "none", "boolean", "tools"),
        createData("PRC_has_new.gap_in_canvas_which_is_risky", "none", "boolean", "tools"),
        createData("PRC_has_new.focus_for_sprint", "none", "boolean", "tools"),
        createData("PRC_has_new.problem_statement", "none", "boolean", "tools"),
        createData("PRC_has_new.interface_model", "none", "boolean", "tools"),
        createData("PRC_has_new.system_model", "none", "boolean", "tools"),
        createData("PRC_has_new.study_design", "none", "boolean", "tools"),
        createData("PRC_has_new.testing_takeaways", "none", "boolean", "tools"),
        createData("End_of_quarter_plan", "none", "String", "tools"),
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

function Rrc (){
    function createData(name, input, output, type) {
        return { name, input, output, type };
    }
    const originalRows = [
        createData("Canvas.not_updated", "none", "boolean", "tools"),
        createData("Canvas.updated", "none", "boolean", "tools"),
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

function Github (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <b>Github.working_on_tech()</b>
            <br />
            <ul>
                <li>Description: returns whether your mentee is working on tech based on Github commit data</li>
                <li>Input: none</li>
                <li>Output: boolean</li>
            </ul>
            <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: Sprint_log.hours_spent_on_tech &gt; 4 and Github.working_on_tech()</p>
        </Paper>
    </div>
}

function StudioTools (){
    return <div> 
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
                <b>last_studio_pr_request_contained()</b>
                <br />
                <ul>
                    <li>Description: returns whether your mentee's last pair research request contains one or more keywords</li>
                    <li>Input: String</li>
                    <li>Output: boolean</li>
                </ul>
                <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: last_studio_pr_request_contained("javascript, react")</p>
            </Paper>
            <br/>
            <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ padding: 8}}>
                <b>last_studio_mysore_signup_contained()</b>
                <br />
                <ul>
                    <li>Description: returns whether your mentee's last LIP signup contains one or more keywords</li>
                    <li>Input: String</li>
                    <li>Output: boolean</li>
                </ul>
                <p style={{fontStyle: "italic", fontSize: "12px"}}>Example: last_studio_mysore_signup_contained("interface")</p>
            </Paper>
        </Paper>
    </div>
}

export {CustomizeTime, Communication, Studio, Sig, Oh, OtherTime, SprintLog, Prc, Rrc, Github, StudioTools}