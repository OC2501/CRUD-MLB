import { EstadiosService } from "../services/estadios.services";
import { CreateEstadioDto } from "../../domain/dtos/estadios/create-estadios.dto";
import { Request, Response } from "express";
import { UpdateEstadioDto } from "../../domain/dtos/estadios/update-estadios.dto";

export class EstadiosController {
  constructor(private readonly estadiosService: EstadiosService) {}

  create = (req: Request, res: Response) => {
    const [error, createEstadioDto] = CreateEstadioDto.create(req.body);
    if (error) return res.status(400).json({ error });

    this.estadiosService
      .create(createEstadioDto!)
      .then((estadios) => res.json(estadios))
      .catch((error) => res.status(500).json({ error }));
  };

  update = (req: Request, res: Response) => {
    const [error, updateEstadiosDto] = UpdateEstadioDto.update({
      ...req.body,
      id_estadio: req.params.id_estadio,
    });
    if (error) return res.status(400).json({ error });

    this.estadiosService
      .update(updateEstadiosDto!)
      .then((estadios) => res.json(estadios))
      .catch((error) => res.status(500).json({ error }));
  };

  delete = (req: Request, res: Response) => {
    const id_estadio = req.params.id_estadio;
 

      this.estadiosService.delete(id_estadio)
      .then((estadios) => res.json(estadios))
      .catch((error) => res.status(500).json({ error }));
  };

  findAll = (req: Request, res: Response) => {
    this.estadiosService.findAll()
    .then( estadio => res.json(estadio) )
    .catch(error => res.status(500).json({error: "internal server"}));
  };
}
