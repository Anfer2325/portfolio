import React, { useState, createRef } from "react";
import "typeface-roboto";
import { createStyles, withStyles } from "@material-ui/styles";
//components

import Aboutme from "../src/components/Aboutme";
import Projects from "../src/components/Projects";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import ToolBar from "./components/Toolbar";
import "./App.css";
const styles = createStyles({
  paper: {
    width: "100%",
    display: "flex",
    backgroundColor: "#f8f0fb",
    zIndex: "100",
    boxShadow: "0 0 0",
  },
  toolboxContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    margin: 0,
    width: "75%",
    alignSelf: "flex-start",
    padding: "10px",
    marginTop: "25px",
  },
});
function App(props) {
  var AboutMeRef = createRef();
  const [aboutMe, setAboutMe] = useState(true);
  const [projects, setProjects] = useState(false);
  const [toolBox, setToolBox] = useState(false);
  const [header, setHeader] = useState("ABOUT ME");

  return (
    <div className="App">
      {/* <div className="flex-sidebar"></div> */}
      <div className="flex-content-1">
        <div className="menu-container">
          <div className="buttons-container">
            <button
              onClick={() => {
                if (aboutMe === false) {
                  setHeader("ABOUT ME");
                  setProjects(false);
                  setToolBox(false);
                  setAboutMe(true);
                  if (document.getElementById("ProjectSlide") != null) {
                    document
                      .getElementById("ProjectSlide")
                      .classList.add("hide");
                  }

                  if (document.getElementById("toolBoxSlide") != null) {
                    document
                      .getElementById("toolBoxSlide")
                      .classList.add("hide");
                  }
                }
                if (window.innerWidth <= 768) {
                  // document
                  //   .getElementsByClassName("flex-content-1")[0]
                  //   .classList.add("hide-menu");
                  document
                    .getElementsByClassName("flex-content-1")[0]
                    .classList.remove("show-menu");
                  document
                    .getElementsByClassName("flex-content-2")[0]
                    .classList.remove("hide-content");
                }
              }}
            >
              <i className="fas fa-address-card"></i>
              ABOUT ME
            </button>
            <button
              onClick={() => {
                if (projects === false) {
                  setHeader("PROJECTS");
                  setAboutMe(false);
                  setToolBox(false);
                  setProjects(true);

                  if (document.getElementById("AboutMeSlide") != null) {
                    document
                      .getElementById("AboutMeSlide")
                      .classList.add("hide");
                  }

                  if (document.getElementById("toolBoxSlide") != null) {
                    document
                      .getElementById("toolBoxSlide")
                      .classList.add("hide");
                  }
                }
                if (window.innerWidth <= 768) {
                  // document
                  //   .getElementsByClassName("flex-content-1")[0]
                  //   .classList.add("hide-menu");
                  document
                    .getElementsByClassName("flex-content-1")[0]
                    .classList.remove("show-menu");
                  document
                    .getElementsByClassName("flex-content-2")[0]
                    .classList.remove("hide-content");
                }
              }}
            >
              <i className="fas fa-code"></i>
              PROYECTS
            </button>
            <button
              onClick={() => {
                if (toolBox === false) {
                  setHeader("ToolBox");
                  setAboutMe(false);
                  setProjects(false);
                  setToolBox(true);
                  if (document.getElementById("AboutMeSlide") != null) {
                    document
                      .getElementById("AboutMeSlide")
                      .classList.add("hide");
                  }

                  if (document.getElementById("ProjectSlide") != null) {
                    document
                      .getElementById("ProjectSlide")
                      .classList.add("hide");
                  }
                }
                if (window.innerWidth <= 768) {
                  // document
                  //   .getElementsByClassName("flex-content-1")[0]
                  //   .classList.add("hide-menu");
                  document
                    .getElementsByClassName("flex-content-1")[0]
                    .classList.remove("show-menu");
                  document
                    .getElementsByClassName("flex-content-2")[0]
                    .classList.remove("hide-content");
                }
              }}
            >
              <i className="fas fa-code"></i>
              TOOLBOX
            </button>
          </div>
          <Divider className="divider"></Divider>
          <div className="media">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/anfernee-castillo-b8428010b/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a target="_blank" href="https://github.com/Anfer2325">
              <i className="fab fa-github-square"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/anferneecastillo/?hl=es-la"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
          <Divider className="divider"></Divider>
        </div>
      </div>
      <div className="flex-content-2">
        <div className="header">
          <h1>{header}</h1>
          <i
            className="fas fa-bars menu-button"
            onClick={() => {
              document
                .getElementsByClassName("flex-content-1")[0]
                .classList.add("show-menu");
              document
                .getElementsByClassName("flex-content-2")[0]
                .classList.add("hide-content");
              console.log("menu click button");
            }}
          ></i>
        </div>

        <div className="content">
          <Slide
            direction="left"
            in={aboutMe}
            mountOnEnter
            unmountOnExit
            id="AboutMeSlide"
          >
            <Paper elevation={4} className={props.classes.paper}>
              {/* {aboutMe ? <Aboutme></Aboutme> : <Projects></Projects>} */}
              <Aboutme></Aboutme>
            </Paper>
          </Slide>
          <Slide
            direction="left"
            in={projects}
            mountOnEnter
            unmountOnExit
            id="ProjectSlide"
          >
            <Paper elevation={4} className={props.classes.paper}>
              <Projects></Projects>
            </Paper>
          </Slide>
          <Slide
            direction="left"
            in={toolBox}
            mountOnEnter
            unmountOnExit
            id="toolBoxSlide"
          >
            <Paper
              elevation={4}
              component="ul"
              className={props.classes.toolboxContainer}
            >
              <div className="toolbox-container">
                <ToolBar></ToolBar>
              </div>
            </Paper>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(App);
