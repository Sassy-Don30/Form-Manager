var mysql = require('mysql2');
require('dotenv').config();

const { createPool } = require('mysql2');

const sqlConfig = {
	host: 'localhost',
	user: 'root',
	password: 'shashwat30',
	database: 'formmanager',
};

const connectDB = async () => {
	// var connection = mysql.createConnection(sqlConfig);

	const pool = createPool(sqlConfig);

	const conn = pool.getConnection((err) => {
		if (err) {
			console.log('error');
		}
		console.log('connected');
	});

	await conn.query('SELECT 1+1');

	pool.releaseConnection();
};

connectDB();

// connection.query('SELECT 1 + 1', function (err, results, fields) {
// 	console.log(results); // results contains rows returned by server
// 	console.log(fields); // fields contains extra meta data about results, if available
// });
