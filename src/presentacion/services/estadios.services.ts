import { prisma } from "../../database/postgresql/database";
import { CreateEstadioDto } from "../../domain/dtos/estadios/create-estadios.dto";
import { UpdateEstadioDto } from "../../domain/dtos/estadios/update-estadios.dto";
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

    async update( updateEstadioDto: UpdateEstadioDto ): Promise<EstadiosEntity>{

        try {
            const estadios = await prisma.estadios.update({
                where: {
                    id_estadio: updateEstadioDto.id_estadio,
                },
                data: {
                    ...updateEstadioDto
                }
            })
            return estadios;
        } catch (error) {
            throw error;
        }
    }

    async delete( id_estadio: string ): Promise<EstadiosEntity>{
        try {
            const deleteEstadio = await prisma.estadios.delete({
                where: {
                    id_estadio: +id_estadio,
                },
            })
            if(!deleteEstadio) throw Error ('Estadio no encontrado');
            return deleteEstadio
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