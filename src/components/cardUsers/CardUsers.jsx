import "./CardUsers.css";

function CardUsers({ users }) {
  return (
    <div>
      <h1>{users.name}</h1>
      <p>{users.email}</p>
      <p>{users.id}</p>
    </div>
  );
}
export default CardUsers;
