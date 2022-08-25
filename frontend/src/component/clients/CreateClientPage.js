import {
  Card,
  CardHeader,
  CardContent,
  Stack,
  TextField,
  Button,
  CardActions,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import { useNavigate } from "react-router-dom";
import { useClientContext } from "./ClientContext";
import { Form, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

const CreateClientPage = () => {
  const { ajouterClient } = useClientContext();
  const navigate = useNavigate();

  // comportements
  const retour = () => {
    navigate("/clients");
  };

  // state
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");

  const handleCreate = () => {
    const client = {
      nom,
      prenom,
      adresse,
    };
    ajouterClient(client);
    navigate("/clients");
    alert("client ajouter ");
  };
  //----------------------------------------------------------------

  const minAge = 18;
  const maxAge = 105;
  const ClientSchema = Yup.object().shape({
    prenom: Yup.string().required("Le prenom est obligatoire").default(""),
    nom: Yup.string().required("Le nom est obligatoire").default(""),
    address: Yup.string().default(""),
    email: Yup.string()
      .email("Email incorrect")
      .required("L'adresse email est obligatoire")
      .default(""),
    age: Yup.number()
      .default(35)
      .min(minAge, `L'age doit etre superieur a ${minAge} ans`)
      .max(maxAge, `L'age doit etre inferieur a ${maxAge} ans`)
      .required("L'age est obligatoire"),
  });

  const formik = useFormik({
    validationSchema: ClientSchema,
    initialValues: ClientSchema.getDefaultFromShape(),
    onSubmit: (client, { resetForm, setSubmitting }) => {
      console.log(client);

      ajouterClient(client);

      navigate("/clients");
    },
  });

  //----------------------------------------------------------------
  return (
    <Navbar>
      <FormikProvider value={formik}>
        <Form>
          <Card>
            <CardHeader
              title={
                <h2 style={{ textAlign: "center" }}>Creer un nouveau client</h2>
              }
            />
            <CardContent>
              <Stack spacing={3}>
                <TextField
                  id="outlined-basic"
                  label="Nom"
                  variant="outlined"
                  name={"nom"}
                  onChange={(e) => setNom(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Prenom"
                  variant="outlined"
                  name={"prenom"}
                  onChange={(e) => setPrenom(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Adresse"
                  variant="outlined"
                  name={"Adresse"}
                  onChange={(e) => setAdresse(e.target.value)}
                />
              </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button variant={"contained"} onClick={retour}>
                Retour
              </Button>
              <Button
                variant={"contained"}
                type={"submit"}
                onClick={handleCreate}
              >
                Ajouter
              </Button>
            </CardActions>
          </Card>
        </Form>
      </FormikProvider>
    </Navbar>
  );
};

export default CreateClientPage;
