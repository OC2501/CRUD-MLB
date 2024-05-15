export class CreatePartidosDto{

    constructor(
        public fecha: Date,
        public resultado_local: number,
        public resultado_visitante: number,
        public estadioId: number, 
        public equipoIdLocal: number,
        public equipoIdVisitante: number,
    ){}

    static create( body: {[key:string]:any} ):[string?, CreatePartidosDto?]{

        const { fecha, resultado_local, resultado_visitante, estadioId, equipoIdLocal,equipoIdVisitante } = body;
        if( !fecha ) return ["Necesita nombre", undefined];
        if( !resultado_local ) return ["Necesita posicion", undefined];
        if( !resultado_visitante ) return ["Necesita posicion", undefined];
        if( !estadioId ) return ["Necesita posicion", undefined];
        if( !equipoIdLocal ) return ["Necesita posicion", undefined];
        if( !equipoIdVisitante ) return ["Necesita posicion", undefined];


        return [undefined, new CreatePartidosDto(fecha, resultado_local, resultado_visitante, estadioId, equipoIdLocal,equipoIdVisitante)];
    }

}