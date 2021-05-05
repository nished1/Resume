import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WorkIcon from '@material-ui/icons/Work';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 15,
    boxShadow: "0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)",
  },
  
  title: {
    fontSize: 35,
    color: "green",
  },
  pos: {
    marginBottom: 12,
    verticalAlign:"sub",
    color:"green"
  },
  h1: {
color:"blue",

  },
  heading:{
    color:"#808080",
  }
});

export default function WorkExperience() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h1" className={classes.title} color="textSecondary" gutterBottom>
          <WorkIcon fontSize="large" /><tab> Work Experience </tab>
        </Typography>
        <Typography variant="h5" className={classes.heading} component="h2">
          Front End Developer
        </Typography>
        <Typography className={classes.pos} color="green">
          <CalendarTodayRoundedIcon /> Nov 2020- Today
        </Typography>
        <Typography variant="body2" component="p">
          Done various design in Figma and implemeneted those designs on React.
          <br />
          {'"Neutroline Pvt ltd, Devdaha, BTL"'}
        </Typography>
      </CardContent>
      <CardActions>
        

      </CardActions>
      <hr></hr>

      <Typography variant="h5" className={classes.heading} component="h2">
        Intern at Innovation Lab
        </Typography>
      <Typography className={classes.pos} color="textSecondary">
        <CalendarTodayRoundedIcon /> <tab>JUN 2019- OCT 2019</tab>
      </Typography>
      <Typography variant="body2" component="p">
        Worked in Automated News Writing Robert project and others designing creating and writing stuffs.   
               <br />
        {'"Media FOundation, Gyaneshwor, KTM"'}
      </Typography>
      <CardActions>
      </CardActions>
      <hr></hr>

      <Typography variant="h5" className={classes.heading} component="h2">
        Cloud Worker        </Typography>
      <Typography className={classes.pos} color="textSecondary">
        <CalendarTodayRoundedIcon /> <tab>APR 2017- SEP 2019</tab>
      </Typography>
      <Typography variant="body2" component="p">
        Applied data entry knowledge and [Technique] skills to resolve indecipherable or garbled messages.  
                <br />
        {'"Sprout technology,Bhaisipati, Lalitpur"'}
      </Typography>
      <CardActions>
      </CardActions>
      <hr></hr>

      <Typography variant="h5" className={classes.heading} component="h2">
        SEO Intern     </Typography>
      <Typography className={classes.pos} color="textSecondary">
        <CalendarTodayRoundedIcon /> <tab>Sep 2018- DEC 2018</tab>
      </Typography>
      <Typography variant="body2" component="p">
      Performed ongoing keyword discovery, expansion and optimization to increase search and drive relevant site traffic.
               <br />
        {'"Yala Tech, Kumaripati, Lalitpur"'}
      </Typography>
      <CardActions>
      </CardActions>

    </Card>
  );
}
