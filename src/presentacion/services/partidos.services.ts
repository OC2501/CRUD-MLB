import { prisma } from "../../database/postgresql/database";
import { CreatePartidosDto } from "../../domain/dtos/partidos/create-partidos.dto";
import { UpdatePartidosDto } from "../../domain/dtos/partidos/update-partidos.dto";
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

  async update( updatePartidosDto: UpdatePartidosDto ): Promise<PartidosEntity>{
    const { fecha } = updatePartidosDto;
    try {
        const partidos = await prisma.partidos.update({
            where: {
                id_partido: updatePartidosDto.id_partido,
            },
            data: {
                ...updatePartidosDto,
                fecha: new Date(fecha)
            }
        })
        return partidos;
    } catch (error) {
        throw error;
    }
}

async delete( id_partido: string ): Promise<PartidosEntity>{
  try {
      const deletePartido = await prisma.partidos.delete({
          where: {
              id_partido: +id_partido,
          },
      })
      if(!deletePartido) throw Error ('Partido no encontrado');
      return deletePartido
  } catch (error) {
      throw error;
  }
}

  async findAll(): Promise<PartidosEntity[]>{
    try {
        const newPartidos = await prisma.partidos.findMany( );
        //if( !newEquipo ) throw Error;

        return newPartidos;
    } catch (error) {
        throw error;
    }
}


}
