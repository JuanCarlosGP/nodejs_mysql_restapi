import { Router } from "express";
import { ping } from "../controllers/index.controllers.js";

const router = Router();

// Test de conexion a la base de datos
router.get('/ping', ping)

export default router