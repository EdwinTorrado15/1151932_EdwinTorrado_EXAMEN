import express from "express";
import cors from "cors";
import morgan from "morgan";
import { db } from "./config/Database.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

// Conectamos a la base de datos
try {
  await db.authenticate();
  console.log("Base de datos conectada");
} catch (err) {
  console.error(err);
}

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/usuarios", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
