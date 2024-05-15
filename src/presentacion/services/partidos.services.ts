import { prisma } from "../../database/postgresql/database";
import { CreatePartidosDto } from "../../domain/dtos/partidos/create-partidos.dto";
import { PartidosEntity } from "../../domain/entities/partidos.entity";

export class PartidosService {
  async create( createPartidosDto: CreatePartidosDto): Promise<PartidosEntity> {
    const { fecha } = createPartidosDto
    try {
      const newPartido = await prisma.partidos.create({
        
        data: {
          ...createPartidosDto,
          fecha: new Date(fecha)
        },
      });
      if (!newPartido) throw new Error("No se creo");

      return newPartido;
    } catch (error) {
      throw error;
    }
  }
}
