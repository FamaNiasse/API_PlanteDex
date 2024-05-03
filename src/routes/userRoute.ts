import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();
const userController = new UserController;

userRouter.get("/", (req, res) => {
    console.log("UserRouter");
    userController.getAll(req,res);
})

userRouter.post("/signup", (req,res) => {
    console.log("UserSignup");
    userController.signup(req, res);
})

userRouter.post("/login", (req,res) => {
    console.log("UserLogin");
    userController.login(req,res);
    
})


export default userRouter;