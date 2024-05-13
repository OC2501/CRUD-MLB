import { Router } from "express";
import { PartidosController } from "./controller";

export class PartidosRoute{
    static get routes(): Router{
        const routes= Router();
        const controller = new PartidosController();
        routes.get('/',controller.findAll);
        routes.post('/',controller.create);
        routes.delete('/',controller.delete);
        routes.put('/',controller.update);

        return routes;
    }
}