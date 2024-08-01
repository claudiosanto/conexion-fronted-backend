import CardUsers from "../usersCard/CardUsers";

function ListUsers({ users }) {
  return (
    <div>
      {!users || users.lenght === 0 ? (
        <h1>cargando.....</h1>
      ) : (
        users.map((users) => <CardUsers key={users.id} user={users} />)
      )}
    </div>
  );
}
export default ListUsers;
