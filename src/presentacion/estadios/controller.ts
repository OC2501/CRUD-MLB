import { EstadiosService } from "../services/estadios.services";
import { CreateEstadioDto } from "../../domain/dtos/estadios/create-estadios.dto";
import { Request, Response } from "express";

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
    return res.json({ message: "estadio update" });
  };

  delete = (req: Request, res: Response) => {
    return res.json({ message: "estadio delete" });
  };

  findAll = (req: Request, res: Response) => {
    this.estadiosService.findAll()
    .then( estadio => res.json(estadio) )
    .catch(error => res.status(500).json({error: "internal server"}));
  };
}
