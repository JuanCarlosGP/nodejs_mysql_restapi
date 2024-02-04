import express from "express";
import {pool} from "./db.js"

const app = express();
app.listen(3000);

// Test de conexion a la base de datos
// app.get('/ping', async(req, res)=> {
//     const [result] = await pool.query('SELECT 1 + 1 AS solution')
//     res.json(result[0])
// });

app.get('/employees', (req, res)=> res.send('Obteniendo empleados'))
app.post('/employees', (req, res)=> res.send('Creando empleados'))
app.put('/employees', (req, res)=> res.send('Actualziando empleados'))
app.delete('/employees', (req, res)=> res.send('Eliminando empleados'))


console.log("Server running on port k3000...");