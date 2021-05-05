import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { PhotoLibrary, ClosedCaption, MonochromePhotos, DeveloperMode,LaptopChromebook, Code } from '@material-ui/icons';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        boxShadow: "0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)",
        color: "green",

    },

    title: {
        fontSize: 35,
        color: "green",
        display: "block",
        verticalAlign:"middle",
    },
    bar: {
        borderRadius: 15,
        height: 8,
        backgroundColor: '#EAEAEA',
        color: "#fff",
        label: '60%',
    },
    progresscolor: {
        color: "#008000",
        verticalAlign: "sub",
    }
});

export default function ProfileComponent() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                <Typography variant="h4" className={classes.title}  component="p">
                        <p> <LaptopChromebook fontSize="large"/>  Skills</p>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p> <Code className={classes.progresscolor} />  React Programming</p>
                        <LinearProgressWithLabel className={classes.progresscolor} variant="determinate" color="primary" value={80} valueBuffer={80} />
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p> <PhotoLibrary className={classes.progresscolor} />  Graphics Designing</p>
                        <LinearProgressWithLabel className={classes.progresscolor} variant="determinate" color="primary" value={70} valueBuffer={80} />
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p> <DeveloperMode className={classes.progresscolor} />  Java/Python</p>
                        <LinearProgressWithLabel className={classes.progresscolor} variant="determinate" color="primary" value={40} valueBuffer={80} />
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p> <ClosedCaption className={classes.progresscolor} />  Adobe Softwares</p>
                        <LinearProgressWithLabel className={classes.progresscolor} variant="determinate" color="primary" value={50} valueBuffer={80} />
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p> <MonochromePhotos className={classes.progresscolor} />  SEO</p>
                        <LinearProgressWithLabel className={classes.progresscolor} variant="determinate" color="primary" value={40} valueBuffer={80} />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

            </CardActions>
        </Card>
    );
    function LinearProgressWithLabel(props) {
        return (<LinearProgress variant="determinate" {...props} />)
    }
}
