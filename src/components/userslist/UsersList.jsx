import CardUsers from "../cardUsers/CardUsers";
import "./UsersList.css";
function UsersList({ users }) {
  return (
    <div>
      {!users || users === 0 ? (
        <h1>cargando..</h1>
      ) : (
        users.map((users) => <CardUsers key={id} users={users} />)
      )}
    </div>
  );
}
export default UsersList;
