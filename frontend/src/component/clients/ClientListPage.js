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
import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { Clear, Search } from "@mui/icons-material";
import { useClientContext } from "./ClientContext";

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

const ClientListPage = () => {
  const {
    clients,
    supprimerClient,
    laRecherche,
    clientTrouverParRecherche,
    setLaRecherche,
  } = useClientContext();

  const [idClientToDelete, setIdClientToDelete] = useState();

  const [openDialog, setopenDialog] = useState(false);

  const handleClose = () => {
    setopenDialog(false);
  };

  const handleDelete = () => {
    supprimerClient(idClientToDelete);
    setopenDialog(false);
  };

  return (
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
        <DialogTitle>Attention</DialogTitle>
        <DialogContent>Voulez vous vraiment supprimer ce client?</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Non</Button>
          <Button onClick={handleDelete}>Oui</Button>
        </DialogActions>
      </Dialog>
    </Navbar>
  );
};

export default ClientListPage;
