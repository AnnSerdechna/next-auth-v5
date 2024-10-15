import { Role } from '@prisma/client';
import { DefaultSession, DefaultUser } from 'next-auth';


type ExtendedUser = DefaultSession['user'] & {
  role: Role
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser
    
  }
}