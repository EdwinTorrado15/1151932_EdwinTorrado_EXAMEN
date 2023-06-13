import { useState, useEffect } from "react";
import { apiWeb } from "../api/apiWeb";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const columnas = [
  {
    id: "id",
    label: "ID",
  },
  {
    id: "nombre",
    label: "Nombre",
  },
  {
    id: "correo",
    label: "Correo",
  },
  {
    id: "acciones",
    label: "Acciones",
  },
];

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const getUsers = async () => {
    try {
      const response = await apiWeb.get("/usuarios");
      setUsuarios(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await apiWeb.delete(`/usuarios/delete/${id}`);
      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="title">Lista de usuarios</h1>

      <table>
        <thead>
          <tr>
            {columnas.map((columna) => (
              <th key={columna.id}>{columna.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Link to={`/editar-usuario/${usuario.id}`} className="btn-edit">
                  <AiOutlineEdit />
                </Link>
                <button
                  onClick={() => deleteUser(usuario.id)}
                  className="btn-delete"
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarUsuarios;
