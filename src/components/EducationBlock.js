import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MenuBook } from '@material-ui/icons';
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

export default function EducationBlock() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                    <MenuBook fontSize="large" /> Education
        </Typography>
                <Typography variant="h5" className={classes.heading} component="h2">
                    Bachelor in Computer Engineering
        </Typography>
                <Typography className={classes.pos} color="green">
                    <CalendarTodayRoundedIcon /> Nov 2015- AUG 2019
        </Typography>
                <Typography variant="body2" component="p">
                    Kantipur Engineering college, Dhapakhel, lalitpur <br />
                    {'"Tribhuvan university"'}
                </Typography>
            </CardContent>
            <CardActions>


            </CardActions>
            <hr></hr>

            <Typography variant="h5" className={classes.heading} component="h2">
                +2 Science
        </Typography>
            <Typography className={classes.pos} color="textSecondary">
                <CalendarTodayRoundedIcon /> <tab>JUL 2013- May 2015</tab>
            </Typography>
            <Typography variant="body2" component="p">
                Everest English Boarding Hr. Sec. School, Butwal
               <br />
                {'"HSEB Board"'}
            </Typography>
            <CardActions>
            </CardActions>
            <hr></hr>

            <Typography variant="h5" className={classes.heading} component="h2">
                SLC       </Typography>
            <Typography className={classes.pos} color="textSecondary">
                <CalendarTodayRoundedIcon /> <tab>APR 2012- MAR 2013</tab>
            </Typography>
            <Typography variant="body2" component="p">
                Everest English Boarding Hr. Sec. School, Butwal
                <br />
                {'"Nepal Government Board"'}
            </Typography>
            <CardActions>
            </CardActions>
        </Card>
    );
}
