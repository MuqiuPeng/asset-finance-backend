import { z } from "zod";

export const applicationSchema = z.object({
    name: z.string().min(1, 'Name must not be empty'),
    status: z.enum([
        'Pending',
        'under Review',
        'Approved',
        'Rejected',
        'Needs More Info',
        'Canceled',
        'Completed'
    ]).default('Pending'),
    income: z.number().positive('Income must be a positive number'),
    expenses: z.number().nonnegative('Expenses must be 0 or more'),
    assets: z.number().nonnegative('Assets must be 0 or more'),
    liabilities: z.number().nonnegative('Liabilities must be 0 or more'),
});

export type ApplicationSchema = z.infer<typeof applicationSchema>;