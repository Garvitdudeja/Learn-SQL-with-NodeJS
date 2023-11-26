
import db from '../config/db.js'

class User{
    constructor(name, email, Password){
        this.name = name;
        this.email = email;
        this.Password = Password
    }

    save(){
        let sql = `insert into users(name , email , Password)
        values(${this.name}, ${this.email},${this.Password})`;
        let res =  db.execute(sql);
        return res
    }
    async findAllUsers(){
        let sql = "select * from users";
        const [resp] = await db.execute("select * from users");
        return resp;
    }
}

export default User;