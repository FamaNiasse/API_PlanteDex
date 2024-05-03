import { Router } from "express";
import PlanteController from "../controllers/PlanteController";
import { log } from "console";



const planteRouter = Router();
const planteController = new PlanteController();

// Methode getAll
planteRouter.get("/", (req, res) => {
    console.log("PlanteRouter");
    planteController.getAll(req,res);
});

// Methode getById
planteRouter.get("/:id", (req, res) => {
    console.log("PlanteRouteurById")
    planteController.getById(req, res);

});

// Methode create

planteRouter.post("/", (req,res) => {
    console.log("PlanteRouterCreate");
    planteController.create(req,res);
    

});

// Methode update

planteRouter.put("/:id", (req,res) =>{
    console.log("PlanteRouterUpdate");
    planteController.update(req,res);
    
})

// Methode delete

planteRouter.delete("/:id", (req,res) => {
    console.log("PlanteRouterDelete");
    planteController.delete(req,res);
    
})

export default planteRouter;