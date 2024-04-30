import bcrypt from "bcrypt";
import appDataSource from "../data-source";
import { User } from "../models/entities/UserEntity";

export class UserService {


    private userRepository = appDataSource.getRepository(User)

    async getAll(){
        console.log("UserService");
        return this.userRepository.find();

    }

    async signup (pseudo : string, email : string, password : string ) {
        console.log("UserService");

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
    

}