import { createPool } from 'mysql2/promise'

export const pool = createPool({
	host: 'localhost',
	user: 'root',
	password: '1234',
	port: 3306,
	database: 'restapi'
})
// Ejemeplo método query
// pool.query('select * from employees');