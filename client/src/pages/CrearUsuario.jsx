import { useState, useEffect } from "react";
import { apiWeb } from "../api/apiWeb";
import { useNavigate } from "react-router-dom";

const CrearUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    correo: "",
  });

  const navite = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    try {
      await apiWeb.post("/usuarios/create", usuario);
      navite("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="title">Crear usuario</h1>

      <form
        onSubmit={createUser}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="nombre">Nombre</label>
          <input
            style={{ padding: "10px" }}
            type="text"
            name="nombre"
            placeholder="Nombre"
            id="nombre"
            value={usuario.nombre}
            onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="correo">Correo</label>
          <input
            style={{ padding: "10px" }}
            type="email"
            name="correo"
            placeholder="Correo"
            id="correo"
            value={usuario.correo}
            onChange={(e) => setUsuario({ ...usuario, correo: e.target.value })}
          />
        </div>

        <button style={{ padding: "10px", marginTop: "20px" }} type="submit">
          Crear usuario
        </button>
      </form>
    </div>
  );
};

export default CrearUsuario;
