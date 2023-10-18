import NextAuth from "next-auth";
import { authOpitions } from "@/lib/auth";

const hendler = NextAuth(authOpitions);

export { hendler as GET, hendler as POST };
