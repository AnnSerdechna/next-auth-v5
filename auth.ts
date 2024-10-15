import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "@/auth.config";
import db from './lib/db';
import { getUserById } from './data/user';
import { Role } from '@prisma/client';

export const { 
  handlers, 
  auth, 
  signIn, 
  signOut 
} = NextAuth({
  callbacks: {
    async jwt({ token }) {
      console.log({ token });
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token
    },
    session({ session, token }) {
      console.log({session});
      
      if (session.user && token.sub) {
        session.user.id = token.sub
      }

      if (session.user && token.role) {
        session.user.role = token.role as Role
      }
      return session
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})