import { AppBar, Toolbar, Box, Link as MuiLink, Button, Container, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
//import AddCircleIcon from '@mui/icons-material/AddCircle';
import PeopleIcon from '@mui/icons-material/People';

const AppLayout = ({ children }) => {//On va faire en sorte que tout le autre page soit contenu dans AppLayout d'ou le children en props
    return (
        <Stack>
            <AppBar sx={{ marginBottom: 50 }}>
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
            <Container sx={{ marginTop: 12 }}>
                {children}
            </Container>
        </Stack>

    );
};

export default AppLayout;