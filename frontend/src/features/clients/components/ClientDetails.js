import React, { useState } from 'react';
import { CardHeader, Card, CardContent, Stack, TextField, Button, CardActions, Link as MuiLink, DialogTitle, Dialog, DialogContent, DialogActions, CircularProgress, Box, Typography } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AppLayout from '../../layout/AppLayout';
import { useClientById, useDelete } from '../client.store';

const ClientDetails = () => {

    const { id } = useParams();
    const {client, isLoading} = useClientById(id);
    const { remove } = useDelete();
    const navigate = useNavigate();

    const [idToDelete, setIdToDelete] = useState();
    const [open, setOpen] = useState(false); //State lié a la boite de dialogue

    //----------------------------------------------------------Functions

    const handleClose = () => setOpen(false); //Pour fermer la boite de dialogue
    const handleDelete = () => {
        remove(idToDelete);
        navigate('/clients')
    }

    return (
        <AppLayout>
            {!client && !isLoading && (
                <Box display={"flex"} flex={1}>
                    <Typography> {"Le client avec l'id " + id + " n'existe pas"}</Typography>
                </Box>
            )}
            {isLoading && (
                <Box display={"flex"} flex={1}>
                    <CircularProgress />
                </Box>
            )}
            {!isLoading && client && (
                <Card>
                    <CardHeader title={'Details du client'} />
                    <CardContent>
                        <Stack spacing={3}>
                            <TextField value={client?.idClient} label={'Id'} InputProps={{ readOnly: true }} />
                            <TextField value={client?.lastName} label={'Nom'} InputProps={{ readOnly: true }} />
                            <TextField value={client?.firstName} label={'Prenom'} InputProps={{ readOnly: true }} />
                            <TextField value={client?.address} label={'Adresse'} InputProps={{ readOnly: true }} />
                        </Stack>
                    </CardContent>
                    <CardActions sx={{ ml: 1, mr: 1, mb: 2, justifyContent: 'space-between' }}>
                        <MuiLink component={Link} to={'/clients'}>
                            <Button variant='contained'>Retour</Button>
                        </MuiLink>
                        <Box>
                            <MuiLink component={Link} to={'/clients/update/' + client.idClient}>
                                <Button variant='contained'>Modifier</Button>
                            </MuiLink>
                            <Button variant='contained' onClick={() => { setIdToDelete(client.idClient); setOpen(true) }} sx={{ color: 'white', background: 'red', '&:hover': { background: "red" }, ml: 1 }}>
                                Suprimer
                            </Button>
                        </Box>
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