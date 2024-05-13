import { Router } from "express";
import { EstadiosController } from "./controller";

export class EstadiosRoute{
    static get routes(): Router{
        const routes= Router();
        const controller = new EstadiosController();
        routes.get('/',controller.findAll);
        routes.post('/',controller.create);
        routes.delete('/',controller.delete);
        routes.put('/',controller.update);

        return routes;
    }
}