import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const ITEM_HEIGHT = 48;

export default function LongMenu({Account, onDelete}) {

//Les configuration faites par mui
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more" id="long-button" aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined} aria-haspopup="true" onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu" MenuListProps={{'aria-labelledby': 'long-button',}}
        anchorEl={anchorEl} open={open} onClose={handleClose}
        PaperProps={{style: {maxHeight: ITEM_HEIGHT * 4.5,},}} >

        <MuiLink component={Link} to={'/accounts/'+Account.idAccount}>
          <MenuItem>Details</MenuItem>
        </MuiLink>
        <MuiLink component={Link} to={'/accounts/update/'+Account.idAccount}>
          <MenuItem>Modifier</MenuItem>
        </MuiLink>
        <MenuItem  onClick={onDelete} sx={{ color: 'red', '&:hover': {background: "red", color: 'white'}}}>Supprimer</MenuItem>{/*On delete a ete definis en prop dans listPage*/}
      </Menu>
    </div>
  );
}