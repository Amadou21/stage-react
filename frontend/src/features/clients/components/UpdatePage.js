import { CardHeader, Card, CardContent, Stack, TextField, CardActions, Button } from '@mui/material';
import React, {useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppLayout from '../../layout/AppLayout';
import { useClientContext } from './ClientContext';


const UpdatePage = () => {

    const { clients, updateClients } = useClientContext();

    const { id } = useParams(); // On recup l'id se trouvant dans l'url

    console.log('id:', id);

    const navigate = useNavigate();
    const client = clients.find(client => client.idClient === +id);// et on recupere le client correspondant a l'id de l'url

    //----------------------------------------------------------States
    const [lastName, setLastName] = useState(client?.lastName); //On les initailse directement aux valeurs recup dans client
    const [firstName, setFirstName] = useState(client?.firstName);//Pour les afficher dans TextField
    const [address, setAddress] = useState(client?.address);
    const [email, setEmail] = useState(client?.email);
    const [age, setAge] = useState(client?.age);

    //-------------------------------------------------------Functions
    const handleSubmit = () => {
        const _client = {
            ...client, firstName, lastName, address, email, age
        }//on initialise un objet _client avec les valeurs des states
        updateClients(_client); //et on la passe a la fonctio recuperer en props
        navigate('/clients')
    }

    const goToHome = () => navigate('/clients');

    return (
        <AppLayout>
            <Card>
                <CardHeader title={'Modification du client'} />
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