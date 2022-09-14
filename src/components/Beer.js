import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Beer(props) {
  return (
    <Card sx={{ width: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="250"
        image={props.img}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.type}
        </Typography>
        <Typography variant="body3" color="text.secondary">
          {props.abv}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>
  );
}

export default Beer;
