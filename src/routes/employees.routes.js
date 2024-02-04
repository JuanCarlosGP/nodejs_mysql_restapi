import { Router } from "express";
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployee } from "../controllers/employees.controllers.js";

const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployees)
router.patch('/employees/:id', updateEmployees) // Usamos patch en vez de PUT porque en este caso a la hora de actualizar los datos 
                                                // de la tabla puede ser que no necesitemos modificar todos los campos
router.delete('/employees/:id', deleteEmployees) 

export default router