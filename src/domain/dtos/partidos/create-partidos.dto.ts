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
        let newDate = fecha ;
        
        if( !fecha ) return ["Necesita fecha del partido", undefined];
        if( fecha ){
            newDate = new Date( fecha );
            if( newDate.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }
        
        if( !resultado_local ) return ["Necesita el resultado del local", undefined];
        if( isNaN( +resultado_local ) ) return ["El resultado local debe ser un numero", undefined]
        
        if( !resultado_visitante ) return ["Necesita el resultado visitante", undefined];
        if( isNaN( +resultado_visitante ) ) return ["El resultado visitante debe ser un numero", undefined];
        
        if( !estadioId ) return ["Necesita posicion", undefined];
        if( isNaN( +estadioId ) ) return ["El id estadio debe ser un numero", undefined];

        if( !equipoIdLocal ) return ["Necesita posicion", undefined];
        if( isNaN( +equipoIdLocal ) ) return ["El id equipo local debe ser un numero", undefined];

        if( !equipoIdVisitante ) return ["Necesita posicion", undefined];
        if( isNaN( +equipoIdVisitante ) ) return ["El id equipo visitante debe ser un numero", undefined];


        return [undefined, new CreatePartidosDto(fecha, +resultado_local, +resultado_visitante, +estadioId, +equipoIdLocal, +equipoIdVisitante)];
    }

}