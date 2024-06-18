import React from "react";
import "../styles/Projects.css";
import GithubIcon from "@material-ui/icons/GitHub";

function Projects() {
  return (
    <div className="projects">
      <h2>MY PROJECTS</h2>
      <div className="project-list">
        <div className="box1">
          <div className="project-img"></div>
          <h2>My Cart</h2>
          <div className="git-ic">
            <a href="https://github.com/PrasannaIthape/React">
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className="box1">
          <div className="project-img"></div>
          <h2>My Cart</h2>
          <div className="git-ic">
            <a href="https://github.com/PrasannaIthape/React">
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className="box1">
          <div className="project-img"></div>
          <h2>My Cart</h2>
          <div className="git-ic">
            <a href="https://github.com/PrasannaIthape/React">
              <GithubIcon />
            </a>
            {/* <GithubIcon /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
