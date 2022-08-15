import { CardHeader, Card, CardContent, Stack, TextField, CardActions, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppLayout from '../../layout/AppLayout';
import { useAccountContext } from './AccountContext';

const UpdatePage = () => {

    const { accounts, updateAccounts } = useAccountContext();

    const { id } = useParams(); // On recup l'id se trouvant dans l'url

    console.log('id:', id);

    const navigate = useNavigate();
    const Account = accounts.find(Account => Account.idAccount === +id);// et on recupere le Account correspondant a l'id de l'url

    //----------------------------------------------------------States
    const [lastName, setLastName] = useState(Account?.lastName); //On les initailse directement aux valeurs recup dans Account
    const [firstName, setFirstName] = useState(Account?.firstName);//Pour les afficher dans TextField
    const [address, setAddress] = useState(Account?.address);
    const [email, setEmail] = useState(Account?.email);
    const [age, setAge] = useState(Account?.age);

    //-------------------------------------------------------Functions
    const handleSubmit = () => {
        const _Account = {
            ...Account, firstName, lastName, address, email, age
        }//on initialise un objet _Account avec les valeurs des states
        updateAccounts(_Account); //et on la passe a la fonctio recuperer en props
        navigate('/Accounts')
    }

    const goToHome = () => navigate('/Accounts');

    return (
        <AppLayout>
            <Card>
                <CardHeader title={'Modification du Account'} />
                <CardContent>
                    <Stack spacing={3}>
                        <TextField label={'Nom'} name={'lastName'} value={lastName} onChange={e => setLastName(e.target.value)} />
                        <TextField label={'Prenom'} name={'firstName'} value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <TextField label={'Adresse'} name={'address'} value={address} onChange={e => setAddress(e.target.value)} />
                        <TextField label={'Email'} name={'email'} value={email} onChange={e => setEmail(e.target.value)} />
                        <TextField label={'Age'} name={'age'} value={age} onChange={e => setAge(e.target.value)} />
                    </Stack>
                </CardContent>
                <CardActions sx={{ justifyContent: 'end' }}>
                    <Button variant={'contained'} onClick={goToHome}>Annuler</Button>
                    <Button variant={'contained'} onClick={handleSubmit}>Modifier</Button>
                </CardActions>
            </Card>
        </AppLayout>
    );
};

export default UpdatePage;