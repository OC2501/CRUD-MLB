import { prisma } from "../../database/postgresql/database";
import { CreateJugadorEquipoDto } from "../../domain/dtos/jugadorEquipo/create-jugadorEquipo.dto";
import { UpdateJugadorEquipoDto } from "../../domain/dtos/jugadorEquipo/update-jugadorEquipo.dto";
import { JugadorEquipoEntity } from "../../domain/entities/jugadorequipo.entity";

export class JugadorEquipoService{

    async create( createJugadorEquipoDto: CreateJugadorEquipoDto ): Promise<JugadorEquipoEntity>{
        const { } = CreateJugadorEquipoDto
        try {
            const newJugadorEquipo = await prisma.jugadorequipo.create( {
                data: {
                    ...createJugadorEquipoDto,
                }
            } );
            //if( !newEquipo ) throw Error;
    
            return newJugadorEquipo;
        } catch (error) {
            throw error;
        }
    }

    async update( updateJugadorEquipoDto: UpdateJugadorEquipoDto ): Promise<JugadorEquipoEntity>{

        try {
            const jugadorequipo = await prisma.jugadorequipo.update({
                where: {
                    id: updateJugadorEquipoDto.id,
                },
                data: {
                    ...updateJugadorEquipoDto
                }
            })
            return jugadorequipo;
        } catch (error) {
            throw error;
        }
    }

    async delete( id: string ): Promise<JugadorEquipoEntity>{
        try {
            const deleteJugadorEquipo = await prisma.jugadorequipo.delete({
                where: {
                    id: +id,
                },
            })
            if(!deleteJugadorEquipo) throw Error ('Jugador por equipo no encontrado');
            return deleteJugadorEquipo
        } catch (error) {
            throw error;
        }
    }

    async findAll(): Promise<JugadorEquipoEntity[]>{
        try {
            const newJugadorEquipo = await prisma.jugadorequipo.findMany( );
            //if( !newEquipo ) throw Error;
    
            return newJugadorEquipo;
        } catch (error) {
            throw error;
        }
    }
}