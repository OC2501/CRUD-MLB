import { Request, Response } from "express";
import { CreatePartidosDto } from "../../domain/dtos/partidos/create-partidos.dto";
import { PartidosService } from "../services/partidos.services";
import { UpdatePartidosDto } from "../../domain/dtos/partidos/update-partidos.dto";

export class PartidosController {
  constructor(private readonly partidosService: PartidosService) {}

  create = (req: Request, res: Response) => {
    const [error, createPartidoDto] = CreatePartidosDto.create( req.body );
    if (error) return res.status(400).json({ error });

    this.partidosService
      .create( createPartidoDto! )
      .then(( equipo ) => res.json( equipo ))
      .catch((error) => res.status(500).json({ error }));
  };

  update = (req: Request, res: Response) => {
    const [error, updatePartidosDto] = UpdatePartidosDto.update({
      ...req.body,
      id_partido: req.params.id_partido,
    });
    if (error) return res.status(400).json({ error });

    this.partidosService
      .update(updatePartidosDto!)
      .then((partidos) => res.json(partidos))
      .catch((error) => res.status(500).json({ error }));
  };

  delete = (req: Request, res: Response) => {
    const id_partido = req.params.id_partido;
 
      this.partidosService.delete(id_partido)
      .then((partidos) => res.json(partidos))
      .catch((error) => res.status(500).json({ error }));
  };


  findAll = (req: Request, res: Response) => {
    this.partidosService.findAll()
    .then( partidos => res.json(partidos) )
    .catch(error => res.status(500).json({error: "internal server"}));
};
}
