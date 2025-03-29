/* importamos al framework express */
import express from "express" ;
import categoriasRoutes from "./routes/categorias.routes.js"
/* asignamos a app toda la funcionalidad para mi server web */
const app= express();

/* set6ear un puesrto a mi web server */
app.set("port",5000)

/* routes */
app.use("/api/categorias",categoriasRoutes)

/* hacemos disponible a mi server app para toda la app */
export default app;