import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email isn\'t valid!'
  }),
  password: z.string().min(1, {
    message: 'Password is required!'
  })
});

export const RegisterSchema = z.object({
  username: z.string({
    message: 'Username is required!'
  }),
  email: z.string().email({
    message: 'Email isn\'t valid!'
  }),
  password: z.string().min(1, {
    message: 'Password is required!'
  })
});