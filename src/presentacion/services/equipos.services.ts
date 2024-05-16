import { prisma } from "../../database/postgresql/database";
import { CreateEquipoDto } from "../../domain/dtos/equipos/create-equipo.dto";
import { EquiposEntity } from "../../domain/entities/equipos.entity";
import {UpdateEquipoDto} from "../../domain/dtos/equipos/update-equipo.dto"

export class EquiposService{

    async create( createEquiposDto: CreateEquipoDto ): Promise<EquiposEntity>{
        try {
            const newEquipo = await prisma.equipos.create( {
                data: {
                    ...createEquiposDto,
                }
            } );
            //if( !newEquipo ) throw Error;
    
            return newEquipo;
        } catch (error) {
            throw error;
        }
    }

        
    async update( updateEquipoDto: UpdateEquipoDto ): Promise<EquiposEntity>{

        try {
            const equipos = await prisma.equipos.update({
                where: {
                    id_equipo: updateEquipoDto.id_equipo,
                },
                data: {
                    ...updateEquipoDto
                }
            })
            return equipos
        } catch (error) {
            throw error;
        }
    }

    async delete( id_equipo: string ): Promise<EquiposEntity>{
        try {
            const deleteEquipo = await prisma.equipos.delete({
                where: {
                    id_equipo: +id_equipo,
                },
            })
            if(!deleteEquipo) throw Error ('Equipo no encontrado');
            return deleteEquipo
        } catch (error) {
            throw error;
        }
    }

    async findAll(): Promise<EquiposEntity[]>{
        try {
            const newEquipo = await prisma.equipos.findMany( );
            //if( !newEquipo ) throw Error;
    
            return newEquipo;
        } catch (error) {
            throw error;
        }
    }
}


