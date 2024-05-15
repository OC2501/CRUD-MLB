import { prisma } from "../../database/postgresql/database";
import { CreatePartidosDto } from "../../domain/dtos/partidos/create-partidos.dto";
import { PartidosEntity } from "../../domain/entities/partidos.entity";



export class PartidosService{

    async create( createPartidosDto: CreatePartidosDto ): Promise<PartidosEntity>{
        try {
            const newPartido = await prisma.partidos.create( {
                data: {
                    ...createPartidosDto,
                }
            } );
            //if( !newEquipo ) throw Error;
    
            return newPartido;
        } catch (error) {
            throw error;
        }
    }
}