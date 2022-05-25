import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import PeopleIcon from '@material-ui/icons/People';
import ForumIcon from '@material-ui/icons/Forum';
import BuildIcon from '@material-ui/icons/Build';
import {CustomizeTime, Communication, Studio, Sig, Oh, OtherTime, SprintLog, Prc, Rrc, Github, StudioTools} from './panelComponents';

const dict = {
    "communication": <Communication/>,
    "studio": <Studio/>,
    "sig": <Sig/>,
    "oh": <Oh/>,
    "other_time": <OtherTime/>,
    "time": <CustomizeTime/>,
    "sprint_log": <SprintLog/>,
    "prc": <Prc/>,
    "rrc": <Rrc/>,
    "github": <Github/>,
    "studio_tools": <StudioTools/>,
};

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

  export default function APIList() {

    // Nested List/side bar
    const classes = useStyles();
    const [openPeople, setOpenPeople] = React.useState(true);
    const [openVenues, setOpenVenues] = React.useState(true);
    const [openTools, setOpenTools] = React.useState(true);
    const handleClickPeople = () => {setOpenPeople(!openPeople);};
    const handleClickVenues = () => {setOpenVenues(!openVenues);};
    const handleClickTools = () => {setOpenTools(!openTools);};

    const [rightPanel, setRightPanel] = React.useState(<Communication/>);
    const handleUpdate = (key) => {setRightPanel(dict[key]);};

    return (
        <div style={{/*backgroundColor: '#1e1e1e',*/marginLeft:16, marginRight:16, marginTop:16,marginBottom:16}}>
            <Grid container spacing={5}>
                <Grid item xs={4}>
                <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    Studio API
                    </ListSubheader>
                }
                className={classes.root}
                >
                    <ListItem button onClick={handleClickPeople}>
                        <ListItemIcon>
                        <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="People" />
                        {openPeople ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openPeople} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItem button className={classes.nested} onClick={()=>{handleUpdate("communication")}}>
                            <ListItemText primary="Communication" />
                        </ListItem>
                        </List>
                    </Collapse>


                    <ListItem button onClick={handleClickVenues}>
                        <ListItemIcon>
                        <ForumIcon />
                        </ListItemIcon>
                        <ListItemText primary="Venues" />
                        {openVenues ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openVenues} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItem button className={classes.nested} onClick={()=>{handleUpdate("studio")}}>

                            <ListItemText primary="Studio" />
                        </ListItem>
                        <ListItem button className={classes.nested} onClick={()=>{handleUpdate("sig")}}>

                            <ListItemText primary="SIG" />
                        </ListItem>
                        <ListItem button className={classes.nested} onClick={()=>{handleUpdate("oh")}}>

                            <ListItemText primary="Office Hour" />
                        </ListItem>
                        <ListItem button className={classes.nested} onClick={()=>{handleUpdate("other_time")}}>

                            <ListItemText primary="Other points in time" />
                        </ListItem>
                        <ListItem button className={classes.nested} onClick={()=>{handleUpdate("time")}}>

                            <ListItemText primary="Customized Time" />
                        </ListItem>
                        </List>
                    </Collapse>


                    <ListItem button onClick={handleClickTools}>
                        <ListItemIcon>
                        <BuildIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tools" />
                        {openTools ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openTools} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItem button className={classes.nested} onClick={()=>{handleUpdate("sprint_log")}}>

                            <ListItemText primary="Sprint Log" />
                        </ListItem>
                        <ListItem button className={classes.nested} onClick={()=>{handleUpdate("prc")}}>

                            <ListItemText primary="PRC" />
                        </ListItem>
                        <ListItem button className={classes.nested} onClick={()=>{handleUpdate("rrc")}}>

                            <ListItemText primary="RRC" />
                        </ListItem>
                        <ListItem button className={classes.nested} onClick={()=>{handleUpdate("github")}}>

                            <ListItemText primary="Github" />
                        </ListItem>
                        <ListItem button className={classes.nested} onClick={()=>{handleUpdate("studio_tools")}}>

                            <ListItemText primary="Studio Tools" />
                        </ListItem>
                        </List>
                    </Collapse>
                </List>
                </Grid>
                <Grid item xs={8}>
                    {rightPanel}
                </Grid>
            </Grid>
        </div>
    );
}