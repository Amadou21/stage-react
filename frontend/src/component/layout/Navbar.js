// import * as React from 'react';
// import { Search } from '@mui/icons-material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { styled, alpha } from '@mui/material/styles';
// import SearchIcon from '@mui/icons-material/Search';
// import { AppBar, IconButton, Toolbar, Box, Typography, Link as MuiLink, Button } from '@mui/material';
import { Link as MuiLink, Button } from "@mui/material";
// import React from 'react';
import { Link, useNavigate } from "react-router-dom";
// import InputBase from '@mui/material/InputBase';

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
// import ReactDOM from 'react-dom/client';

// const barnav = ReactDOM.createRoot(document.getElementById('barnav'));
// barnav.render(
//     <React.StrictMode>
//         <Navbar />

//     </React.StrictMode>
// );

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

const Navbar = () => {
  const navigate = useNavigate();

  const pageAccueil = () => {
    navigate("/");
  };
  // const [pageAccueil, setPageAccueil]= useState();
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Button sx={{ color: "white" }} onClick={pageAccueil}>
            <IconButton size="large" edge="start" color="inherit">
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

          <Box>
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
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              // inputProps={{}}
            />
          </Search>

          <MenuIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
