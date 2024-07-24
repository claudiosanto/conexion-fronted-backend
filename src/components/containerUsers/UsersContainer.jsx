import { useEffect, useState } from "react";
import "./UsersContainer.css";
import UsersList from "../userslist/UsersList";

function UsersContainer() {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4030/api/users/");
      const data = await response.json();

      setUsers(data.payload);
    } catch (error) {
      console.error(err);
    }
    useEffect(() => {
      getAllUsers();
    }, []);

    return (
      <div>
        <UsersList users={users} />
      </div>
    );
  };
}
export default UsersContainer;
