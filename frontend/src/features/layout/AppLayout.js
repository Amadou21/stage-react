import { AppBar, Toolbar, Box, Link as MuiLink, Button, Container, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
//import AddCircleIcon from '@mui/icons-material/AddCircle';
import PeopleIcon from '@mui/icons-material/People';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder'; import Collapse from '@mui/material/Collapse';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const drawerWidth = 240;

const AppLayout = ({ children }) => {//On va faire en sorte que tout le autre page soit contenu dans AppLayout d'ou le children en props

    const [open, setOpen] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, marginBottom: 50 }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <MuiLink component={Link} to={'/'}>
                        <Button><HomeIcon sx={{ fontSize: 40, color: 'white', paddingLeft: 0.5 }} /></Button>
                        <Button sx={{ color: 'white', fontSize: 20, paddingRight: 0.5 }}>Client APP</Button>
                    </MuiLink>
                    <Box>
                        {/*<MuiLink component={Link} to={'/new'}>
                            <Button sx={{ color: 'white' }}><AddCircleIcon sx={{ mr: 0.5 }} />Nouveau</Button>
                        </MuiLink>*/}
                        <MuiLink component={Link} to={'/clients'}>
                            <Button sx={{ color: 'white', ml: 1 }}><FormatListBulletedIcon sx={{ mr: 0.5 }} />Clients</Button>
                        </MuiLink>
                        <MuiLink component={Link} to={'/accounts'}>
                            <Button sx={{ color: 'white' }}><PeopleIcon sx={{ mr: 0.5 }} />Comptes</Button>
                        </MuiLink>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Clients" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <MuiLink component={Link} to={'/clients/new'} sx={{ textDecoration: 'none' }}>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <AddCircleIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Nouveau Client" />
                                    </ListItemButton>
                                </MuiLink>
                                <MuiLink component={Link} to={'/clients'} sx={{ textDecoration: 'none' }}>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <FormatListBulletedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Liste des clients" />
                                    </ListItemButton>
                                </MuiLink>
                            </List>
                        </Collapse>
                        <ListItemButton onClick={handleClick2}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Comptes" />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <MuiLink component={Link} to={'/accounts/new'} sx={{ textDecoration: 'none', textColor: 'none' }}>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <AddCircleIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Nouveau compte" />
                                    </ListItemButton>
                                </MuiLink>
                                <MuiLink component={Link} to={'/accounts'} sx={{ textDecoration: 'none' }}>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <FormatListBulletedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Liste des comptes" />
                                    </ListItemButton>
                                </MuiLink>
                            </List>
                        </Collapse>
                    </List>
                    <Divider />
                </Box>
            </Drawer>

            <Container sx={{ marginTop: 12 }}>
                {children}
            </Container>
        </Box>

    );
};

export default AppLayout;