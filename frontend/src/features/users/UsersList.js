import React, { useEffect, useState } from 'react';
import AppLayout from '../layout/AppLayout';
import { Grid, Card, CardHeader, Avatar, CardContent, Chip, Link as MuiLink, Box } from '@mui/material';
import { Phone } from "@mui/icons-material";
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <AppLayout>
            <Grid container spacing={3}>
                {users?.map(user => (
                    <Grid key={user.id} item xs={12} md={6} lg={4}>

                        <Card>
                            <CardHeader
                                title={user.name}
                                subheader={user.email}
                                avatar={<Avatar>{user.id}</Avatar>}
                            />
                            <CardContent>
                                <Box sx={{ justifyContent: 'space-between' }}>
                                    <Chip label={user.phone} icon={<Phone sx={{ fontSize: 15 }} />} />
                                    <MuiLink component={Link} to={'/users/' + user.id}><Chip label='voir plus' /></MuiLink>
                                </Box>
                            </CardContent>
                        </Card>

                    </Grid>
                ))}
            </Grid>
        </AppLayout >
    );
};

export default Users;