import appDataSource from "./data-source";
import  express  from "express";
import cors from "cors";
import planteRouter from "./routes/PlanteRoute";

appDataSource.initialize().then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    // première requête / response
    //app.get("/", (req, res) => {
    //    res.send("Hello Word")
    //});

    app.use("/api/plantes", planteRouter)
    
    app.listen(process.env.PORT, () => {
        console.log("server is running on port ${process.env.PORT}");
    });
})