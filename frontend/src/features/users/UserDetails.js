import React, {useEffect, useState} from 'react';
import AppLayout from '../layout/AppLayout';
import { Card, CardHeader, Avatar, CardContent, Chip, Link as MuiLink, Box } from '@mui/material';
import { Phone } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom";

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id]);

    return (
        <AppLayout>
            {user &&
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
            }
        </AppLayout>
    );
};

export default UserDetails;