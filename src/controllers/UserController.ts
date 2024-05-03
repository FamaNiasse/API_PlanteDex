import { Request, Response } from "express";
import { UserService } from "../services/UserService";


export class UserController {

    private userService = new UserService();

    async getAll(req: Request, res: Response) {
        console.log("UserController");
        const users = await this.userService.getAll();
        res.send({status : "ok", data : users});
    }

    async signup(req: Request, res: Response) {
        console.log("UserControllerSignup");
        const { pseudo, email, password} = req.body;

        const createUser = await this.userService.signup(pseudo, email, password);
console.log("test create user", createUser);

        if (createUser) {
            res.status(201).json({message: "User created"});  
        } else {
            res.status(500).json({message: "Failed to create"});
        }
    }

    async login(req: Request, res: Response) {
        console.log("UserControllerLogin");
        const { email, password} = req.body;
        const token = await this.userService.login(email, password);
        

        if(token) {
            res.status(200).json({ token : token });
           
        }else{
            res.status(401).json({message: "Failed login"})
        }     
    };

}