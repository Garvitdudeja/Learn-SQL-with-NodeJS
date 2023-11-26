import db from '../config/db.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const generateJWT = (data)=>{
    return  jwt.sign(data,process.env.JWT_secret);
}


const signUp = (req,res)=>{
    try{
        const {name, email,password} = req.body;
        if(!email || !password ||!name){
            return res.status(400).json({message: "Add all the fields"})
        };
        const [data] = db.execute(`select * from Users where email = ${email}`)
        if(data){
            return res.status(400).json({message: "User already exists try to login"})
        }
        const encryptedPassword = bcrypt.hashSync(password,10);
        const newUser = db.execute(`insert into users(name , email , Password)
        values(${name}, ${email},${password})`);
        

    }
    catch(err){
        return res.status(400).json({message: err.message})
    }
}