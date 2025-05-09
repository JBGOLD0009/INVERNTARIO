/* importamos al framework express */
import express from "express" ;
import cors from "cors"
import categoriasRoutes from "./routes/categorias.routes.js"
/* asignamos a app toda la funcionalidad para mi server web */
const app= express();

/* set6ear un puesrto a mi web server */
app.set("port",5000)

/* Middleware */
app.use(express.json());

/* Cors */
app.use(cors());

/* routes */
app.use("/api/categorias",categoriasRoutes)

app.get('/',(req,res) =>{
    res.send('REST API EN RENDER WITHOUT DATABASE ENDPONITS')
})
/* hacemos disponible a mi server app para toda la app */
export default app;