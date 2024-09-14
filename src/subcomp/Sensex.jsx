import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Sensex = () => {
  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "green",
        color: "white",
        padding: "5px",
      }}
    >
      <ArrowDropUpIcon />
      17%
    </Card>
  );
};

export default Sensex;
