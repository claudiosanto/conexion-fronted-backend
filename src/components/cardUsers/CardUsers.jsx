import { Link } from "react-router-dom";
import "./CardUsers.css";

function CardUsers({ user }) {
  return (
    <div>
      <h1>{user.nombre}</h1>
      <p>{user.email}</p>
      <p>{user.id}</p>
      <p>{user.direccion}</p>
      <p>{user.fechaRegistro}</p>
      <p>{user.apellido}</p>
      <p>{user.edad}</p>
      <Link to={`/users/${user.id}`}>detalle de usuario</Link>
    </div>
  );
}
export default CardUsers;
