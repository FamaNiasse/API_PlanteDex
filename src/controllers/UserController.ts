import { Request, Response } from "express";
import { UserService } from "../services/UserService";


export class UserController {

    private userService = new UserService();

    async signup(req: Request, res: Response) {
        console.log("UserRouter");
        const { pseudo, email, password} = req.body;

        const createUser = await this.userService.signup(pseudo, email, password);

        if (createUser) {
            res.status(201).json({message: "User created"});  
        } else {
            res.status(500).json({massage: "Failed to create"});
        }
    }
}