require("dotenv").config();
const cors=require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Importar los enrutadores
const alumnosRoutes = require("./routes/alumnos");
//const cursosRoutes = require("./routes/cursos");
//const matriculasRoutes = require("./routes/matriculas");

app.use(express.json());
app.use(express.static('./public'));

// Usar las rutas modularizadas
app.use("/alumnos", alumnosRoutes);
//app.use("/cursos", cursosRoutes);
//app.use("/matriculas", matriculasRoutes);

app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
