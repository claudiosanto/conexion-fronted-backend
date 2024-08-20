import CardUsers from "../usersCard/CardUsers";

function ListUsers({ users }) {
  return (
    <div>
      {!users || users.lenght === 0 ? (
        <h1>cargando.....</h1>
      ) : (
        users.map((users, id) => <CardUsers user={users} key={id} />)
      )}
    </div>
  );
}
export default ListUsers;
