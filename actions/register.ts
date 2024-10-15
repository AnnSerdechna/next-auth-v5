'use server';

import * as z from 'zod';
import bcrypt from 'bcrypt';

import { RegisterSchema } from '@/schemas';
import db from '@/lib/db';
import { getUserByEmail } from '@/data/user';

type RegisterValuesProps = z.infer<typeof RegisterSchema>;

export const register = async (values: RegisterValuesProps) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid fields!' };
  };

  const { email, name, password } = validateFields.data;
  const hashPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)  

  if (!!existingUser) {
    return { error: 'Email already in use!' };
  };

  await db.user.create({
    data: {
      name,
      email,
      password: hashPassword
    }
  });

  // TODO Send verification token email

  return { success: 'User created!' };
};