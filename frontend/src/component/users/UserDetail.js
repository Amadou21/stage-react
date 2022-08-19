import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { UserCard } from "./UserList";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  //   const _user = users.find((user) => user.id === id);

  return (
    <div>
      <Navbar />
      {user && <UserCard user={user} />}
    </div>
  );
};

export default UserDetail;
