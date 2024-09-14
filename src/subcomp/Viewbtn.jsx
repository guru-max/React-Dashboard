import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

export default function Viewbtn({
  name,
  icon,
  variant = "outlined",
  startIcon,
}) {
  return (
    <Stack>
      <Button
        variant={variant}
        startIcon={startIcon}
        sx={{ fontFamily: "poppins-medium" }}
      >
        {icon}
        {name}
      </Button>
    </Stack>
  );
}
