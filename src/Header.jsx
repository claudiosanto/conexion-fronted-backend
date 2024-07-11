import "./Header.css";
import icons from "../../icons.png/marca.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <header className="headercontainer">
          <nav>
            <h1>mercado de compras</h1>
            <img src={icons} />
            <Link to="/products">inicio</Link>
            <Link>categoria</Link>
          </nav>
        </header>
      </div>
    </>
  );
}
export default Header;
