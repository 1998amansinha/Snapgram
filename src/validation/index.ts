import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(4, {message: 'Invalid Name'}),
    username: z.string().min(2,{message: 'Inavlid UserName'}),
    email: z.string().email(),
    password: z.string().min(8,{message: "Password must be 8 characters"})
})

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8,{message: "Invalid Username or Password"})
})