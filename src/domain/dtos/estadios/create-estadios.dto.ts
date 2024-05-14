export class CreateEstadioDto{

    constructor(
        public nombre: string,
        public ubicacion: string
    ){}

    static create( body: {[key:string]:any} ):[string?, CreateEstadioDto?]{

        const { nombre,ubicacion } = body;
        if( !nombre ) return ["Necesita nombre", undefined];
        if( !ubicacion ) return ["Necesita ubicacion", undefined];

        return [undefined, new CreateEstadioDto(nombre,ubicacion)];
    }

}