import { Router } from "express";
import { JugadoresController } from "./controller";
import { JugadoresService } from "../services/jugadores.services";

export class JugadoresRoute{
    static get routes(): Router{
        const routes= Router();
        const jugadoresService = new JugadoresService()
        const controller = new JugadoresController(jugadoresService);
        routes.get('/',controller.findAll);
        routes.post('/',controller.create);
        routes.delete('/:id_jugador',controller.delete);
        routes.put('/:id_jugador',controller.update);

        return routes;
    }
}