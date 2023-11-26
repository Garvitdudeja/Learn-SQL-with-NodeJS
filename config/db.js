import sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()


const connection = new sequelize(process.env.DB_name,process.env.DB_user,process.env.DB_password,{
    host: process.env.DB_host,
    dialect: 'mysql'
})

await connection.authenticate().then(()=>{console.log("database Connection Success")}).catch((err)=>
    {console.log(err.message)}
)

export default connection;



//Older way of using SQL 

// import mysql from 'mysql2';
// import dotenv from 'dotenv';

// dotenv.config()

// const pool = mysql.createPool({
//     user: process.env.DB_user,
//     database: process.env.DB_name,
//     host: process.env.DB_host,
//     password: process.env.DB_password
// })
//  const data = await pool.execute("select * from users");

// export default pool.promise();