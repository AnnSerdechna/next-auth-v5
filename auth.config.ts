import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from './schemas';
import { getUserByEmail } from './data/user';
import bcryptjs from 'bcryptjs';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;


          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const passwordsMatch = await bcryptjs.compare(
            password,
            user.password
          );

          console.log(passwordsMatch)
          if (passwordsMatch) return user;
        };

        return null;
      }
    })
  ],
} satisfies NextAuthConfig