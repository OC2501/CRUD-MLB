export class UpdateEquipoDto{

    constructor(
        public id_equipo: number,
        public nombre: string,
        public ciudad: string
    ){}

    static update( body: {[key:string]:any} ):[string?, UpdateEquipoDto?]{

        const { id_equipo, nombre, ciudad } = body;
        if( isNaN( +id_equipo ) ) return ["Id tiene que ser un numero ", undefined];
        if( nombre ){
            if( nombre.length  < 2 ) return [" nombre no valido "];
        }

        if( ciudad ){
            if( ciudad.length  < 2 ) return [" ciudad no valida "];
        }


        return [undefined, new UpdateEquipoDto( +id_equipo, nombre, ciudad)];
    }

}