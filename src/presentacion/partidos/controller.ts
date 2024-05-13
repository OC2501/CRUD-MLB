import { Request, Response } from "express";

export class PartidosController{
    create = (req:Request,res:Response)=>{
        return res.json({message:"partido create"});
            }

            update = (req:Request,res:Response)=>{
                return res.json({message:"partido update"});
                
            }     
            
            delete = (req:Request,res:Response)=>{
                return res.json({message:"partido delete"});
                
            }

            findAll = (req:Request,res:Response)=>{
                return res.json({message:"partidos findAll"});
                
            }
}