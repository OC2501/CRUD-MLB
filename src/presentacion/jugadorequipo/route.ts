import { Router } from "express";
import { JugadorEquipoController } from "./controller";

export class JugadorEquipoRoute{
    static get routes(): Router{
        const routes= Router();
        const controller = new JugadorEquipoController();
        routes.get('/',controller.findAll);
        routes.post('/',controller.create);
        routes.delete('/',controller.delete);
        routes.put('/',controller.update);

        return routes;
    }
}