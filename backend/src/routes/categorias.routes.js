/* importamos */
import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js";
/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo htt get */
router.get("/",categoriaController.getCategorias); /* read */
router.post("/",categoriaController.PostCategorias);/* create*/

/* Ruta que rcibe un parametro */
router.get("/:id",categoriaController.getCategory);/* create*/
/* hacemos disponible a mi sevrer app para toda la app */
export default router;
