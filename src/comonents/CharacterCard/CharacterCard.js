import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CharacterCard = ({ name, image, specie, gender, status, origin }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="290"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Origin: {origin}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Specie: {specie}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {gender}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
