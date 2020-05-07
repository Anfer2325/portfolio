import React, { Fragment } from "react";
import { createStyles, withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Aboutme from "./Aboutme";
const styles = createStyles({
  Header: {
    width: "inherit",
    backgroundColor: "#673AB7",
    height: "20%",
    boxShadow: "0 0 5px #673AB7, 2px 2px 5px #673AB7",
    marginBottom: "4px",
  },
  content: {
    width: "inherit",
    backgroundColor: "#F8F0FB",
    height: "80%",
    boxShadow: "0 0 5px #673AB7, 2px 2px 5px #673AB7",
  },
});
const Context = (props) => {
  return (
    <Fragment>
      <div className={props.classes.Header}>top header</div>
      <div className={props.classes.content}>
        {" "}
        <Aboutme></Aboutme>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Context);
