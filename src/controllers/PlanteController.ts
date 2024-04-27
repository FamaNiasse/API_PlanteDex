import { Request, Response } from "express";
import PlanteService from "../services/PlanteService";

// On fait une classe c'est un moule du plante
class PlanteController{

    private planteService = new PlanteService();

    // le async est la pour dire "la réponse va arriver il faut l'attendre" await.
    // On utilise la methode getAll pour tout récupérer 
    async getAll(req: Request, res: Response) {
        console.log("PlanteController");
        const plantes = await this.planteService.getAll();
        res.send({status : "ok", data : plantes});
    }

}

export default PlanteController;