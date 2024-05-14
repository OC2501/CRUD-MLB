import { Request, Response } from "express";
import { JugadoresService } from "../services/jugadores.services";
import { CreateJugadoresDto } from "../../domain/dtos/jugadores/create-jugadores.dto";

export class JugadoresController{
    constructor(
        private readonly jugadoresService: JugadoresService,
    ){}

    create = ( req:Request, res: Response ) => {
        const [ error, createJugadoresDto ] = CreateJugadoresDto.create( req.body );
        if( error ) return res.status(400).json({error})
        
        this.jugadoresService.create( createJugadoresDto! )
        .then( jugadores => res.json(jugadores) )
        .catch(error => res.status(500).json({error}));
    }

            update = (req:Request,res:Response)=>{
                return res.json({message:"jugador update"});
                
            }     
            
            delete = (req:Request,res:Response)=>{
                return res.json({message:"jugador delete"});
                
            }

            findAll = (req:Request,res:Response)=>{
                return res.json({message:"jugadores findAll"});
                
            }
}