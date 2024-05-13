import { Request, Response } from "express";

export class JugadorEquipoController{
    create = (req:Request,res:Response)=>{
        return res.json({message:"jugador por equipo create"});
            }

            update = (req:Request,res:Response)=>{
                return res.json({message:"jugador por equipo update"});
                
            }     
            
            delete = (req:Request,res:Response)=>{
                return res.json({message:"jugador por equipo delete"});
                
            }

            findAll = (req:Request,res:Response)=>{
                return res.json({message:"jugadores por equipos findAll"});
                
            }
}