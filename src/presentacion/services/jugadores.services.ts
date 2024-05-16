import { prisma } from "../../database/postgresql/database";
import { CreateJugadoresDto } from "../../domain/dtos/jugadores/create-jugadores.dto";
import { UpdateJugadoresDto } from "../../domain/dtos/jugadores/update-jugadores.dto";
import { JugadoresEntity } from "../../domain/entities/jugadores.entity";

export class JugadoresService{

    async create( createJugadorDto: CreateJugadoresDto ): Promise<JugadoresEntity>{
        try {
            const newJugador = await prisma.jugadores.create( {
                data: {
                    ...createJugadorDto,
                }
            } );
            //if( !newEquipo ) throw Error;
    
            return newJugador;
        } catch (error) {
            throw error;
        }
    }

    async update( updateJugadoresDto: UpdateJugadoresDto ): Promise<JugadoresEntity>{

        try {
            const jugadores = await prisma.jugadores.update({
                where: {
                    id_jugador: updateJugadoresDto.id_jugador,
                },
                data: {
                    ...updateJugadoresDto
                }
            })
            return jugadores
        } catch (error) {
            throw error;
        }
    }

    async delete( id_jugador: string ): Promise<JugadoresEntity>{
        try {
            const deleteJugador = await prisma.jugadores.delete({
                where: {
                    id_jugador: +id_jugador,
                },
            })
            if(!deleteJugador) throw Error ('Jugador no encontrado');
            return deleteJugador
        } catch (error) {
            throw error;
        }
    }

    
    async findAll(): Promise<JugadoresEntity[]>{
        try {
            const newJugadores = await prisma.jugadores.findMany( );
            //if( !newEquipo ) throw Error;
    
            return newJugadores;
        } catch (error) {
            throw error;
        }
    }


}