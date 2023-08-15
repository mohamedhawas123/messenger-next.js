import bcrypt from 'bcrypt'
import NextAuth from 'next-auth/next'

import  CredentialsProvider  from 'next-auth/providers/credentials'
import { GoogleProfile } from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/github'



import prisma from '@/app/libs/prismadb'
import { AuthOptions } from 'next-auth'


export const authOpthions: AuthOptions = {
    adapter:PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
            
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials:{
                email: {label: 'email' , type: 'text'},
                password:{label: 'password' , type: 'password'}
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password ) {
                    throw new Error("Invalid credentials")
                }
            },
        })
    ]

}