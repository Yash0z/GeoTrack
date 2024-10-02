"use server";

import db from "@/db";
import { lucia } from "@/lib/auth";
import { userTable } from "@/db/schema";
import { SignUpSchema ,LoginSchema} from "@/types";
import { generateId } from "lucia";
import { cookies } from "next/headers";
import { z } from "zod";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";

export interface SignUpResponse {
   success?: boolean;  
   error?: string;     
   role?: string;     
}

export interface SignInResponse {
   success?: string;   
   error?: string;     
   role?: string;      
}




export const SignUp = async (values: z.infer<typeof SignUpSchema>):Promise<SignUpResponse> => {
   // Hash the password using bcrypt
   const saltRounds = 10;
   const hashedPassword = await bcrypt.hash(values.password, saltRounds);

   const userID = generateId(10);

   try {
    const newUser =  await db.insert(userTable).values({
         id: userID,
         username: values.username,
         hashedPassword,
         role:values.role 
      })
      .returning({
         id: userTable.id,
         username: userTable.username,
         role:userTable.role
      });

      
      const session = await lucia.createSession(userID, {
         expiresIn: 60 * 60 * 24 * 30, // 30 days
      });

      //  session cookie
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
      const createdUser = newUser[0];
      return {
         success: true,
         role:createdUser.role
      };
   } catch (error: any) {
      return {
         error: error?.message,
      };
   }
};


export const SignIn = async (values: z.infer<typeof LoginSchema>) => {
   // Find the user by their username in the database
   const existingUser = await db.query.userTable.findFirst({
      where: (table) => eq(table.username, values.username),
   });

   if (!existingUser) {
      return {
         error: "User not found",
      };
   }
   if (!existingUser.hashedPassword) {
      return {
         error: "Password hash is missing",
      };
   }
   


   // Compare the password provided by the user with the stored hashed password
   const isValidPassword = await bcrypt.compare(values.password, existingUser.hashedPassword);
   console.log(isValidPassword)

   if (!isValidPassword) {
      return {
         error: "Invalid Credentials",
      };
   }
    
   try {
      // session for the user
      const session = await lucia.createSession(existingUser.id, {
         expiresIn: 60 * 60 * 24 * 30, // 30 days
      });

      // Set session cookie
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

      return {
         success: "log in successful",
         role: existingUser.role
      };
   } catch (error: any) {
      return {
         error: error?.message,
      };
   }
};
