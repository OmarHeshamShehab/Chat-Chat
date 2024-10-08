import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// console.log({
//   clientId: process.env.GOOGLE_ID || "GOOGLE_ID not set",
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "GOOGLE_CLIENT_SECRET not set"
// });

    
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signin({ profile }) {
    try{
      
    }
    catch(error){
      
    };
  },
});
export {handler as GET, handler as POST}