import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import AttachmentIcon from "@mui/icons-material/Attachment";
import TableChartIcon from "@mui/icons-material/TableChart";
import SubjectIcon from "@mui/icons-material/Subject";
import DiscreteSliderMarks from "./LLMBar/DiscreteSliderMarks";
import { Grid } from "@mui/material";
import StickyHeadTable from "./Table/StickyHeadTable";
import BasicPie from "./Graph/BasicPie";
import BarsDataset from "./Graph/BarsDataset";
import SimpleLineChart from "./Graph/SimpleLineChart";
import LetterAvatars from "./NavBar/LetterAvatars";
import AspectRatio from "@mui/joy/AspectRatio";
const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div sx={{ backgroundColor: "#f5f5f5" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Amdocs-2017-brand-mark.svg"
        alt="nav img"
        style={{ marginRight: "8px", width: "200px", height: "60px" }}
      />
      {/* <Toolbar  sx={{ bgcolor: 'warning.main', color: 'warning.contrastText', p: 2 }}/> */}

      <Divider />
      <List>
        {[
          "Attach File",
          "Re-Trained Model",
          "Select Table",
          "Select Subject",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <AttachmentIcon />
                ) : index === 1 ? (
                  <ModelTrainingIcon />
                ) : index === 2 ? (
                  <TableChartIcon />
                ) : index === 3 ? (
                  <SubjectIcon />
                ) : (
                  <SubjectIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <h4>LLM</h4>
        {[
          <DiscreteSliderMarks />,
          <DiscreteSliderMarks />,
          <DiscreteSliderMarks />,
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        color="primary"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: "white", display: "flex" }}>
          <IconButton
            color="#00a0b2"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
              fontStyle: "italic",
              letterSpacing: "0.05em",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              color: "black", // Set default font color to black
              transition: "font-size 0.3s", // Add transition for smoother effect
              "&:hover": {
                fontSize: "150%", // Increase font size on hover
              },
            }}
          >
            <span style={{ color: "black" }}>
              Amdocs Data Intelligence -GUI{" "}
            </span>
          </Typography>

          <div style={{ marginLeft: "auto" }}>
            <LetterAvatars />
          </div>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <AspectRatio variant="outlined" sx={{ my: 4 ,borderRadius: '8px' }}>
          <div>
            <Grid container spacing={3}>
              <Grid item>
                <BasicPie />
              </Grid>

              <Grid item>
                <BarsDataset />
              </Grid>

              <Grid item>
                <BarsDataset />
              </Grid>
              <Grid item>
                <SimpleLineChart />
              </Grid>
            </Grid>
          </div>
        </AspectRatio>

        <Typography paragraph>
          <StickyHeadTable />
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
