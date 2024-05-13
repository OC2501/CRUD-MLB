import {Router} from "express";
import { EquiposRoute } from "./equipos/route"
import {JugadoresRoute} from "./jugadores/route"
import { EstadiosRoute } from "./estadios/route"
import { PartidosRoute} from "./partidos/route"
import { JugadorEquipoRoute } from "./jugadorequipo/route";
export class AppRoute{

    static get routes(): Router{
        const routes = Router();
        
        routes.use('/api/equipos', EquiposRoute.routes );
        routes.use('/api/jugadores', JugadoresRoute.routes );
        routes.use('/api/estadios', EstadiosRoute.routes );
        routes.use('/api/partidos', PartidosRoute.routes );
        routes.use('/api/jugadorequipo', JugadorEquipoRoute.routes );
        return routes;
    }
}