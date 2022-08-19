import {
  Card,
  CardHeader,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Link as MuiLink,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { Clear, Search } from "@mui/icons-material";
import { useClientContext } from "./ClientContext";
// import { boolean } from "yup";

// je vais creer une fonction qui me retourne une ligne (tablerow) qui contient un client et qui
// met l'id d'un client à supprimer dans un state et met à true le boolean qui permet à la boite de
// dialog d'apparaitre

const Lignes = ({ client, onDelete }) => {
  const UpdateLink = "/clients/update/" + client.idClient;
  const DetailClientLink = "/clients/" + client.idClient;
  return (
    <TableRow key={client.idClient}>
      <TableCell>{client.idClient}</TableCell>
      <TableCell>{client.nom}</TableCell>
      <TableCell>{client.prenom}</TableCell>
      <TableCell>{client.adresse}</TableCell>
      <TableCell>
        <Tooltip title="Détail">
          <MuiLink component={Link} to={DetailClientLink}>
            <IconButton>
              <InfoIcon sx={{ color: "blue" }} />
            </IconButton>
          </MuiLink>
        </Tooltip>
        <Tooltip title="Modifier">
          <MuiLink component={Link} to={UpdateLink}>
            <IconButton>
              <EditIcon sx={{ color: "orange" }} />
            </IconButton>
          </MuiLink>
        </Tooltip>
        <Tooltip title="Supprimer">
          <IconButton onClick={onDelete}>
            <DeleteForeverIcon sx={{ color: "red" }} />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

// function match(client, client_rechercher) {
//   const base_de_la_recherche = (
//     client.nom +
//     client.prenom +
//     client.adresse +
//     client.idClient
//   ).toLowerCase();
//   return base_de_la_recherche.indexOf(client_rechercher) >= 0;
// }

const ClientListPage = () => {
  const {
    clients,
    supprimerClient,
    laRecherche,
    clientTrouverParRecherche,
    setLaRecherche,
  } = useClientContext();

  // state contenant l'id du client à supprimer
  const [idClientToDelete, setIdClientToDelete] = useState();

  // state contetant le boolean permettant d'afficher la boite de dialog
  const [openDialog, setopenDialog] = useState(false);

  const handleClose = () => {
    setopenDialog(false);
  };

  const handleDelete = () => {
    supprimerClient(idClientToDelete);
    setopenDialog(false);
  };

  // const [laRecherche, setLaRecherche] = useState("");
  // const [clients_rechercher, SetClients_rechercher] = useState(liste_clients);

  // useEffect(() => {
  //   const la_recherche = laRecherche.toLowerCase();
  //   const client_trouver_par_recherche = liste_clients.filter((client) =>
  //     match(client, la_recherche)
  //   );
  //   SetClients_rechercher(client_trouver_par_recherche);
  // }, [laRecherche]);

  return (
    <div>
      <Navbar>
        <Card>
          <CardHeader
            title={<h1 style={{ textAlign: "center" }}>Liste des clients</h1>}
          />
          <CardContent>
            <TextField
              value={laRecherche}
              onChange={(e) => setLaRecherche(e.target.value)}
              InputProps={{
                startAdornment: <Search />,
                endAdornment: laRecherche && (
                  <IconButton onClick={() => setLaRecherche("")}>
                    <Clear />
                  </IconButton>
                ),
              }}
            />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Nom</TableCell>
                    <TableCell>Prenom</TableCell>
                    <TableCell>Adresse</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* ----------------------------- */}
                  {clientTrouverParRecherche.map((client) => (
                    <Lignes
                      key={client.idClient}
                      client={client}
                      onDelete={() => {
                        setIdClientToDelete(client.idClient);
                        setopenDialog(true);
                      }}
                    />
                  ))}

                  {/* ----------------------------- */}
                </TableBody>
              </Table>
              <Typography sx={{ mt: 2, textAlign: "end" }}>
                {clientTrouverParRecherche.length}/{clients.length} client(s)
              </Typography>
            </TableContainer>
          </CardContent>
        </Card>

        <Dialog open={openDialog}>
          {/*onClose={}*/}
          <DialogTitle>Attention</DialogTitle>
          <DialogContent>
            Voulez vous vraiment supprimer ce client?
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Non</Button>
            <Button onClick={handleDelete}>Oui</Button>
          </DialogActions>
        </Dialog>
      </Navbar>
    </div>
  );
};

export default ClientListPage;
