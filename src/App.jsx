import "./App.css";
import Header from "./maincomp/Header";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Timesheet from "./maincomp/Timesheet";
import Report from "./maincomp/Report";
import Todo from "./maincomp/Todo";
import Screenshot from "./maincomp/Screenshot";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "mui-image";
import logo from "../src/assets/logo.png";
import { indigo } from "@mui/material/colors";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,

            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              background: indigo[700],
              color: "white",
              fontFamily: "poppins-medium",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <img src={logo} />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtr" ? (
                <Image src="../src/assets/left_arrow.png" />
              ) : (
                <Image src="../src/assets/left_arrow.png" />
              )}
            </IconButton>
          </DrawerHeader>

          <List>
            {["Dashboard", "Activity", "TimeSheet"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {text === "Dashboard" && (
                      <Image
                        height={20}
                        width={25}
                        src="../src/assets/speedometer.png"
                      />
                    )}
                    {text === "Activity" && (
                      <Image
                        height={23}
                        width={23}
                        src="../src/assets/graph.png"
                      />
                    )}
                    {text === "TimeSheet" && (
                      <Image
                        height={23}
                        width={23}
                        src="../src/assets/timer_white.png"
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["To-Do", "Invoices", "Projects"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {text === "To-Do" && (
                      <Image
                        height={27}
                        width={25}
                        src="../src/assets/icons8-today-96.png"
                      />
                    )}
                    {text === "Invoices" && (
                      <Image
                        height={27}
                        width={25}
                        src="../src/assets/bill.png"
                      />
                    )}
                    {text === "Projects" && (
                      <Image
                        height={20}
                        width={25}
                        src="../src/assets/folder.png"
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Help", "Download App"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <Image
                        height={23}
                        width={23}
                        src="../src/assets/help.png"
                      />
                    ) : (
                      <Image
                        height={23}
                        width={23}
                        src="../src/assets/download.png"
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Image
            height={250}
            width={45}
            src="../src/assets/sidebar_overlay.png"
          />
          <ListItemIcon
            sx={{ padding: "10px", justifyContent: "space-between" }}
          >
            {
              <Image
                height={25}
                width={25}
                src="../src/assets/notification.png"
              />
            }
            {<Image height={25} width={25} src="../src/assets/settings.png" />}
            {<Image height={25} width={25} src="../src/assets/settings.png" />}
          </ListItemIcon>
        </Drawer>

        <Main open={open}>
          <Grid sx={{ display: "flex", flexGrow: "1" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  mr: 2,
                  height: "50px",
                  width: "50px",
                  alignContent: "center",
                },
                open && { display: "none" },
              ]}
            >
              <Image src="../src/assets/logo.png" />
            </IconButton>
            <Header />
          </Grid>
          <Grid container spacing={6}>
            <Grid
              item
              xs={12}
              sm={7}
              md={8}
              sx={{
                borderRight: "1px solid",
                borderBottom: "1px solid",
                padding: "40px",
              }}
            >
              <Timesheet />
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              sx={{ borderBottom: "1px solid", padding: "20px" }}
            >
              <Report />
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              md={8}
              sx={{ borderRight: "1px solid", padding: "40px" }}
            >
              <Todo />
            </Grid>
            <Grid item xs={12} sm={5} md={4} sx={{ padding: "20px" }}>
              <Screenshot />
            </Grid>
          </Grid>
        </Main>
      </Box>
    </>
  );
}

export default App;
