import { Router } from "express";
import PlanteController from "../controllers/PlanteController";
import checkToken from "../middleware/CheckToken";


const planteRouter = Router();
const planteController = new PlanteController();

planteRouter.get("/", checkToken, (req, res) => {
    console.log("PlanteRouter");
    planteController.getAll(req,res);
})
export default planteRouter;