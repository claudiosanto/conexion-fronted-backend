import { useEffect, useState } from "react";
import ListUsers from "../usersList/ListUsers";

function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:4030/api/users/");
      const data = await response.json();
      console.log(data.payload);
      setUsers(data.payload);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return <ListUsers users={users} key={users} />;
}

export default Users;
