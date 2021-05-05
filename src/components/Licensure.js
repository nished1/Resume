import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {  SportsMotorsports} from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding: 15,
        boxShadow: "0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)",

    },

    title: {
        fontSize: 35,
        color: "green",
        display: "block",
    },
    pos: {
        marginBottom: 12,
        verticalAlign: "sub",
        color: "green"
    },
    h1: {
        color: "blue",

    },
    heading: {
        color: "#808080",
    }
});

export default function Licensure() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
       
            <Typography variant="h5" className={classes.title} component="h2">
           <SportsMotorsports fontSize="large" /> Certifications / Licensure
        </Typography>
                <Typography variant="body2" component="p">
                ⦁ Driving License, Reg. No: 01-08-00864384 ,Category “A,B”
                </Typography>
            </CardContent>
            
            

           
            
        </Card>
    );
}
