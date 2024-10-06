import { Lucia } from "lucia";
import adapter from "@/lib/lucia/adapter";
import { cookies } from "next/headers";
import { cache } from "react";
import db from "@/backend/src/db";

// Existing Lucia setup
export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});

// User interface definition
export interface User {
  id: string;              
  name?: string | null;  
  email?: string | null;   
  username?: string | null; 
}

// Session interface
export interface Session {
  id: string;
  fresh: boolean;
}


// Validate request function
export const validateRequest = cache(async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  const result = await lucia.validateSession(sessionId);

  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    } else if (result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
  } catch (error) {
   
  }

  return result
});

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
  }
}
