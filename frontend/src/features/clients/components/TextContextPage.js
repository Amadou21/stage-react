import { Card, CardContent, Box, Chip, Stack, TextField } from '@mui/material';
import React from 'react';
import AppLayout from '../../layout/AppLayout';
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Search } from "@mui/icons-material";

const TextContextPage = () => {
    const theme = useTheme();
    return (
        <AppLayout sx={{ bgcolor: '#D0D3D4', }}>
            <Card sx={{ mb: 3 }} elevation={4}>
                <Box sx={{ margin: 2, justifyContent: 'space-between', display: 'flex' }}>
                    <Typography variant="h5">Liste des etablissements</Typography>
                    <Box>
                        <Box>
                            <Typography>Trier par</Typography>
                        </Box>
                        <TextField
                            label="Rechercher"
                            InputProps={{
                                startAdornment: <Search />,
                            }}
                        />
                    </Box>
                </Box>
            </Card>
            <Card sx={{ display: 'flex', mb: 3 }} elevation={4}>
                <CardMedia
                    component="img"
                    sx={{ width: 151, margin: 1 }}
                    image="OIP.jpeg"
                    alt="Maarif"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Ecole Maarif de Turquie
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Petite description ...Voir Plus
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'end', pl: 1, pb: 1, float: 'right' }}>
                        <Typography variant="h6" color="text.secondary" component="div" sx={{ ml: 1, mr: 1 }}>
                            Niveau:
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Chip label="Pre-Scolaire" color="primary" />
                            <Chip label="Primaire" color="primary" />
                            <Chip label="Second-Cycle" color="primary" />
                            <Chip label="Lycée" color="primary" />
                        </Stack>
                    </Box>
                </Box>
            </Card>
            <Card sx={{ display: 'flex', mb: 3 }} elevation={4}>
                <CardMedia
                    component="img"
                    sx={{ width: 151, margin: 1 }}
                    image="OIP.jpeg"
                    alt="Maarif"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Ecole Maarif de Turquie
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Petite description ...Voir Plus
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'end', pl: 1, pb: 1, float: 'right' }}>
                        <Typography variant="h6" color="text.secondary" component="div" sx={{ ml: 1, mr: 1 }}>
                            Niveau:
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Chip label="Second-Cycle" color="primary" />
                            <Chip label="Lycée" color="primary" />
                        </Stack>
                    </Box>
                </Box>
            </Card>
            <Card sx={{ display: 'flex', mb: 3 }} elevation={4}>
                <CardMedia
                    component="img"
                    sx={{ width: 151, margin: 1 }}
                    image="OIP.jpeg"
                    alt="Maarif"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Ecole Maarif de Turquie
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Petite description ...Voir Plus
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'end', pl: 1, pb: 1, float: 'right' }}>
                        <Typography variant="h6" color="text.secondary" component="div" sx={{ ml: 1, mr: 1 }}>
                            Niveau:
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Chip label="Pre-Scolaire" color="primary" />
                            <Chip label="Primaire" color="primary" />
                        </Stack>
                    </Box>
                </Box>
            </Card>
        </AppLayout>
    );
};

export default TextContextPage;