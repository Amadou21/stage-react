import { Card, CardContent, Table, TableRow, TableCell, TableHead, TableBody, DialogTitle, Button, Dialog, DialogContent, DialogActions, TextField, Box, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { Clear } from "@mui/icons-material";
import React, { useState } from 'react';
import AppLayout from '../../layout/AppLayout';
import { useAccountContext } from './AccountContext';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LongMenu from './LongMenu';
import { useAccounts, useDelete } from '../account.store';

const AccountListPage = () => {

    const { accounts } = useAccounts();
    const { remove } = useDelete();

    const { filter, filteredAccounts, setFilter } = useAccountContext();
    const [idToDelete, setIdToDelete] = useState();
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false); // Pour fermer la boite de dialogue

    const handleDelete = async () => {
        remove(idToDelete);
        setOpen(false);
    }

    return (
        <AppLayout>
            <MuiLink component={Link} to={'/accounts/new'}>
                <Button variant='contained'  sx={{mb : 2}}><AddCircleIcon sx={{ mr: 0.5 }} />Ajouter un nouveau compte</Button>
            </MuiLink>
            <Card elevation={4} >
                <Box sx={{ margin: 2, justifyContent: 'space-between', display: 'flex' }}>
                    <Typography variant="h4">Liste des comptes</Typography>
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
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell><TableCell>Nom</TableCell><TableCell>Prenom</TableCell>
                                <TableCell>Adresse</TableCell><TableCell>email</TableCell>
                                <TableCell>Age</TableCell><TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredAccounts.map(Account => (
                                <TableRow key={Account.idAccount}>
                                    <TableCell>{Account.idAccount}</TableCell><TableCell>{Account.lastName}</TableCell>
                                    <TableCell>{Account.firstName}</TableCell><TableCell>{Account.address}</TableCell>
                                    <TableCell>{Account.email}</TableCell><TableCell>{Account.age}</TableCell>
                                    <TableCell>
                                        <LongMenu Account={Account} setOpen={setOpen} onDelete={() => { setIdToDelete(Account.idAccount); setOpen(true) }} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Typography sx={{ mt: 2, textAlign: "end" }}>
                        {filteredAccounts.length} / {accounts.length} comptes(s)
                    </Typography>
                </CardContent>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Suppression</DialogTitle>
                <DialogContent>Voulez-vous vraiment supprimmer ce Account</DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Non</Button>
                    <Button onClick={handleDelete} sx={{ color: 'red' }}>Oui</Button>
                </DialogActions>
            </Dialog>
        </AppLayout>
    );
};

export default AccountListPage;