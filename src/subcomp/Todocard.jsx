import * as React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box } from "@mui/material";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  fontFamily: "poppins-medium",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.grey,
  display: "flex",
  justifyContent: "space-between",
  flexGrow: "1",
  fontFamily: "poppins-medium",
}));

export default function Reportcard({
  date,
  month,
  dcolor,
  title,
  subTitle,
  bcolor,
}) {
  return (
    <Stack flexDirection={"row"} alignItems={"center"}>
      <Item>
        <div>
          <Typography
            variant="h5"
            sx={{ color: dcolor, fontFamily: "poppins-medium" }}
          >
            {date}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: dcolor, fontFamily: "poppins-medium" }}
          >
            {month}
          </Typography>
        </div>
      </Item>
      <Item sx={{ flexGrow: 1 }}>
        <Card>
          <StyledCard sx={{ background: bcolor, fontFamily: "poppins-medium" }}>
            <CardContent sx={{ fontFamily: "poppins-medium" }}>
              <Typography variant="h6" sx={{ fontFamily: "poppins-medium" }}>
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "poppins-regular" }}
              >
                {subTitle}
              </Typography>
            </CardContent>
            <CardContent>
              <MoreHorizIcon fontSize="large" color="action" />
            </CardContent>
          </StyledCard>
        </Card>
      </Item>
    </Stack>
  );
}
