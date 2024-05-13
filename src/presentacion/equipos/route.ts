import { Router } from "express";
import { EquiposController } from "./controller";

export class EquiposRoute{
    static get routes(): Router{
        const routes= Router();
        const controller = new EquiposController();
        routes.get('/',controller.findAll);
        routes.post('/',controller.create);
        routes.delete('/',controller.delete);
        routes.put('/',controller.update);

        return routes;
    }
}