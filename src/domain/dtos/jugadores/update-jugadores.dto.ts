export class UpdateJugadoresDto{

    constructor(
        public id_jugador: number,
        public nombre: string,
        public posicion: string
    ){}

    static update( body: {[key:string]:any} ):[string?, UpdateJugadoresDto?]{

        const { id_jugador,nombre,posicion } = body;
        if( isNaN( +id_jugador ) ) return ["Id tiene que ser un numero ", undefined];
        if( nombre ){
            if( nombre.length  < 2 ) return [" nombre no valido "];
        }

        if( posicion ){
            if( posicion.length  < 2 ) return [" posicion no valida "];
        }


        return [undefined, new UpdateJugadoresDto( +id_jugador, nombre, posicion)];
    }

}