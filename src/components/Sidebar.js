import React from "react";
import { createStyles, withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
const styles = createStyles({
  Sidebar: {
    float: "left",
    backgroundColor: "#211A1D",
    height: "100%",
    width: "15%",
    overflowY: "hidden",
    display: "inline-block",
    boxShadow: "0 0 5px black, 2px 2px 5px black",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
  },
  SidebarUi: {
    color: "white",
    verticalAlign: "center",
    marginBottom: "",
    display: "inline-block",
  },
  bigAvatar: {
    margin: 10,
    width: 90,
    height: 90,
  },
  button: {
    marginTop: "10px",
    width: "100%",
  },
});
const Sidebar = (props) => {
  return (
    <div className={props.classes.Sidebar}>
      <span className={props.classes.SidebarUi}>
        <Grid container justify="center" alignItems="center">
          <Grid item align="center" xs="12">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className={props.classes.bigAvatar}
            />
          </Grid>
          <Grid item xs="12">
            <label>Hi, there.</label>
          </Grid>
          <Grid item xs="12">
            <Button
              variant="outlined"
              color="secondary"
              className={props.classes.button}
            >
              About Me
            </Button>
          </Grid>
          <Grid item xs="12">
            <Button
              variant="outlined"
              color="secondary"
              className={props.classes.button}
            >
              Projects
            </Button>
          </Grid>
          <Grid item xs="12">
            <Button
              variant="outlined"
              color="secondary"
              className={props.classes.button}
            >
              Contact Me
            </Button>
          </Grid>
        </Grid>
      </span>
    </div>
  );
};

export default withStyles(styles)(Sidebar);
