import React, { useState, useEffect } from 'react';
import { CardHeader, Card, CardContent, Stack, TextField, Button, CardActions, Link as MuiLink, DialogTitle, Dialog, DialogContent, DialogActions, CircularProgress, Box, Typography } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AppLayout from '../../layout/AppLayout';
import { useClientContext } from './ClientContext';
import {findById} from "../client.service";

const ClientDetails = () => {

    const { deleteClient } = useClientContext();
    const [client, setClient] = useState();
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    //----------------------------------------------------------State
    const [idToDelete, setIdToDelete] = useState();
    const [open, setOpen] = useState(false); //State lié a la boite de dialogue

    //----------------------------------------------------------Functions
    const {id} = useParams();

    const handleClose = () => setOpen(false); //Pour fermer la boite de dialogue

    const handleDelete = () => {
        deleteClient(idToDelete);
        navigate('/clients')
    }

    useEffect(() => {
        findById(id).then(client => {
            setClient(client);
            setLoading(false);
        })
    }, [id]);

    return (
        <AppLayout>
            {!client && !loading && (
                <Box display={"flex"} flex={1}>
                    <Typography> {"Le client avec l'id " + id + " n'existe pas"}</Typography>
                </Box>
            )}
            {loading && (
                <Box display={"flex"} flex={1}>
                    <CircularProgress/>
                </Box>
            )}
            {!loading && client && (
            <Card>
                <CardHeader title={'Details du client'} />
                <CardContent>
                    <Stack spacing={3}>
                    <TextField value={client?.idClient} label={'Id'} InputProps={{readOnly: true}}/>
                            <TextField value={client?.lastName} label={'Nom'} InputProps={{readOnly: true}}/>
                            <TextField value={client?.firstName} label={'Prenom'} InputProps={{readOnly: true}}/>
                            <TextField value={client?.address} label={'Adresse'} InputProps={{readOnly: true}}/>
                    </Stack>
                </CardContent>
                <CardActions sx={{ ml: 1, mb: 2 }}>
                    <MuiLink component={Link} to={'/clients/update/' + client.idClient}>
                        <Button variant='contained'>Modifier</Button>
                    </MuiLink>
                    <Button variant='contained' onClick={() => { setIdToDelete(client.idClient); setOpen(true) }} sx={{ color: 'white', background: 'red', '&:hover': { background: "red" }, ml: 1 }}>
                        Suprimer
                    </Button>
                </CardActions>
            </Card>
            )}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Suppression</DialogTitle>
                <DialogContent>Voulez-vous vraiment supprimmer ce client</DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Non</Button>
                    <Button onClick={handleDelete} sx={{ color: 'red' }}>Oui</Button>
                </DialogActions>
            </Dialog>

        </AppLayout>
    );
};

export default ClientDetails;