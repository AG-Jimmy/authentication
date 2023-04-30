import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import  CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "text", placeholder: "Enter yor email " },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
         const user={id:1,email:"AhmedGamal@gmail.com", password: "Ahmed" }

         if (credentials.email==user.email && credentials.password==user.password) 
             return user    
         else
               null 
        } 
      }),
  
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
     
  ],
  secret:process.env.JWT_SECRET

}

export default NextAuth(authOptions)