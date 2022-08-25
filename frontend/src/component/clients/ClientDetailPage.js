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
import { useClientById } from "./client.store";

const ClientDetailPage = () => {
  const { clients, supprimerClient } = useClientContext();

  const { id } = useParams();
  const client = clients.find((client) => client.idClient === +id);

  const navigate = useNavigate();

  const retour = () => {
    navigate("/clients");
  };

  const updateClientLink = "/clients/update/" + client.idClient;
  const deleteClientLink = "/clients/update/" + client.idClient;

  return (
    <Navbar>
      {client && (
        <Card>
          <CardHeader title="Detail du client" />
          <CardContent>
            <Stack spacing={3}>
              <TextField
                id="outlined-basic"
                label="Nom"
                variant="outlined"
                value={client?.nom}
                name={"nom"}
                inputProps={{ readOnly: true }}
              />
              <TextField
                id="outlined-basic"
                label="Prenom"
                variant="outlined"
                value={client?.prenom}
                name={"prenom"}
                inputProps={{ readOnly: true }}
              />
              <TextField
                id="outlined-basic"
                label="Adresse"
                variant="outlined"
                name={"Adresse"}
                value={client?.adresse}
                inputProps={{ readOnly: true }}
              />
            </Stack>
          </CardContent>

          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button variant={"contained"} onClick={retour}>
              retour
            </Button>

            <Button
              variant={"contained"}
              onClick={() => navigate(updateClientLink)}
            >
              modifier
            </Button>

            <Button
              variant={"contained"}
              onClick={() => (supprimerClient(id), navigate(deleteClientLink))}
            >
              supprimer
            </Button>
          </CardActions>
        </Card>
      )}
    </Navbar>
  );
};

export default ClientDetailPage;
