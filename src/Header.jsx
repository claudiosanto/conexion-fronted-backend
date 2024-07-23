import "./Header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <header className="headercontainer">
          <nav>
            <h1>mercado de compras</h1>

            <Link to="/products">producto</Link>
            <Link>categoria</Link>
            <Link to="/users">usuarios</Link>
          </nav>
        </header>
      </div>
    </>
  );
}
export default Header;
