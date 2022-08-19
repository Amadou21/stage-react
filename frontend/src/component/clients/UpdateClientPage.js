import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useClientContext } from "./ClientContext";

const UpdateClientPage = () => {
  const navigate = useNavigate();
  const { clients, modifierClient } = useClientContext();

  const retour = () => {
    navigate("/clients");
  };
  const { id } = useParams();

  const client = clients.find((client) => client.idClient === +id);

  const [nom, setNom] = useState(client?.nom);
  const [prenom, setPrenom] = useState(client?.prenom);
  const [adresse, setAdresse] = useState(client?.adresse);

  const handleUpdate = () => {
    const _client = {
      ...client,
      nom,
      prenom,
      adresse,
    };
    console.log(_client);
    modifierClient(_client);
    console.log(_client);
    navigate("/clients");
  };

  return (
    <div>
      <Navbar />

      <Card>
        <CardHeader title={<h1>tu vas mettre à jour le client ici</h1>} />
        <CardContent>
          <Stack spacing={3}>
            <TextField
              id="outlined-basic"
              label="Nom"
              variant="outlined"
              value={nom}
              name={"nom"}
              onChange={(e) => setNom(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Prenom"
              variant="outlined"
              value={prenom}
              name={"prenom"}
              onChange={(e) => setPrenom(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Adresse"
              variant="outlined"
              name={"Adresse"}
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </Stack>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant={"contained"} onClick={retour}>
            Annuler
          </Button>
          <Button variant={"contained"} onClick={handleUpdate}>
            Modifier
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default UpdateClientPage;
