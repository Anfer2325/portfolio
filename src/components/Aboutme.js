import React from "react";
import { createStyles, withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
const styles = createStyles({
  aboutContainer: {
    position: "relative",
    bottom: "40px",
    margin: "0 auto",
    background: "white",
    width: "75%",
    alignSelf: "flex-start",
    border: "3px solid black",
    borderRadius: "10px",
    zIndex: "100",
  },
  imageContainer: {
    height: "155px",
  },
  image: {
    margin: "auto",
    position: "relative",
    width: "225px",
    height: "225px",
    borderRadius: "50%",
    backgroundColor: "green",
    bottom: "50%",
  },
  textAboutMe: {
    overflowX: "auto",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    padding: "15px",
  },
});
const Aboutme = (props) => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src="https://i.ibb.co/ZG3BjST/pp.jpg" className="image" alt="" />
      </div>

      <div className="text">
        <p>
          Hi, my name is Anfernee Castillo, I'm 19 years old, living in
          Honduras, and I'm a junior web developer. I have a passion for
          videogames and that's how I introduced myself to programming when I
          started questioning how videogames work. I've now been programming
          since I was 15 years old where I started with some videogames coded in
          Java. Now I'm in the second year of my computer science degree where I
          have learned and improved my skills a lot.
        </p>
      </div>
    </div>
  );
};

export default withStyles(styles)(Aboutme);
