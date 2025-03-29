/* importamos */
import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js";
/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo htt get */
router.get("/",categoriaController.getCategorias)
/* hacemos disponible a mi sevrer app para toda la app */
export default router;