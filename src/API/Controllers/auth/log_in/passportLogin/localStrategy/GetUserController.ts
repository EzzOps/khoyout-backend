import { Request, Response } from "express";

//get user after logging if frontend want at any time
//get authonticated user
export const getUserHandler = async (req : Request , res : Response) => {
    if(req.user){
        return res.json({isLoggedIn : true , authonticated: true , user : req.user})
    }else{
        return res.json({isLoggedIn : false , authonticated: false , user : null})
    }   
}