import { Router } from "express";
import { PartidosController } from "./controller";
import { PartidosService } from "../services/partidos.services";

export class PartidosRoute{
    static get routes(): Router{
        const routes= Router();
        const partidosService = new PartidosService()
        const controller = new PartidosController(partidosService);
        routes.get('/',controller.findAll);
        routes.post('/',controller.create);
        routes.delete('/:id_partido',controller.delete);
        routes.put('/:id_partido',controller.update);

        return routes;
    }
}