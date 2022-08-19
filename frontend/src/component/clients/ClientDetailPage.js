import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  TextField,
  CardActions,
  Button,
  Link as MuiLink,
} from "@mui/material";
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { useClientContext } from "./ClientContext";

const ClientDetailPage = () => {
  const { clients, modifierClient } = useClientContext();

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

  const navigate = useNavigate();

  const retour = () => {
    navigate("/clients");
  };

  // const updateClientLink = "/clients/update/" + client.idClient;

  const [readOrWrite, setReadAndWrite] = useState(true);

  const activeModification = () => {
    if (readOrWrite) {
      setReadAndWrite(false);
    } else setReadAndWrite(true);
  };

  return (
    <div>
      <Navbar />
      <Card>
        <CardHeader title="Detail du client" />
        <CardContent>
          <Stack spacing={3}>
            <TextField
              id="outlined-basic"
              label="Nom"
              variant="outlined"
              value={nom}
              name={"nom"}
              onChange={(e) => {
                setNom(e.target.value);
              }}
              inputProps={{ readOnly: readOrWrite }}
            />
            <TextField
              id="outlined-basic"
              label="Prenom"
              variant="outlined"
              value={prenom}
              name={"prenom"}
              onChange={(e) => {
                setPrenom(e.target.value);
              }}
              inputProps={{ readOnly: readOrWrite }}
            />
            <TextField
              id="outlined-basic"
              label="Adresse"
              variant="outlined"
              name={"Adresse"}
              value={adresse}
              onChange={(e) => {
                setAdresse(e.target.value);
              }}
              inputProps={{ readOnly: readOrWrite }}
            />
          </Stack>
        </CardContent>

        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant={"contained"} onClick={retour}>
            retour
          </Button>

          <Button variant={"contained"} onClick={activeModification}>
            modifier
          </Button>

          <Button variant={"contained"}>supprimer</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ClientDetailPage;
