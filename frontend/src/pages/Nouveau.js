/*import React from 'react';
import CreatePage from '../features/clients/components/CreatePage';
import AccountCreatePage from '../features/accounts/components/AccountCreatePage';
import AppLayout from '../features/layout/AppLayout';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Nouveau = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <AppLayout>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                sx={{width: '100%', height: '100%', textAlign: 'center'}}
            >
                <ToggleButton value="web">Nouveau client
                </ToggleButton>
                <ToggleButton value="android">Nouveau compte</ToggleButton>
            </ToggleButtonGroup>
            <CreatePage />
            <AccountCreatePage />}
        </AppLayout>
    );
};

export default Nouveau;*/