import { Request, Response } from "express";
import PlanteService from "../services/PlanteService";

// On fait une classe c'est un moule du plante
class PlanteController{

    private planteService = new PlanteService();

    // le async est la pour dire "la réponse va arriver il faut l'attendre" await.
    // On utilise la methode getAll pour tout récupérer 
    async getAll(req: Request, res: Response) {
        console.log("PlanteController");

        try{
            const plantes = await this.planteService.getAll();
            res.send({status : "ok", data : plantes});
        } catch (error) {
            res.status(500).send({status : "Failed get by", message: error});
        }

    }

    async getById(req: Request, res: Response) {
        console.log("PlanteControllerById");
        const plantes = await this.planteService.getById(Number(req.params.id));
        res.send({status : "ok", data : plantes});
    }

    async create(req: Request, res: Response) {
        console.log("PlanteControllerCreate");

        try{
            const plantes = await this.planteService.create(req.body);
            res.send({status : "ok", data : plantes});
        } catch (error) {
            res.status(500).send({status : "Failed to create", message: error});
        }   
    }

    async update(req: Request, res: Response) {
        console.log("PlanteControllerUpdate");

        try{
            const plante = await this.planteService.update(Number(req.params.id),req.body);
            res.send({status : "ok", data : plante});
        } catch (error) {
            res.status(500).send({status : "Failed to create", message: error});
        }
        
    }

    async delete(req: Request, res: Response) {
        console.log("PlanteControllerDelete");

        try{
            const plante = await this.planteService.delete(Number(req.params.id));
            res.send({status : "ok", data : plante});
        }catch (error) {
            res.status(500).send({status : "Failed to delete", message: error});
            
        }
        
    }

}

export default PlanteController;