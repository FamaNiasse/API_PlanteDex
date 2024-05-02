import bcrypt from "bcrypt";
import appDataSource from "../data-source";
import { User } from "../models/entities/UserEntity";
import jwt  from "jsonwebtoken";

export class UserService {


    private userRepository = appDataSource.getRepository(User)

    async getAll(){
        console.log("UserService");
        return this.userRepository.find();

    }

    async signup (pseudo : string, email : string, password : string ) {
        console.log("UserServiceSignup");

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = this.userRepository.create({
            pseudo: pseudo,
            email: email,
            password: hashedPassword,
            role: 2
        });
        console.log("test new user", newUser);
        

        return await this.userRepository.save(newUser);
    }

    async login(email : string, password : string) {
        console.log("UserServiceLogin");
        console.log("login", email, password);
        const user = await this.userRepository.findOneBy({email: email});

        if(!user){
            return null;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("mdp = " + password);
        console.log("user = " + user.password);
    
        if (!isPasswordValid) {
            console.log("Invalid pwd");
            return null;
        }
        const token = jwt.sign(
            { id: user.id, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: "1h"} 
        );

        console.log("Tokentestlogin", token);
        // user.token = token;
        // this.userRepository.save(user);

        return token;
    }
    

}