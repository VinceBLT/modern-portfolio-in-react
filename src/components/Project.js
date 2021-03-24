import React from "react";
import { useState } from "react";
import { projectsData } from "../data/projectsData";

const Project = (props) => {
  const [currentProject] = useState(projectsData);
  const project = currentProject[props.projectNumber];
  console.log(project);
  return (
    <div>
      <h1>Projet numéro {props.projectNumber}</h1>
    </div>
  );
};

export default Project;
