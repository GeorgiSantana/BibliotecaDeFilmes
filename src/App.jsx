import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/"> Lista de filmes </Link>
        </h2>
        <Link to="/filme">Filme</Link>
        <Link to="/busca">Busca</Link>
      </nav>
      <h2>Lista de filmes</h2>
      <Outlet />
    </div>
  );
}

export default App;
