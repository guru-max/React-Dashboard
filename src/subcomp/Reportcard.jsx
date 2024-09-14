import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme, bgColor }) => ({
  backgroundColor: bgColor,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  fontFamily: "poppins-medium",
}));

const Reportcard = ({
  title,
  subtitle,
  tcolor,
  scolor,
  bcolor,
  bgColor = indigo[700],
  src,
  card,
}) => {
  return (
    <Card>
      <StyledCard bgColor={bgColor}>
        <CardContent sx={{ display: "flex", gap: "20px" }}>
          <Box
            bgcolor={bcolor}
            sx={{
              padding: "inherit",
              borderRadius: "5px",
            }}
          >
            <img src={src} />
          </Box>
          <div>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              color={tcolor}
              sx={{ fontFamily: "poppins-medium" }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              color={scolor}
              sx={{ fontFamily: "poppins-medium" }}
            >
              {subtitle}
            </Typography>
          </div>
        </CardContent>
        <CardActions>{card}</CardActions>
      </StyledCard>
    </Card>
  );
};

export default Reportcard;
