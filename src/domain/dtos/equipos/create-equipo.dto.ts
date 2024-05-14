export class CreateEquipoDto{

    constructor(
        public nombre: string,
        public ciudad: string
    ){}

    static create( body: {[key:string]:any} ):[string?, CreateEquipoDto?]{

        const { nombre,ciudad } = body;
        if( !nombre ) return ["Necesita nombre", undefined];
        if( !ciudad ) return ["Necesita ciudad", undefined];

        return [undefined, new CreateEquipoDto(nombre,ciudad)];
    }

}