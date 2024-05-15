import { Request, Response } from "express";
import { CreatePartidosDto } from "../../domain/dtos/partidos/create-partidos.dto";
import { PartidosService } from "../services/partidos.services";

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
    return res.json({ message: "partido update" });
  };

  delete = (req: Request, res: Response) => {
    return res.json({ message: "partido delete" });
  };

  findAll = (req: Request, res: Response) => {
    return res.json({ message: "partidos findAll" });
  };
}
