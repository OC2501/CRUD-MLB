import { Router } from "express";
import { JugadorEquipoController } from "./controller";
import { JugadorEquipoService } from "../services/jugadorequipo.services";

export class JugadorEquipoRoute{
    static get routes(): Router{
        const routes= Router();
        const jugadorEquipoService = new JugadorEquipoService()
        const controller = new JugadorEquipoController(jugadorEquipoService);
        routes.get('/',controller.findAll);
        routes.post('/',controller.create);
        routes.delete('/:id',controller.delete);
        routes.put('/:id',controller.update);

        return routes;
    }
}