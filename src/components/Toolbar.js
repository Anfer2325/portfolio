import React, { Fragment } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     listStyle: "none",
//     padding: theme.spacing(0.5),
//     margin: 0,
//   },
//   chip: {
//     margin: theme.spacing(0.5),
//   },
// }));
const Toolbar = (props) => {
  return (
    <Fragment>
      <li>
        <Chip
          icon={
            <span className="tool-icon">
              <span className="fab fa-html5 "></span>
            </span>
          }
          label={"HTML"}
        />
      </li>
      <li>
        <Chip
          icon={
            <span className="tool-icon">
              <span className="fab fa-css3-alt"></span>
            </span>
          }
          label={"CSS"}
        />
      </li>
      <li>
        <Chip
          icon={
            <span className="tool-icon">
              <span className="fab fa-js-square"></span>
            </span>
          }
          label={"JAVASCRIPT"}
        />
      </li>
      <li>
        <Chip
          icon={
            <span className="tool-icon">
              <span className="fab fa-java"></span>
            </span>
          }
          label={"JAVA"}
        />
      </li>
      <li>
        <Chip
          icon={
            <span className="tool-icon">
              <span className="fas fa-code"></span>
            </span>
          }
          label={"C++"}
        />
      </li>
      <li>
        <Chip
          icon={
            <span className="tool-icon">
              <span className="fas fa-code"></span>
            </span>
          }
          label={"EMBED JS"}
        />
      </li>
      <li>
        <Chip
          icon={
            <span className="tool-icon">
              <span className="fab fa-react"></span>
            </span>
          }
          label={"REACT"}
        />
      </li>
      <li>
        <Chip
          icon={
            <span className="tool-icon">
              <span className="fas fa-database"></span>
            </span>
          }
          label={"SQL"}
        />
      </li>
      <li>
        <Chip
          icon={
            <span className="tool-icon">
              <span className="fas fa-database"></span>
            </span>
          }
          label={"NOSQL"}
        />
      </li>
      <li>
        <Chip
          icon={
            <span className="tool-icon">
              <span className="fas fa-database"></span>
            </span>
          }
          label={"ORACLE"}
        />
      </li>
      <li>
        <Chip
          icon={
            <span className="tool-icon">
              <span className="fas fa-database"></span>
            </span>
          }
          label={"FIREBASE"}
        />
      </li>
      <li>
        <Chip
          icon={
            <span className="tool-icon">
              <span className="fab fa-google"></span>
            </span>
          }
          label={"GOOGLE CLOUD FUNCTIONS"}
        />
      </li>
    </Fragment>
  );
};

export default Toolbar;
