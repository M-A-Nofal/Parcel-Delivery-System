import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./connect";
import { getServerSession } from "next-auth";
import { compare } from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@mail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        let existingUser = {};
        if (credentials.userType === "biker") {
          existingUser = await prisma.biker.findUnique({
            where: { email: credentials?.email },
          });
        } else {
          existingUser = await prisma.sender.findUnique({
            where: { email: credentials?.email },
          });
        }
        if (!existingUser) {
          return null;
        }

        const checkPassword = await compare(
          credentials.password,
          existingUser.password
        );

        if (!checkPassword) {
          return null;
        }

        return {
          id: `${existingUser.id}`,
          userName: existingUser.userName,
          email: existingUser.email,
          role: existingUser.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.userName,
          role: user.role,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.user = token;
      }
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
