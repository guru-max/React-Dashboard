import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

const ButtonColor = styled(Button)(({}) => ({
  color: deepPurple[700],
  backgroundColor: deepPurple[100],
  "&:hover": {
    backgroundColor: deepPurple[200],
  },
}));
export default function Exportbutton({ name, icon, variant = "outlined" }) {
  return (
    <Stack>
      <ButtonColor variant={variant} sx={{ fontFamily: "poppins-medium" }}>
        {icon}
        {name}
      </ButtonColor>
    </Stack>
  );
}
