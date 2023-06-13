import User from "../models/Usuario.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ data: users, message: "Usuarios obtenidos correctamente" });
  } catch (err) {
    console.error(err);
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    res.json({ data: user, message: "Usuario obtenido correctamente" });
  } catch (err) {
    console.error(err);
  }
};

export const createUser = async (req, res) => {
  const { nombre, correo } = req.body;
  try {
    /* Validar si ya existe el correo */
    if (await User.findOne({ where: { correo } })) {
      return res.status(400).json({ message: "El correo ya existe" });
    }

    const user = await User.create({ nombre, correo });
    res.json({ data: user, message: "Usuario creado correctamente" });
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = async (req, res) => {
  const { nombre, correo } = req.body;
  const { id } = req.params;
  try {
    const user = await User.update(
      { nombre, correo },
      { where: { id }, returning: true }
    );

    res.json({ data: user, message: "Usuario actualizado correctamente" });
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.destroy({ where: { id } });
    res.json({ data: user, message: "Usuario eliminado correctamente" });
  } catch (err) {
    console.error(err);
  }
};
