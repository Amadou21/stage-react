import { useTheme } from "@mui/material/styles";
import { Container, Menu } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
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
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Collapse, MenuItem } from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import PostAddIcon from "@mui/icons-material/PostAdd";
// import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

const menuClients = [
  {
    label: "Liste des clients",
    link: "/clients",
    icon: <FormatListBulletedIcon />,
  },
  {
    label: "Ajouter un client",
    link: "/create_client",
    icon: <AddCircleOutlineIcon />,
  },
];
// const menuAccounts = [{ label: "Liste des accounts", link: "/accounts" }];

const drawerWidth = 240;
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
  // useTheme
  const theme = useTheme();
  //useState
  const [open, setOpen] = React.useState(false);
  const [openClients, setOpenClients] = React.useState(false);
  const [openAccounts, setOpenAccounts] = React.useState(false);
  const [openAccountsCollapse, setOpenAccountsCollapse] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  //comportements
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setOpenClients(false);
    setAnchorEl(null);
  };

  const collapseClients = () => {
    setOpenClients(openClients ? false : true);
    // setAnchorEl(event.currentTarget);
  };

  const collapseAccounts = () => {
    openAccountsCollapse
      ? setOpenAccountsCollapse(false)
      : setOpenAccountsCollapse(true);
    setOpenAccounts(openAccounts ? false : true);
  };

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
          <Box display="flex" alignItems={"center"}>
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
            <Box
              sx={{
                color: "white",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                transition: (theme) => theme.transitions.create("all"),
                ":hover": {
                  transform: "scale(1.05)",
                },
                ":active": {
                  transform: "scale(0.95)",
                },
              }}
              onClick={pageAccueil}
            >
              <HomeIcon />
              <Typography
                variant="h6"
                component="div"
                sx={{ ml: 1, display: { xs: "none", sm: "block" } }}
              >
                App Client
              </Typography>
            </Box>
          </Box>

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
          <ListItem disablePadding sx={{ display: "block" }} title="Clients">
            <ListItemButton
              onClick={(event) => {
                collapseClients();
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
            {menuClients.map((menu) => (
              <MenuItem
                key={menu.link}
                disableRipple
                onClick={() => {
                  handleClose();
                  navigate(menu.link);
                }}
              >
                {/* <EditIcon /> */}
                <IconButton>{menu.icon}</IconButton>
                {menu.label}
              </MenuItem>
            ))}
            {/* <Divider sx={{ my: 0.5 }} /> */}
          </Menu>
          {/* -------------------------------------------------------------------------------- */}
          <ListItem disablePadding sx={{ display: "block" }} title="Comptes">
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
                <AccountBoxIcon />
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
          {/* ---------------------------------------------------------------- */}
          <UtilisateurListItem open={open} />
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
        {children}
      </Container>
    </Box>
  );
};

export default Navbar;

function UtilisateurListItem({ open }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isSelected = pathname === "/users";
  const color = isSelected ? theme.palette.primary.light : null;

  return (
    <ListItem
      disablePadding
      sx={{
        display: "block",
      }}
      title="Utilisateurs"
    >
      <ListItemButton
        onClick={() => {
          navigate("/users");
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
          <PeopleAltIcon sx={{ color }} />
        </ListItemIcon>
        <ListItemText primary={"Utilisateurs"} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
}
