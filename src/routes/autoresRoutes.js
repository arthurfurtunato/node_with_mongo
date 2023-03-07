import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router.get("/autores", AutorController.listarAutores)
router.post("/autores", AutorController.cadastrarAutor)
router.put("/autores/:id", AutorController.atualizarAutor)
router.get("/autores/:id", AutorController.listarAutorPorId)
router.delete("/autores/:id", AutorController.excluirAutor)

export default router;