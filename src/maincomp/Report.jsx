import React from "react";
import Reportcard from "../subcomp/Reportcard";
import Subheader from "../subcomp/Subheader";
import Exportbutton from "../subcomp/Exportbutton";
import sdf from "../assets/graph.png";
import logo from "../assets/timer_blue.png";
import Stack from "@mui/material/Stack";
import { grey, indigo, red } from "@mui/material/colors";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Viewbtn from "../subcomp/Viewbtn";
import Sensex from "../subcomp/Sensex";
import Sen from "../subcomp/Sen";
const Report = () => {
  return (
    <div>
      <Stack spacing={3}>
        <Subheader title={"Report"} />
        <Reportcard
          title="WEEKLY ACTIVITY"
          tcolor={"white"}
          subtitle="57%"
          scolor={"white"}
          src={sdf}
          bcolor={indigo[400]}
          card={<Sensex />}
        />
        <Reportcard
          title="WORKED THIS WEEK"
          tcolor={"grey"}
          subtitle="11:56:33"
          scolor={"black"}
          bcolor={"white"}
          color={"black"}
          bgColor={grey.A200}
          src={logo}
          card={<Sen />}
        />
        <Viewbtn
          name={"Export as PDF"}
          variant="outlined"
          startIcon={<PictureAsPdfIcon />}
        />
      </Stack>
    </div>
  );
};

export default Report;
