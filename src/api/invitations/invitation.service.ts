import { CreateInvitationDto, createInvitationSchema } from "./invitation.validation.js";
import * as invitationRepository from "../invitations/invitation.repository.js";
import { ResponseError } from "../../utils/error.js";

export const editInvitation = async (id: string, invitationData: CreateInvitationDto): Promise<CreateInvitationDto> => {
    const invitationExist = invitationRepository.findById(id);
    if (!invitationExist) {
        throw new ResponseError(404, "Invitation not found");
    }

    const invitationParsedData = createInvitationSchema.parse(invitationData);
    const updatedInvitation = await invitationRepository.update(id, invitationParsedData);
    return updatedInvitation;
};
// edit invitation

// Mengaktifkan invitation (ketika ngeklik free slot, otomatis )

export const findByUserId = async (userId: string): Promise<CreateInvitationDto[]> => {
    const invitations = await invitationRepository.findByUserId(userId);
    return invitations;
};
