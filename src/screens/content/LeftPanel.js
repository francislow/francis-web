import React from 'react'
import {
  Link
} from "react-router-dom";

import './leftpanel.css'
import projects from '../../library/assets/catalogue/projectsData';

export default function LeftPanel({activeProjectId}) {

  function renderAllProjectName() {
      return Object.keys(projects).map(function(key) {
        return (
          <Link to={`/main/content/projects/${key}`}>
            <p className={activeProjectId == key ? "active_link" : "inactive_link"}>
                {projects[key].name}
            </p>
          </Link>
        )
      });
  }
  return (
    <div className="left_panel_wrapper">
      <p className="title">My Projects</p>
      {renderAllProjectName()}
    </div>
  )
}
