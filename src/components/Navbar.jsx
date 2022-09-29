import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          {" "}
          <BiCameraMovie />
          Lista de filmes{" "}
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="Qual filme deseja pesquisar?" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
