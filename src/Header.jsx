import { getProductBynombre } from "./components/database/users";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../src/logo/logo.svg";
function Header() {
  const hendleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    getProductBynombre(data.nombre).then((data) => console.log(data));
  };
  return (
    <main className="main">
      <header className="header-container">
        <div className="titulo">
          <img className="logo" src={logo} />
          <h1>mercado de compras</h1>
        </div>
        <form onSubmit={hendleSubmit}>
          <input type="text" name="nombre" />
          <input type="submit" value={"enviar"} />
        </form>
        <div className="navegacion">
          <ul>
            <li>
              <Link to="/products">productos</Link>
            </li>
            <li>
              <Link to="/users">usuarios</Link>
            </li>
          </ul>
        </div>
        <a
          className="dashboard"
          href="http://localhost:4030/dashboard"
          style={{
            color: "black",
            fontSize: "20px",
          }}
        >
          Dashboard
        </a>
      </header>
    </main>
  );
}

export default Header;
