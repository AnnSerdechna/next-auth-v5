'use server';

import { LoginSchema } from '@/schemas';
import * as z from 'zod';

type LoginValuesProps = z.infer<typeof LoginSchema>;

export const login = async (values: LoginValuesProps) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid fields!'}
  }
  
  return { success: 'Email sent!'}
}