function CardUsers({ user }) {
  return (
    <div>
      <h1>{user.nombre}</h1>

      <p>{user.email}</p>
      <p>{user.contrasena}</p>
      <p>{user.edad}</p>
      <p>{user.apellido}</p>
      <p>{user.fechaRegistro}</p>
      <p>{user.direccion}</p>
    </div>
  );
}
export default CardUsers;
