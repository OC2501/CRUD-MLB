import { Request, Response } from "express";

export class JugadoresController{
    create = (req:Request,res:Response)=>{
        return res.json({message:"jugador create"});
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