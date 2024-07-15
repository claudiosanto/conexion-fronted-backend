import { useEffect, useState } from "react";
import "./UsersContainer.css";
import UsersList from "../userslist/UsersList";

function UsersContainer() {
  const [users, setUsers] = useState([users]);
  const getAllUsers = async () => {
    try {
      const response = await fetch("");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(err);
    }
    useEffect(() => {
      getAllUsers();
    }, []);

    return (
      <div>
        <UsersList />
      </div>
    );
  };
}
export default UsersContainer;
