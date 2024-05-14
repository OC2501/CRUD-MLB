import { prisma } from "../../database/postgresql/database";
import { CreateJugadoresDto } from "../../domain/dtos/jugadores/create-jugadores.dto";
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
}