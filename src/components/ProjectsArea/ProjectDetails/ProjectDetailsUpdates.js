import { projectDetailsUpdates } from "@/data/projectsArea";
import React from "react";
import { Image } from "react-bootstrap";

const { id, updates } = projectDetailsUpdates;

const ProjectDetailsUpdate = ({ update = {} }) => {
  const { title, id } = update;

  return (
    <div className="project-details-updates">
      <div className="project-details-updates-top">
        <h3 className="title">{title}</h3>
        <div className="info-updates d-block d-sm-flex justify-content-between align-items-center">
          <div className="info">

          </div>
          <div className="update">
            <span>#{id} Update</span>
          </div>
        </div>
      </div>

    </div >
  );
};

const ProjectDetailsUpdates = ({ getClassName }) => {
  return (
    <div className={getClassName(id)} id={id}>
      {updates.map((update) => (
        <ProjectDetailsUpdate update={update} key={update.id} />
      ))}
    </div>
  );
};

export default ProjectDetailsUpdates;
