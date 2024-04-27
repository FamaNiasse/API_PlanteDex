import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();
const userController = new UserController;

userRouter.post("/signup", (req,res) => {
    console.log("UserRouter");
    userController.signup(req, res);
})
export default userRouter;