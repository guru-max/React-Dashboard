import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { deepPurple } from "@mui/material/colors";
import pic from "../assets/picture.png";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Exportbutton from "./Exportbutton";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const Screen = ({ img, title, buttn }) => {
  return (
    <Card>
      <StyledCard
        sx={{
          padding: "5px",
          objectFit: "contain",
          alignItems: "center",
          fontFamily: "poppins-medium",
        }}
      >
        <img src={img} />
        <Typography sx={{ fontFamily: "poppins-medium" }}>{title}</Typography>
        {buttn}
      </StyledCard>
    </Card>
  );
};

export default Screen;
