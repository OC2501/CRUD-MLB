import { Request, Response } from "express";

export class EquiposController{
    create = (req:Request,res:Response)=>{
        return res.json({message:"team create"});
            }

            update = (req:Request,res:Response)=>{
                return res.json({message:"team update"});
                
            }     
            
            delete = (req:Request,res:Response)=>{
                return res.json({message:"team delete"});
                
            }

            findAll = (req:Request,res:Response)=>{
                return res.json({message:"team findAll"});
                
            }
}