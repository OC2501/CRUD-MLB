export class CreateJugadoresDto{

    constructor(
        public nombre: string,
        public posicion: string
    ){}

    static create( body: {[key:string]:any} ):[string?, CreateJugadoresDto?]{

        const { nombre,posicion } = body;
        if( !nombre ) return ["Necesita nombre", undefined];
        if( !posicion ) return ["Necesita posicion", undefined];

        return [undefined, new CreateJugadoresDto(nombre,posicion)];
    }

}