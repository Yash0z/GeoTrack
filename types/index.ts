import { z } from "zod";

// Assuming you have a types.ts or similar file
 

export const SignUpSchema = z.object({
	username: z.string().min(2).max(50),
	email: z.string().email(),
	password: z
		.string()
		.min(8, { message: "password must be atleast 8 characters long" })
		.max(20),
      role: z.enum(['User', 'Admin'], {
         required_error: "Role is required",
         invalid_type_error: "Role must be either 'user' or 'admin'",
     }), 
});


export const LoginSchema = z.object({
	username: z.string().min(2).max(50),
	password: z.string()
});
