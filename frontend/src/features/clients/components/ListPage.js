import { Card, CardContent, Table, TableRow, TableCell, TableHead, TableBody, DialogTitle, Button, Dialog, DialogContent, DialogActions, TextField, Box, Typography, IconButton, Link as MuiLink, LinearProgress } from '@mui/material';
import { Clear } from "@mui/icons-material";
import React, { useState } from 'react';
import AppLayout from '../../layout/AppLayout';
import { useClientContext } from './ClientContext';
import { Link } from 'react-router-dom';
import LongMenu from './LongMenu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useClients, useDelete } from '../client.store';
import { Refresh } from "@mui/icons-material";

const ListPage = () => {

    const { clients, refetch, isLoading } = useClients();
    const { remove } = useDelete();

    const { filter, filteredClients, setFilter } = useClientContext();
    const [idToDelete, setIdToDelete] = useState();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false); // Pour fermer la boite de dialogue

    const handleDelete = async () => {
        remove(idToDelete); //On supprimer le client via la fonction passé en props du state principale clients
        setOpen(false);
    }

    return (
        <AppLayout>
            <MuiLink component={Link} to={'/clients/new'}>
                <Button variant='contained' sx={{ mb: 2 }}><AddCircleIcon sx={{ mr: 0.5 }} />Ajouter un nouveau client</Button>
            </MuiLink>
            <Card elevation={4} >
                <Box sx={{ margin: 2, justifyContent: 'space-between', display: 'flex' }}>
                    <Box display={"flex"} flex={1}>
                        <Typography variant="h4">Liste des clients</Typography>
                        <IconButton onClick={refetch}>
                            <Refresh />
                        </IconButton>
                    </Box>
                    <TextField
                        label="Rechercher"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                        InputProps={{
                            endAdornment: filter && (
                                <IconButton onClick={() => setFilter('')}>
                                    <Clear />
                                </IconButton>
                            )
                        }}
                    />
                </Box>
                <CardContent>
                    {!filteredClients && !isLoading && (
                        <Box display={"flex"} flex={1}>
                            <Typography> {"Liste Vide"}</Typography>
                        </Box>
                    )}
                    {isLoading && (
                        <Box display={"flex"} flex={1}>
                            <LinearProgress />
                        </Box>
                    )}
                    {!isLoading && filteredClients && (
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell><TableCell>Nom</TableCell><TableCell>Prenom</TableCell>
                                    <TableCell>Adresse</TableCell><TableCell>email</TableCell>
                                    <TableCell>Age</TableCell><TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredClients.map(client => (
                                    <TableRow key={client.idClient} hover>
                                        <TableCell>{client.idClient}</TableCell><TableCell>{client.lastName}</TableCell>
                                        <TableCell>{client.firstName}</TableCell><TableCell>{client.address}</TableCell>
                                        <TableCell>{client.email}</TableCell><TableCell>{client.age}</TableCell>
                                        <TableCell>
                                            <LongMenu client={client} setOpen={setOpen} onDelete={() => { setIdToDelete(client.idClient); setOpen(true) }} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                    <Typography sx={{ mt: 2, textAlign: "end" }}>
                        {filteredClients.length} / {clients.length} Clients(s)
                    </Typography>
                </CardContent>
            </Card>
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

export default ListPage;