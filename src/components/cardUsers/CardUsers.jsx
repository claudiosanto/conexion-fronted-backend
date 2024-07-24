import { Link } from "react-router-dom";
import "./CardUsers.css";

function CardUsers({ users }) {
  return (
    <div>
      <h1>{users.nombre}</h1>
      <p>{users.email}</p>
      <p>{users.id}</p>
      <p>{users.direccion}</p>
      <p>{users.fechaRegistro}</p>
      <p>{users.apellido}</p>
      <p>{users.edad}</p>
      <Link to={`/users/${users.id}`}>detalle de usuario</Link>
    </div>
  );
}
export default CardUsers;
