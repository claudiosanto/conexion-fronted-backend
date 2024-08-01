import { GetProductBynombre } from "./components/database/users";
import "./Header.css";

import { Link } from "react-router-dom";

function Header() {
  const hendleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    GetProductBynombre(data.nombre).then((data) => console.log(data));
  };
  return (
    <>
      <div>
        <header className="headercontainer">
          <nav>
            <h1>mercado de compras</h1>
            <Link to="/products">producto</Link>
            <Link to="/users">usuarios</Link>

            <form onSubmit={hendleSubmit}>
              <input type="nombre" name="nombre" />
              <input type="submit" value={"enviar"} />
            </form>
          </nav>
        </header>
      </div>
    </>
  );
}
export default Header;
