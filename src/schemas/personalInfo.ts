import { z } from 'zod';

export const personalInfoSchema = z.object({
    fname: z.string().min(1, "First name must not be empty"),
    mname: z.string().optional(),
    lname: z.string().min(1, "First name must not be empty"),
    address: z.string().min(1, "Address must name be empty"),
    phone: z.string().min(1, 'Phone number must not be empty'),
    dob: z.date()
})


export type PersonalInfoSchema = z.infer<typeof personalInfoSchema>