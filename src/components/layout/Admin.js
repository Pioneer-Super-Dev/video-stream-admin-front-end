import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LanguageIcon from "@mui/icons-material/Language";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PaymentsIcon from "@mui/icons-material/Payments";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Logo from "./Logo";
import Menu from "./Menu";
import AdminSetting from "./AdminSetting";
import Language from "./Language";
import Logout from "./Logout";
import Payment from "./Payment";
import Theme from "./Theme";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Verification from "./Verification";

const drawerWidth = 240;

export default function Admin() {
  var [menuShow, setMenuShow] = React.useState([
    "flex",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ]);

  const navigate = useNavigate();

  const updateUploadedFiles = (files) => {
    console.log(files);
  };

  const handleLogoChange = () => {
    setMenuShow([
      "flex",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
    ]);
  };
  const handleMenuChange = () => {
    setMenuShow([
      "none",
      "flex",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
    ]);
  };
  const handleThemeChange = () => {
    setMenuShow([
      "none",
      "none",
      "flex",
      "none",
      "none",
      "none",
      "none",
      "none",
    ]);
  };
  const handleLanguageChange = () => {
    setMenuShow([
      "none",
      "none",
      "none",
      "flex",
      "none",
      "none",
      "none",
      "none",
    ]);
  };
  const handlePaymentChange = () => {
    setMenuShow([
      "none",
      "none",
      "none",
      "none",
      "flex",
      "none",
      "none",
      "none",
    ]);
  };
  const handleAdminSettingChange = () => {
    setMenuShow([
      "none",
      "none",
      "none",
      "none",
      "none",
      "flex",
      "none",
      "none",
    ]);
  };
  const handleLogoutChange = () => {
    navigate("/");
    setMenuShow([
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "flex",
      "none",
    ]);
  };
  const handleVerificationChange = () => {
    setMenuShow([
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "flex",
    ]);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button key={"Logo"} onClick={handleLogoChange}>
              <ListItemIcon>
                <LogoDevIcon />
              </ListItemIcon>
              <ListItemText primary={"Logo"} />
            </ListItem>
            <ListItem button key={"Menu"} onClick={handleMenuChange}>
              <ListItemIcon>
                <WidgetsIcon />
              </ListItemIcon>
              <ListItemText primary={"Menu"} />
            </ListItem>
            <ListItem button key={"Theme"} onClick={handleThemeChange}>
              <ListItemIcon>
                <ColorLensIcon />
              </ListItemIcon>
              <ListItemText primary={"Theme"} />
            </ListItem>
            <ListItem button key={"Language"} onClick={handleLanguageChange}>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={"Language"} />
            </ListItem>
            <ListItem button key={"Payment"} onClick={handlePaymentChange}>
              <ListItemIcon>
                <PaymentsIcon />
              </ListItemIcon>
              <ListItemText primary={"Payment"} />
            </ListItem>

            <ListItem
              button
              key={"Verification"}
              onClick={handleVerificationChange}
            >
              <ListItemIcon>
                <FingerprintIcon />
              </ListItemIcon>
              <ListItemText primary={"Verification"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              key={"Admin Setting"}
              onClick={handleAdminSettingChange}
            >
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Admin Setting"} />
            </ListItem>
            <ListItem button key={"Logout"} onClick={handleLogoutChange}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Grid
        component="main"
        justifyContent="center"
        sx={{
          flexGrow: 1,
          mt: 5,
          display: menuShow[0],
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />
        <Typography variant="h3">UPLOAD LOGO</Typography>
        <Logo />
      </Grid>
      <Grid
        component="main"
        justifyContent="center"
        sx={{
          flexGrow: 1,
          mt: 5,
          display: menuShow[1],
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />
        <Typography paragraph variant="h3">
          MENU SETTING
        </Typography>
        <Menu />
      </Grid>
      <Grid
        component="main"
        justifyContent="center"
        sx={{
          flexGrow: 1,
          mt: 5,
          display: menuShow[2],
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />
        <Typography paragraph variant="h3">
          THEME SETTING
        </Typography>
        <Theme />
      </Grid>
      <Grid
        component="main"
        justifyContent="center"
        sx={{
          flexGrow: 1,
          mt: 5,
          display: menuShow[3],
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />
        <Typography paragraph variant="h3">
          LANGUAGE SETTING
        </Typography>
        <Language />
      </Grid>
      <Grid
        component="main"
        justifyContent="center"
        sx={{
          flexGrow: 1,
          mt: 5,
          display: menuShow[4],
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />
        <Typography paragraph variant="h3">
          PAYMENT
        </Typography>
        <Payment />
      </Grid>

      <Grid
        component="main"
        justifyContent="center"
        sx={{
          flexGrow: 1,
          mt: 5,
          display: menuShow[7],
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />
        <Typography paragraph variant="h3">
          VERIFICATION
        </Typography>
        <Verification />
      </Grid>

      <Grid
        component="main"
        justifyContent="center"
        sx={{
          flexGrow: 1,
          mt: 5,
          display: menuShow[5],
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />
        <Typography paragraph variant="h3">
          ADMINISTRATOR
        </Typography>
        <AdminSetting />
      </Grid>
      <Grid
        component="main"
        justifyContent="center"
        sx={{
          flexGrow: 1,
          mt: 5,
          display: menuShow[6],
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />
        <Typography paragraph variant="h3">
          LOGOUT
        </Typography>
        <Logout />
      </Grid>
    </Box>
  );
}
