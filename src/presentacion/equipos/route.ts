import { Router } from "express";
import { EquiposController } from "./controller";
import { EquiposService } from "../services/equipos.services";

export class EquiposRoute{
    static get routes(): Router{
        const routes= Router();
        const equiposService = new EquiposService()
        const controller = new EquiposController(equiposService);
        routes.get('/', controller.findAll);
        routes.post('/',controller.create);
        routes.delete('/:id_equipo',controller.delete);
        routes.put('/:id_equipo',controller.update);

        return routes;
    }
}