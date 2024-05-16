export class UpdateJugadorEquipoDto{

    constructor(
        public id:number,
        public equipoId: number,
        public jugadorId: number,
    ){}

    static update( body: {[key:string]:any} ):[string?, UpdateJugadorEquipoDto?]{

        const { id, equipoId, jugadorId } = body;
        if(!id) return ["Id tiene que ser un numero ", undefined];
            if( isNaN( +id ) ) return ["Id tiene que ser un numero ", undefined];

        if( !equipoId ) return ["Necesita el id del equipo", undefined];
            if( isNaN( +equipoId ) ) return ["El id del equipo debe ser un numero", undefined];
            
        if( !jugadorId ) return ["Necesita el id del jugador", undefined];
            if( isNaN( +jugadorId ) ) return ["El id del jugador debe ser un numero", undefined];


        return [undefined, new UpdateJugadorEquipoDto( +id, +equipoId, +jugadorId )];
    }
}