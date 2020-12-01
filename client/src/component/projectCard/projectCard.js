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
            <strong>Website:</strong> {props.website}
          </li>
          <li>
            <strong>GitHub:</strong> {props.github}
          </li>
        </ul>
      </div>
      <span className="enlarge">𝘅</span>
    </div>
  );
}

export default ProjectCard;
