import { NextFunction, Request, Response } from "express";
import * as invitationService from "./invitation.service.js";

export const getMyInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const invitations = await invitationService.findByUserId(req.user!.id);

        res.status(200).json({
            success: true,
            data: invitations,
        });
    } catch (err: any) {
        next(err);
    }
};

export const editInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedInvitation = await invitationService.editInvitation(req.params.id, req.body);

        res.status(200).json({
            success: true,
            data: updatedInvitation,
        });
    } catch (err: any) {
        next(err);
    }
};
