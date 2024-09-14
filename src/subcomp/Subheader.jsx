import React from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Exportbutton from "./Exportbutton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Subheader = ({ title, buttonName }) => {
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Typography variant="h5" sx={{ flex: 1, fontFamily: "poppins-medium" }}>
        {title}
      </Typography>
      {buttonName && (
        <Stack gap={2} direction={"row"} alignItems={"center"}>
          <Exportbutton name={buttonName} variant="contained" />
          <MoreHorizIcon fontSize="large" />
        </Stack>
      )}
    </Stack>
  );
};

export default Subheader;
