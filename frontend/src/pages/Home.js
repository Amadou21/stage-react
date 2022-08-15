import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AppLayout from '../features/layout/AppLayout';

const Home = () => {
    return (
        <AppLayout>
            <Box sx={{width: '100%', height: '100%', textAlign: 'center'}}>
                <Typography variant='h2' sx={{align: 'center'}}>Accueil</Typography>
            </Box>
        </AppLayout>
    );
};
export default Home;