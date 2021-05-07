import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1500,
  },
  
  margin: {
    height: theme.spacing(3),
  },
  
}));

const marks = [
  {value: 0,label: 'Wed',},
  {value: 10,label: 'Thu',},
  {value: 20,label: 'Fri',},
  {value: 30,label: 'Sat',},
  {value: 40,label: 'Sun',},
  {value: 50,label: 'Mon',},
];

function valuetext(value) {
  return ``;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  const [value, setValue] = React.useState([20, 30]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        Timeline
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </div>
  );
}