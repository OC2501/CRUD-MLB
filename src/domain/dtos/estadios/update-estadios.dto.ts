export class UpdateEstadioDto{

    constructor(
        public id_estadio: number,
        public nombre: string,
        public ubicacion: string
    ){}

    static update( body: {[key:string]:any} ):[string?, UpdateEstadioDto?]{

        const { id_estadio, nombre, ubicacion } = body;
        if( isNaN( +id_estadio ) ) return ["Id tiene que ser un numero ", undefined];
        if( nombre ){
            if( nombre.length  < 2 ) return [" nombre no valido "];
        }

        if( ubicacion ){
            if( ubicacion.length  < 2 ) return [" ciudad no valida "];
        }


        return [undefined, new UpdateEstadioDto( +id_estadio, nombre, ubicacion)];
    }

}