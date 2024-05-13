import { Request, Response } from "express";

export class EstadiosController{
    create = (req:Request,res:Response)=>{
        return res.json({message:"estadio create"});
            }

            update = (req:Request,res:Response)=>{
                return res.json({message:"estadio update"});
                
            }     
            
            delete = (req:Request,res:Response)=>{
                return res.json({message:"estadio delete"});
                
            }

            findAll = (req:Request,res:Response)=>{
                return res.json({message:"estadio findAll"});
                
            }
}