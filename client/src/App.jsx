import { Routes, Route } from "react-router-dom";
import { ListarUsuarios, CrearUsuario, EditarUsuario } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListarUsuarios />} />
        <Route path="/crear-usuario" element={<CrearUsuario />} />
        <Route path="/editar-usuario/:id" element={<EditarUsuario />} />
      </Routes>
    </div>
  );
};

export default App;
