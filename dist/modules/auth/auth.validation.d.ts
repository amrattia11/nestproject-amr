import z from 'zod';
export declare const signupValidation: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, z.core.$strict>;
