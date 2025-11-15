import z from "zod";

export const createInvitationSchema = z.object({
    userId: z.string(),
    templateId: z.string(),
    isActive: z.boolean(),
    type: z.enum(["FREE", "PREMIUM"]),
    brideName: z.string().nullable().optional(),
    brideFather: z.string().nullable().optional(),
    brideMother: z.string().nullable().optional(),
    brideIg: z.string().nullable().optional(),
    groomName: z.string().nullable().optional(),
    groomFather: z.string().nullable().optional(),
    groomMother: z.string().nullable().optional(),
    groomIg: z.string().nullable().optional(),
    hashtag: z.string().nullable().optional(),
    event1Name: z.string().nullable().optional(),
    event1Date: z.date().nullable().optional(),
    event1TimeStart: z.string().nullable().optional(),
    event1TimeEnd: z.string().nullable().optional(),
    event1Address: z.string().nullable().optional(),
    event2Name: z.string().nullable().optional(),
    event2Date: z.date().nullable().optional(),
    event2TimeStart: z.string().nullable().optional(),
    event2TimeEnd: z.string().nullable().optional(),
    event2Address: z.string().nullable().optional(),
    loveStory: z.string().nullable().optional(),
});
export type CreateInvitationDto = z.infer<typeof createInvitationSchema>;
