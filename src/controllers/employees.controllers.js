import { pool } from '../db.js'


export const getEmployees = async(req, res)=>{
    const [rows] = await pool.query('SELECT * FROM employee')
    console.log(rows)
    res.json('Obteniendo empleados')
}
export const getEmployee = async(req, res)=> {
    //console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    
    if (rows.length <= 0) return res.status(404).json({
        message: 'Employee not found'
    })
    
    res.json(rows[0])}

export const createEmployees = async (req, res) => {
    // Datos en formato json
    // {
    // "name": "Mario",
    // "salary": 2700
    // }
    const { name, salary } = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    // Test para comprobar que llegan datos de json con thunderClient
    // console.log(req.body)
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

export const deleteEmployees = async(req, res)=> {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Employee not found'
    })
    res.sendStatus(204)

}


export const updateEmployees = (req, res)=> res.send('Actualziando empleados')
