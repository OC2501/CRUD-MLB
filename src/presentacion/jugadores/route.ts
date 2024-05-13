import { Router } from "express";
import { JugadoresController } from "./controller";

export class JugadoresRoute{
    static get routes(): Router{
        const routes= Router();
        const controller = new JugadoresController();
        routes.get('/',controller.findAll);
        routes.post('/',controller.create);
        routes.delete('/',controller.delete);
        routes.put('/',controller.update);

        return routes;
    }
}