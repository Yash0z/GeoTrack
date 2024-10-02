import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config(); 

export default defineConfig({
  schema: "./db/schema.ts",
  dialect: 'postgresql', 
  dbCredentials: {
    url: process.env.DB_URL!,
  },
  verbose: true,
  strict: true,
});
 