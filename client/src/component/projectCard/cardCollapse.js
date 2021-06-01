import React from 'react';
import { useState, setState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    margin: theme.spacing(2),
  },
  header: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

export default function CollapseCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [moreInfo, setMoreInfo] = useState("More Info");

  const handleExpandClick = () => {
    setExpanded(!expanded);
    if (moreInfo !== "More Info") {
      setMoreInfo("More Info")
    } else setMoreInfo ("Less Info");
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
      <CardHeader className={classes.header}
        title={props.name}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.name}
      />
      <CardContent>
        <Typography paragraph>Elevator Pitch</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.pitch}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {moreInfo}<ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {props.description}
          </Typography>
          <Button className={classes.button} variant="contained" startIcon={<GitHubIcon /> } href={props.github} target="_blank" >GitHub</Button>
          <Button className={classes.button} variant="contained" startIcon={<VisibilityIcon />} href={props.website} target="_blank" >App</Button>
        </CardContent>
      </Collapse>
    </Card>

    </Grid>
  );
}
