import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "~/lib/db";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";

import type { DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user?: DefaultUser & {
      id: string;
    };
  }
}

declare module 'next-auth/jwt/types' {
  interface JWT {
    uid: string;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ token, user, trigger, session }) => {
      if (user) {
        token.uid = user.id;
      }
      if (trigger === 'update') {
        return { ...token , ...session.user }
      }
      return { ...token , ...user };
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
    error: "/api/auth/error",
  },
};

export default NextAuth(authOptions);
