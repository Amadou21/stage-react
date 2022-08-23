import { CardHeader, Card, CardContent, Stack, TextField, CardActions, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../../layout/AppLayout';
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useCreate } from '../account.store';

const AccountCreatePage = () => {

    const { create } = useCreate()
    const navigate = useNavigate();

    const minAge = 18;
    const maxAge = 105;
    const AccountSchema = Yup.object().shape({
        firstName: Yup.string().required('Le prenom est obligatoire').default(''),
        lastName: Yup.string().required('Le nom est obligatoire').default(''),
        address: Yup.string().default(''),
        email: Yup.string().email('Email incorrect').required("L'addresse email est est obligatoire").default(''),
        age: Yup.number().default(35)
            .min(minAge, `L'age doit etre superieur à ${minAge} ans`)
            .max(maxAge, `L'age doit etre superieur à ${maxAge} ans`)
            .required("L'age est obligatoire"),
    })

    const formik = useFormik({
        validationSchema: AccountSchema,
        initialValues: AccountSchema.getDefaultFromShape(),
        onSubmit: (account, { resetForm, setSubmitting }) => {
            console.log(account);
            create({...account});
            console.log(account);
            navigate('/accounts');
        }
    })
    const { getFieldProps, handleSubmit, errors, touched } = formik;

    return (
        <AppLayout>
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader title={"Creation d'un compte"} />
                        <CardContent>
                            <Stack spacing={3}>
                                <TextField label={'Nom'} {...getFieldProps('lastName')} helperText={errors['lastName']} error={Boolean(errors['lastName'] && touched['lastName'])} />
                                <TextField label={'Prenom'} {...getFieldProps('firstName')} helperText={errors['firstName']} error={Boolean(errors['firstName'] && touched['firstName'])} />
                                <TextField label={'Adresse'} {...getFieldProps('address')} helperText={errors['address']} error={Boolean(errors['address'] && touched['address'])} />
                                <TextField label={'Email'} {...getFieldProps('email')} helperText={errors['email']} error={Boolean(errors['email'] && touched['email'])} />
                                <TextField label={'Age'} {...getFieldProps('age')} helperText={errors['age']} error={Boolean(errors['age'] && touched['age'])} />
                            </Stack>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'end', mr: 1 }}>
                            <Button variant={'contained'} type={'submit'}>Creer</Button>
                        </CardActions>
                    </Card>
                </Form>
            </FormikProvider>
        </AppLayout>
    );
};

export default AccountCreatePage;

/*function FormikTextField({label, name, ...others}){
    const formik = useAccountContext(FormikContext);
    const {getFieldProps, errors, touched} = formik;
    return (
        <TextField
            label = {label} {...getFieldProps(name)}
            helperText={errors[name]}
            error = {Boolean(errors[name] && touched[name])}
            {...others}
        />
    )
}*/