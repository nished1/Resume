import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NishedProfilePic from "../assests/NishedProfilePic.jpg"
import {BusinessCenterRounded, HomeRounded, EmailRounded, PhoneIphone} from '@material-ui/icons';
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    boxShadow: "0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)",

  },
  title: {
    fontSize: 25,
    color: "green",
    verticalAlign:"sub",
    lineHeight:"10px",
  },
});

export default function ProfileComponent() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="440"
          image={NishedProfilePic}
          title="Contemplative Reptile"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color ="green" component="h2">
            NISHED GHIMIRE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            software engineer
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
           <p> <BusinessCenterRounded className={classes.title}/> Front-end Developer</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p><HomeRounded className={classes.title}/> Butwal-4, traffichowk</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p><EmailRounded fontSize="10px" className={classes.title}/> ghimire.nished11@gmail.com</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p><PhoneIphone className={classes.title}/> 9867154462</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
