const express = require("express");
const db = require('./utils/database');
const app = express();
const userRoutes = require('./Routes/users.routes');
const coursesRoutes = require('./Routes/courses.routes');
const videosRoutes = require('./Routes/videos.routes');
const categoriesRoutes = require('./Routes/categories.routes');

const initModels = require('./models/initModels');
const PORT = 8000;

initModels();
app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", coursesRoutes);
app.use("/api/v1", videosRoutes);
app.use("/api/v1", categoriesRoutes);



db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));




// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Bienvenido al server" });
// });











app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});