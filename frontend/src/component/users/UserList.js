import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Link as MuiLink,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { Phone } from "@mui/icons-material";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <div>
      <Navbar />
      <Grid container spacing={3}>
        {users?.map((user) => (
          <Grid key={user.id} item xs={6} md={4} lg={3}>
            <MuiLink component={Link} to={"/users/" + user.id} underline="none">
              <UserCard user={user} />
            </MuiLink>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UserList;

export const UserCard = ({ user }) => {
  // console.log(user);
  return (
    <Card>
      <CardHeader
        title={user.name}
        subheader={user.email}
        avatar={<Avatar>{user.id}</Avatar>}
      />
      <CardContent>
        {/* {console.log(user.phone)} */}
        <Chip label={user.phone} icon={<Phone sx={{ fontsize: 15 }} />} />
      </CardContent>
    </Card>
  );
};
