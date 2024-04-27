import { Router } from "express";
import PlanteController from "../controllers/PlanteController";


const planteRouter = Router();
const planteController = new PlanteController();

planteRouter.get("/", (req, res) => {
    console.log("PlanteRouter");
    planteController.getAll(req,res);
})
export default planteRouter;