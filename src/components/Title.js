import React from "react";
import "./Title.css";
import Typography from "@mui/material/Typography";

function Title() {
  return (
    <div className="wrapper">
      <Typography gutterBottom variant="h3" component="div">
        Your Best Value Proposition
      </Typography>
      <Typography gutterBottom variant="h4" component="div">
        "If you don’t try this app, you won’t become the superhero you were
        meant to be"
      </Typography>
    </div>
  );
}

export default Title;
