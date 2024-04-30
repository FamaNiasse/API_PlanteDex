import AppDataSource from "../data-source";
import { Plante } from "../models/entities/PlanteEntity";


class PlanteService{

    private planteRepository = AppDataSource.getRepository(Plante)

    async getAll(){
        console.log("PlanteService");
        return this.planteRepository.find();

    }
}
export default PlanteService;