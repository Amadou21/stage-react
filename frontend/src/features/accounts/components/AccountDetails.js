import React, { useState, useEffect } from 'react';
import { CardHeader, Card, CardContent, Stack, TextField, Button, CardActions, Link as MuiLink, DialogTitle, Dialog, DialogContent, DialogActions, CircularProgress, Box, Typography } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AppLayout from '../../layout/AppLayout';
import { useAccountContext } from './AccountContext';
import { findById } from "../account.service";

const AccountDetails = () => {

    const { deleteAccount } = useAccountContext();
    const [account, setAccount] = useState();
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    //----------------------------------------------------------State
    const [idToDelete, setIdToDelete] = useState();
    const [open, setOpen] = useState(false); //State lié a la boite de dialogue

    //----------------------------------------------------------Functions
    const { id } = useParams();

    const handleClose = () => setOpen(false); //Pour fermer la boite de dialogue

    const handleDelete = () => {
        deleteAccount(idToDelete);
        navigate('/accounts')
    }

    useEffect(() => {
        findById(id).then(account => {
            setAccount(account);
            setLoading(false);
        })
    }, [id]);

    return (
        <AppLayout>
            {!account && !loading && (
                <Box display={"flex"} flex={1}>
                    <Typography> {"Le Account avec l'id " + id + " n'existe pas"}</Typography>
                </Box>
            )}
            {loading && (
                <Box display={"flex"} flex={1}>
                    <CircularProgress />
                </Box>
            )}
            {!loading && account && (
                <Card>
                    <CardHeader title={'Details du Account'} />
                    <CardContent>
                        <Stack spacing={3}>
                            <TextField value={account?.idAccount} label={'Id'} InputProps={{ readOnly: true }} />
                            <TextField value={account?.lastName} label={'Nom'} InputProps={{ readOnly: true }} />
                            <TextField value={account?.firstName} label={'Prenom'} InputProps={{ readOnly: true }} />
                            <TextField value={account?.address} label={'Adresse'} InputProps={{ readOnly: true }} />
                        </Stack>
                    </CardContent>
                    <CardActions sx={{ ml: 1, mr: 1, mb: 2, justifyContent: 'space-between' }}>
                        <MuiLink component={Link} to={'/accounts'}>
                            <Button variant='contained'>Retour</Button>
                        </MuiLink>
                        <Box>
                            <MuiLink component={Link} to={'/Accounts/update/' + account.idAccount}>
                                <Button variant='contained'>Modifier</Button>
                            </MuiLink>
                            <Button variant='contained' onClick={() => { setIdToDelete(account.idAccount); setOpen(true) }} sx={{ color: 'white', background: 'red', '&:hover': { background: "red" }, ml: 1 }}>
                                Suprimer
                            </Button>
                        </Box>
                    </CardActions>
                </Card>
            )}
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

export default AccountDetails;