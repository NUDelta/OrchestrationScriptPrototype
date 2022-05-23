import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import sideBarItems from './sideBarItems'


import {NavLink, Route, Routes} from "react-router-dom";
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

/*
const styles = {
  list: {
    width: 250,
  },
  links: {
    textDecoration:'none',
  },
  menuHeader: {
    paddingLeft: '30px'
  },
};

const Hi1 = () => {
  return <div> <label>hi1</label> </div>
}

const Hi2 = () => {
    return <div> <label>hi2</label> </div>
}







const OnItemClick = (event, key) => {
  setDocument(documentDict[key]);
}


var myDocument = null;



class SideBar extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      document: <Hi1/>
    }
  }
// this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
handleClick( item ) {
    console.log(item)
    this.setState( prevState => (
      { [ item ]: !prevState[ item ] }
    ) )
  }

handleItemClick(key){
  console.log(key)
  this.setState({
    document: this.state.document = documentDict[key]
  })
}

documentDict = {
  item1: <Hi1/>,
  item2: <Hi2/>
};


// if the menu item doesn't have any child, 
// this method simply returns a clickable menu item 
// that redirects to any location and if there is no child 
// this method uses recursion to go until the last level of children 
// and then returns the item by the first condition.

handler( children ) {
    const { classes } = this.props
    const { state } = this
return children.map( ( subOption ) => {
      if ( !subOption.children ) {
        return (
          <div key={ subOption.name }>
            <ListItem
              button
              key={ subOption.name }>
              <Button onClick={()=>this.handleItemClick(subOption.url)}>{subOption.name}</Button>
              <Link
                to={ subOption.url }
                className={ classes.links }>
                <ListItemText
                  inset
                  primary={ subOption.name }
                />
              </Link>
            </ListItem>
          </div>
        )
      }
      return (
        <div key={ subOption.name }>
          <ListItem
            button
            onClick={ () => this.handleClick( subOption.name ) }>
            <ListItemText
              inset
              primary={ subOption.name } />
            { state[ subOption.name ] ?
              <ExpandLess /> :
              <ExpandMore />
            }
          </ListItem>
          <Collapse
            in={ state[ subOption.name ] }
            timeout="auto"
            unmountOnExit
          >
            { this.handler( subOption.children ) }
          </Collapse>
        </div>
      )
    } )
  }
render() {
    const { classes, drawerOpen, menuOptions } = this.props
    return (
      <div>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <div className={classes.list}>
              <Drawer
                variant="persistent"
                anchor="left"
                open
                classes={ { paper: classes.list } }>
                <div>
                  <List>
                    <ListItem
                      key="menuHeading"
                      divider
                      disableGutters
                    >
                      <ListItemText
                      className={ classes.menuHeader }
                        inset
                        primary="Nested Menu"
                      />
                    </ListItem>
                  { this.handler( sideBarItems.data ) }
                  </List>
                </div>
              </Drawer>
            </div>`
          </Grid>
          <Grid item xs={8}>
            {myDocument}
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default withStyles(styles)(SideBar)

*/
