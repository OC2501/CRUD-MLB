export class PartidosEntity{
    constructor(
        public id_partido: number,
        public fecha: Date,
        public resultado_local: number,
        public resultado_visitante: number,
        public estadioId: number, 
        public equipoIdLocal: number,
        public equipoIdVisitante: number,
    ){}
}