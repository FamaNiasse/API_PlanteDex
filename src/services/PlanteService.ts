import AppDataSource from "../data-source";
import { Plante } from "../models/entities/PlanteEntity";


class PlanteService{

    private planteRepository = AppDataSource.getRepository(Plante)

    //READ ALL
    async getAll(){
        console.log("PlanteService");
        return await this.planteRepository.find();

    }
    //READ ONE

    async getById(id: number){
        console.log("PlanteServiceById");
         //return AppDataSource.query(`SELECT * FROM plant where id = ${id}`);
        return this.planteRepository.findOneBy({id: id});

    }
    //CREATE

    async create(plante: Plante) {
        console.log("PlanteServiceCreate");
        const newPlante = this.planteRepository.create(plante);
        console.log("Create plante", newPlante, plante);  
        return this.planteRepository.save(newPlante);   
    }

    // UPDATE
    async update(id: number, plante: Plante){
        console.log("PlanteServiceUpdate");
        return this.planteRepository.update(id, plante);

    }
    // DELETE

    async delete(id: number){
        console.log("PlanteServiceDelete");
        return this.planteRepository.delete(id); 
    }
}
export default PlanteService;