'use server';

import { RegisterSchema } from '@/schemas';
import * as z from 'zod';

type RegisterValuesProps = z.infer<typeof RegisterSchema>;

export const register = async (values: RegisterValuesProps) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid fields!' };
  };

  return { success: 'Email sent!' };
};