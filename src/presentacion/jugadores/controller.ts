import { Request, Response } from "express";
import { JugadoresService } from "../services/jugadores.services";
import { CreateJugadoresDto } from "../../domain/dtos/jugadores/create-jugadores.dto";
import { UpdateJugadoresDto } from "../../domain/dtos/jugadores/update-jugadores.dto";

export class JugadoresController{
    constructor(
        private readonly jugadoresService: JugadoresService,
    ){}

    create = ( req:Request, res: Response ) => {
        const [ error, createJugadoresDto ] = CreateJugadoresDto.create( req.body );
        if( error ) return res.status(400).json({error})
        
        this.jugadoresService.create( createJugadoresDto! )
        .then( jugadores => res.json(jugadores) )
        .catch(error => res.status(500).json({error}));
    }

    update = (req: Request, res: Response) => {
        const [error, updateJugadoresDto] = UpdateJugadoresDto.update({
          ...req.body,
          id_jugador: req.params.id_jugador,
        });
        if (error) return res.status(400).json({ error });
    
        this.jugadoresService
          .update(updateJugadoresDto!)
          .then((jugadores) => res.json(jugadores))
          .catch((error) => res.status(500).json({ error }));
      };    
            
      delete = (req: Request, res: Response) => {
        const id_jugador = req.params.id_jugador;
     
    
          this.jugadoresService.delete(id_jugador)
          .then((jugadores) => res.json(jugadores))
          .catch((error) => res.status(500).json({ error }));
      };

    findAll = (req: Request, res: Response) => {
        this.jugadoresService.findAll()
        .then( jugadores => res.json(jugadores) )
        .catch(error => res.status(500).json({error: "internal server"}));
    };
}