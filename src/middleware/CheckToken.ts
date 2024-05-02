import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const checkToken = (req: Request, res: Response, next: NextFunction) => {
    //récupères l'en-tête Authorization de la requête entrante et l'assignes à la variable token, ce qui te permet de vérifier l'authentification de l'utilisateur dans ton code.
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized Token" })
    }
    //extraction du prefixe "Bearer" du jeton extrait dans l'entête authorization
    const tokenVerify = token.replace("Bearer", "");

    try {
        //Verification du token avec la clef secrète JWT
        jwt.verify(tokenVerify, process.env.JWT_SECRET);
    }catch(error) {
        return res.status(401).json({ message: "Unauthorized JWT" });
    }

    //Si le token est valide, on appelle la fonction next

    };

    export default checkToken;


