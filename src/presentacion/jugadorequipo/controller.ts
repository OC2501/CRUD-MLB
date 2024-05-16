import { Request, Response } from "express";
import { JugadorEquipoService } from "../services/jugadorequipo.services";
import { CreateJugadorEquipoDto } from "../../domain/dtos/jugadorEquipo/create-jugadorEquipo.dto";
import { UpdateJugadorEquipoDto } from "../../domain/dtos/jugadorEquipo/update-jugadorEquipo.dto";

export class JugadorEquipoController{
    constructor(private readonly jugadorEquipoService: JugadorEquipoService) {}

    create = (req: Request, res: Response) => {
      const [error, createJugadorEquipoDto] = CreateJugadorEquipoDto.create( req.body );
      if (error) return res.status(400).json({ error });
  
        this.jugadorEquipoService
        .create( createJugadorEquipoDto! )
        .then(( equipo ) => res.json( equipo ))
        .catch((error) => res.status(500).json({ error }));
    };

    update = (req: Request, res: Response) => {
        const [error, updateJugadorEquipoDto] = UpdateJugadorEquipoDto.update({
          ...req.body,
          id: req.params.id,
        });
        if (error) return res.status(400).json({ error });
    
        this.jugadorEquipoService
          .update(updateJugadorEquipoDto!)
          .then((jugadorequipo) => res.json(jugadorequipo))
          .catch((error) => res.status(500).json({ error }));
      };   
            
      delete = (req: Request, res: Response) => {
        const id = req.params.id;
   
          this.jugadorEquipoService.delete(id)
          .then((jugadorequipos) => res.json(jugadorequipos))
          .catch((error) => res.status(500).json({ error }));
      };

      findAll = (req: Request, res: Response) => {
      this.jugadorEquipoService.findAll()
      .then( jugadorequipos => res.json(jugadorequipos) )
      .catch(error => res.status(500).json({error: "internal server"}));
      };
}