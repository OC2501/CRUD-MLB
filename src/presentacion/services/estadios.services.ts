import { prisma } from "../../database/postgresql/database";
import { CreateEstadioDto } from "../../domain/dtos/estadios/create-estadios.dto";
import { EstadiosEntity } from "../../domain/entities/estadios.entity";

export class EstadiosService{

    async create( createEstadiosDto: CreateEstadioDto ): Promise<EstadiosEntity>{
        try {
            const newEstadio = await prisma.estadios.create( {
                data: {
                    ...createEstadiosDto,
                }
            } );
            //if( !newEquipo ) throw Error;
    
            return newEstadio;
        } catch (error) {
            throw error;
        }
    }

    async findAll(): Promise<EstadiosEntity[]>{
        try {
            const newEstadio = await prisma.estadios.findMany( );
            //if( !newEquipo ) throw Error;
    
            return newEstadio;
        } catch (error) {
            throw error;
        }
    }
}