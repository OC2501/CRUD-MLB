import { Router } from "express";
import { EstadiosController } from "./controller";
import { EstadiosService } from "../services/estadios.services";

export class EstadiosRoute{
    static get routes(): Router{
        const routes= Router();
        const equiposService = new EstadiosService()
        const controller = new EstadiosController(equiposService);
        routes.get('/',controller.findAll);
        routes.post('/',controller.create);
        routes.delete('/:id_estadio',controller.delete);
        routes.put('/:id_estadio',controller.update);

        return routes;
    }
}