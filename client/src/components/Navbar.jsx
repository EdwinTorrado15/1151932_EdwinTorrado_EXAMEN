import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Ver Usuarios</Link>
        </li>
        <li>
          <Link to="/crear-usuario">Crear Usuario</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
