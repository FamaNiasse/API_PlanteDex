import bcrypt from "bcrypt";
import appDataSource from "../data-source";
import { User } from "../models/entities/UserEntity";

export class UserService {
    private userRepository = appDataSource.getRepository(User)

    async signup (pseudo : string, email : string, password : string ) {
        console.log("UserService");

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = this.userRepository.create({
            pseudo: pseudo,
            email: email,
            password: hashedPassword
        });

        return await this.userRepository.softRemove(newUser);
    }
    

}