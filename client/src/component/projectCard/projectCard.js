import React from "react";
import { useState, setState } from "react";
import "./style.css";

function ProjectCard(props) {
  const [card, setCard] = useState(true);

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
            <strong>GitHub:</strong> <a href={props.website}>{props.website}t</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
