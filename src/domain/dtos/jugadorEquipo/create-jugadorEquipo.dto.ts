export class CreateJugadorEquipoDto{

    constructor(
        public equipoId: number,
        public jugadorId: number,
    ){}

    static create( body: {[key:string]:any} ):[string?, CreateJugadorEquipoDto?]{

        const { equipoId,jugadorId } = body;
        if( !equipoId ) return ["Necesita el id del equipo", undefined];
        if( isNaN( +equipoId ) ) return ["El id del equipo debe ser un numero", undefined]
        
        if( !jugadorId ) return ["Necesita el resultado visitante", undefined];
        if( isNaN( +jugadorId ) ) return ["El resultado visitante debe ser un numero", undefined];
        


        return [undefined, new CreateJugadorEquipoDto(+equipoId, +jugadorId)];
        
    }
}
