/* importamos */
import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js";
/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo htt get */
router.get("/",categoriaController.getCategorias); /* para read crud - read */
router.post("/",categoriaController.PostCategorias);/* para read crud - create*/

/* Ruta que rcibe un parametro */
router.get("/:id",categoriaController.getCategory);/* para  crud - read 1 sola fila*/

/* Ruta que recibe parametro id de categoria a borrar */
router.delete("/:id",categoriaController.deleteCategory);/* para  crud - delete 1 sola fila*/

/* Ruta que rercibe como parametro tanto el cuerpo del id a actualizar */
router.put("/:id",categoriaController.updateCategorias);/* para  crud - delete 1 sola fila*/

/* hacemos disponible a mi sevrer app para toda la app */
export default router;
