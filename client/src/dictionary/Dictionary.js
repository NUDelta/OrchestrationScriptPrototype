import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(type, set, blocks) {
  return {
    type,
    set,
    blocks,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.type}
        </TableCell>
        <TableCell align="right">{row.set}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {/*
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
            */}
              <Table size="small" aria-label="blocks">
                <TableHead>
                  <TableRow>
                    <TableCell>Block</TableCell>
                    <TableCell>Input</TableCell>
                    <TableCell align="right">Output</TableCell>
                    <TableCell align="right">Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.blocks.map((blockRow) => (
                    <TableRow key={blockRow.name}>
                      <TableCell component="th" scope="row">
                        {blockRow.name}
                      </TableCell>
                      <TableCell>{blockRow.input}</TableCell>
                      <TableCell align="right">{blockRow.output}</TableCell>
                      <TableCell align="right">
                        {blockRow.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Situation Detector", "Logic", [
    {
      name: "not",
      input: "boolean",
      output: "boolean",
      description: "blahblah",
    },
    {
      name: "and",
      input: "boolean",
      output: "boolean",
      description: "blahblah",
    },
    {
      name: "or",
      input: "boolean",
      output: "boolean",
      description: "blahblah",
    },
    {
      name: "logic compare",
      input: "boolean",
      output: "boolean",
      description: "blahblah",
    },
  ]),
  createData("Situation Detector", "Text", [
    {
      name: "text block",
      input: "string",
      output: "string",
      description: "blahblah",
    },
  ]),
  createData("Situation Detector", "Math", [
    {
      name: "round block",
      input: "number",
      output: "number",
      description: "blahblah",
    },
    {
      name: "numerical value",
      input: "number",
      output: "number",
      description: "blahblah",
    },
    {
      name: "+",
      input: "number",
      output: "number",
      description: "blahblah",
    },
    {
      name: "-",
      input: "number",
      output: "number",
      description: "blahblah",
    },
    {
      name: "Abs",
      input: "number",
      output: "number",
      description: "blahblah",
    },
    {
      name: ">",
      input: "number",
      output: "number",
      description: "blahblah",
    },
    {
      name: "<",
      input: "number",
      output: "number",
      description: "blahblah",
    },
  ]),
  createData("Situation Detector", "Resources", [
    {
      name: "Sprint Log",
      input: "N/A",
      output: "resource",
      description: "blahblah",
    },
    {
      name: "RRC",
      input: "N/A",
      output: "resource",
      description: "blahblah",
    },
    {
      name: "PRC",
      input: "N/A",
      output: "resource",
      description: "blahblah",
    },
    {
      name: "URG Guide",
      input: "N/A",
      output: "resource",
      description: "blahblah",
    },
  ]),
  createData("Situation Detector", "Functions", [
    {
      name: "wasUpdated",
      input: "resource",
      output: "boolean",
      description:
        "This function tells you whether a resource was updated over a time period or not",
    },
    {
      name: "filled",
      input: "resource",
      output: "boolean",
      description:
        "This function tells you whether a resource is filled or not",
    },
    {
      name: "wasRead",
      input: "resource",
      output: "boolean",
      description: "This function tells you whether a resource was read or not",
    },
    {
      name: "fulfillment",
      input: "message string, recipient string",
      output: "boolean",
      description: "This function asks a person a true/false question",
    },
  ]),
  createData("Situation Detector", "Concepts", [
    {
      name: "set ... to ...",
      input: "any, string",
      output: "any",
      description: "defines a concept variable and gives it a name",
    },
    {
      name: "Concept Variable",
      input: "string",
      output: "any",
      description: "creates an instance of a defined concept variable",
    },
  ]),
  createData("Situation Detector", "Situation", [
    {
      name: "Situation",
      input: "boolean",
      output: "situation",
      description: "defines a situation",
    },
  ]),
  createData("Action Set", "Logic", [
    {
      name: "if",
      input: "situation, communication, optional",
      output: "N/A",
      description: "defines desired actions when a situation is met or not",
    },
  ]),
  createData("Action Set", "Situation", [
    {
      name: "situation",
      input: "N/A",
      output: "situation",
      description:
        "creates an instance of the situation defined in situation detector",
    },
  ]),
  createData("Action Set", "Text", [
    {
      name: "text block",
      input: "string",
      output: "string",
      description: "blahblah",
    },
  ]),
  createData("Action Set", "Communication", [
    {
      name: "send",
      input: "message string, medium, recipient string",
      output: "communication",
      description: "sends a message through a medium and to a recipient",
    },
  ]),
  createData("Action Set", "Medium", [
    {
      name: "slack",
      input: "N/A",
      output: "medium",
      description: "defines medium: slack",
    },
    {
      name: "email",
      input: "N/A",
      output: "medium",
      description: "defines medium: email",
    },
  ]),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>BLOCK SET</TableCell>
            <TableCell align="right">BLOCK TYPE</TableCell>
            {/*
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
