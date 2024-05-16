import { Request, Response } from "express";
import { EquiposService } from "../services/equipos.services";
import { CreateEquipoDto } from "../../domain/dtos/equipos/create-equipo.dto";
import { UpdateEquipoDto } from "../../domain/dtos/equipos/update-equipo.dto";
export class EquiposController {
  constructor(private readonly equiposService: EquiposService) {}

  create = (req: Request, res: Response) => {
    const [error, createEquipoDto] = CreateEquipoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    this.equiposService
      .create(createEquipoDto!)
      .then((equipos) => res.json(equipos))
      .catch((error) => res.status(500).json({ error }));
  };

  update = (req: Request, res: Response) => {
    const [error, updateEquipoDto] = UpdateEquipoDto.update({
      ...req.body,
      id_equipo: req.params.id_equipo,
    });
    if (error) return res.status(400).json({ error });

    this.equiposService
      .update(updateEquipoDto!)
      .then((equipos) => res.json(equipos))
      .catch((error) => res.status(500).json({ error }));
  };

  delete = (req: Request, res: Response) => {
    const id_equipo = req.params.id_equipo;
 

      this.equiposService.delete(id_equipo)
      .then((equipos) => res.json(equipos))
      .catch((error) => res.status(500).json({ error }));
  };

  findAll = (req: Request, res: Response) => {
    this.equiposService.findAll()
    .then( equipos => res.json(equipos) )
    .catch(error => res.status(500).json({error: "internal server"}));
  };
}
