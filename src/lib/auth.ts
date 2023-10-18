import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { prismaCLient } from "./prisma";
import GoogleProvider from "next-auth/providers/google";

export const authOpitions: AuthOptions = {
  adapter: PrismaAdapter(prismaCLient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
