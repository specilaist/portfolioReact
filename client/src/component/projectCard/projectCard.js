import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useState, setState } from "react";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(100),
    },
  },
  paper: {
		alignContent: 'center'
	},
  projects: {
		display: "flex",
    flexWrap: "wrap",
    // height: 100,
    // width: 100,
  },
  text: {
    margin: theme.spacing(2),
  },
}));

function ProjectCard(props) {
  const [card, setCard] = useState(true);
  const classes = useStyles();

  function enlarge() {
    if (card) {
    } else {
      setCard();
    }
  }

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Code Used:</strong> {props.code}
          </li>
          <li>
            <strong>Website:</strong> <a href={props.website}>{props.website}</a> 
          </li>
          <li>
            <strong>GitHub:</strong> <a href={props.github}>{props.github}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
