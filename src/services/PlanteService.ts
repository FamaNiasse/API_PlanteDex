import appDataSource from "../data-source";

class PlanteService{
    async getAll(){
        console.log("PlanteService");
        return appDataSource.query("SELECT * FROM plant;");
        // Une requète SQL termine par un ;

    }
}
export default PlanteService;