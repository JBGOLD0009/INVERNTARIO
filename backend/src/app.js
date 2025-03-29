/* importamos al framework express */
import express from "express";

/* asignamos a app toda la funcionalidad para mi server web */
const app= express();

/* set6ear un puesrto a mi web server */
app.set("port",5000)

/* hacemos disponible a mi server app para toda la app */
export default app;