import React from "react";
import Screen from "../subcomp/Screen";
import Subheader from "../subcomp/Subheader";
import Exportbutton from "../subcomp/Exportbutton";
import im from "../assets/picture.png";
import vi from "../assets/video_camera.png";
import { Stack } from "@mui/material";
import Viewbtn from "../subcomp/Viewbtn";
import { Padding } from "@mui/icons-material";

const Screenshot = () => {
  return (
    <div>
      <Stack spacing={3}>
        <Subheader title={"Screenshot"} />
        <Screen
          img={im}
          title={"shot_1_attach_1.png"}
          buttn={<Exportbutton name={"View"} variant="contsined" />}
        />
        <Screen
          img={im}
          title={"shot_1_attach_3.png"}
          buttn={<Exportbutton name={"View"} variant="contsined" />}
        />
        <Screen
          img={vi}
          title={"Screen record_12.mov"}
          buttn={<Viewbtn name={"play"} variant="contained" />}
        />
        <Viewbtn name={"VIEW ALL"} />
      </Stack>
    </div>
  );
};

export default Screenshot;
