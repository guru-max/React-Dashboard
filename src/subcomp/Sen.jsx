import React from "react";
import Card from "@mui/material/Card";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { red } from "@mui/material/colors";

const Sen = () => {
  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: red[200],
        color: red[700],
        padding: "5px",
      }}
    >
      <ArrowDropDownIcon />
      17%
    </Card>
  );
};

export default Sen;
