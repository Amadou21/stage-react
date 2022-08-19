// import * as React from 'react';
// import { Search } from '@mui/icons-material';
// import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@mui/material/styles";
// import SearchIcon from '@mui/icons-material/Search';
// import { AppBar, IconButton, Toolbar, Box, Typography, Link as MuiLink, Button } from '@mui/material';
import { Link as MuiLink, Button, Container, Menu, Stack } from "@mui/material";
// import React from 'react';
import { Link, useNavigate } from "react-router-dom";
// import InputBase from '@mui/material/InputBase';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar from "@mui/material/AppBar";
import { Drawer, DrawerHeader } from "./SlideBar";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Collapse, MenuItem } from "@mui/material";
import { FormatAlignRight, StarBorder } from "@mui/icons-material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const drawerWidth = 240;

{
  /* import ReactDOM from 'react-dom/client';

// const barnav = ReactDOM.createRoot(document.getElementById('barnav'));
// barnav.render(
//     <React.StrictMode>
//         <Navbar />

//     </React.StrictMode>
// );
*/
}
//------------------------------------------------------------------------------------------------

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
//------------------------------------------------------------------------------

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openClients, setOpenClients] = React.useState(false);
  const [openAccounts, setOpenAccounts] = React.useState(false);
  const [openClientsCollapse, setOpenClientsCollapse] = React.useState(false);
  const [openAccountsCollapse, setOpenAccountsCollapse] = React.useState(false);

  const [pousserAdroite, setPousserAdroite] = React.useState(10);

  const [pousserEnBas, setPousserEnBas] = React.useState(10);

  // React.useEffect(() => {
  //   {
  //     open ? setPousser_contenu(50) : setPousser_contenu(5);
  //   }
  //   alert(pousser_contenu);
  // }, [pousser_contenu]);

  const handleDrawerOpen = () => {
    setOpen(true);
    setPousserAdroite(30);
    setPousserEnBas(20);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setPousserAdroite(10);
    setPousserEnBas(10);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setOpenClients(false);
    setAnchorEl(null);
  };

  const collapseClients = () => {
    //event
    setOpenAccountsCollapse(openClientsCollapse ? false : true);
    setOpenClients(openClients ? false : true);
    // setAnchorEl(event.currentTarget);
  };

  const collapseAccounts = () => {
    openAccountsCollapse
      ? setOpenAccountsCollapse(false)
      : setOpenAccountsCollapse(true);
    setOpenAccounts(openAccounts ? false : true);
  };

  const navigate = useNavigate();

  const pageAccueil = () => {
    navigate("/");
  };
  // const [pageAccueil, setPageAccueil]= useState();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/*------------------------------------------------------*/}
          <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            {/*------------------------------------------------------*/}
            <Button sx={{ color: "white" }} onClick={pageAccueil}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                title="Accueil"
              >
                <HomeIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                App Client
              </Typography>
            </Button>
          </Box>

          {/* <Box>
            <MuiLink component={Link} to="/clients">
              <Button sx={{ color: "white", "&:hover": { color: "black" } }}>
                Liste des clients
              </Button>
            </MuiLink>
            <MuiLink component={Link} to="/create_client">
              <Button sx={{ color: "white", "&:hover": { color: "black" } }}>
                Ajout de clients
              </Button>
            </MuiLink>
            <MuiLink component={Link} to="/users">
              <Button sx={{ color: "white", "&:hover": { color: "black" } }}>
                Utilisateurs
              </Button>
            </MuiLink>
            <MuiLink component={Link} to="/test_context">
              <Button sx={{ color: "white", "&:hover": { color: "black" } }}>
                Test Context
              </Button>
            </MuiLink>
          </Box> */}

          <Box sx={{ justifyContent: "right" }}>
            <Search sx={{ justifyContent: "end", display: "inline-block" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                // inputProps={{}}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader onClick={handleDrawerClose}>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={(event) => {
                collapseClients();
                // anchorEl == null
                //   ? setAnchorEl(event.currentTarget)
                //   : setAnchorEl(null);
                setAnchorEl(anchorEl == null ? event.currentTarget : null);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Clients"}
                sx={{ opacity: open ? 1 : 0 }}
              />
              {open && (openClients ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItemButton>
          </ListItem>

          <Menu
            onClose={handleClose}
            open={openClients}
            anchorEl={anchorEl}
            color={"red"}
            sx={{ color: "black" }}
          >
            <MenuItem
              disableRipple
              onClick={() => {
                handleClose();
                navigate("/clients");
              }}
            >
              {/* <EditIcon /> */}
              <IconButton>
                <FormatListBulletedIcon />
              </IconButton>
              Liste des clients
            </MenuItem>

            {/* <Divider sx={{ my: 0.5 }} /> */}
            <MenuItem
              disableRipple
              onClick={() => {
                handleClose();
                navigate("/create_client");
              }}
            >
              {/* <FileCopyIcon /> */}
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
              Ajouter un client
            </MenuItem>
          </Menu>
          {/* -------------------------------------------------------------------------------- */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={collapseAccounts}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Comptes"}
                sx={{ opacity: open ? 1 : 0 }}
              />
              {open && (openAccounts ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItemButton>
          </ListItem>

          <Collapse in={openAccounts} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>

      <Container
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 10,
        }}
      >
        <Typography paragraph>{children}</Typography>
      </Container>
    </Box>
  );
};

export default Navbar;
