import { Request, Response } from "express";
import { UserBody } from "../../types/auth";
import { updateUser } from "../../Models/UserModel";
import { ErrorCode , ResStatus } from "../../Exceptions/main";
import { errorResponseTemplate } from "../../../Services/responses/ErrorTemplate";
import { BadRequestException } from "../../Exceptions/badRequest";
import { Messages } from "../../../Services/responses/Messages";

export const updateUserData = async (req : Request , res : Response) => {
    const user = req?.user as UserBody
    const userUpdated = await updateUser({id : user?.id} , req.body)
    if(!userUpdated){
        return res.status(ResStatus.BAD_REQUEST).json(errorResponseTemplate(
            new BadRequestException(Messages.USER_NOT_FOUND 
                , ErrorCode.USER_NOT_FOUND)
        ))  
    }
    return res.status(ResStatus.OK).json({
        message : Messages.USER_UPDATED,
        isUserDataUpdated : true
    })
}