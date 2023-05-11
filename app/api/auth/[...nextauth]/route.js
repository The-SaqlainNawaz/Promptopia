import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    })
  ],
  async session({session}) {
  },
  async signIn({pro})

});
