
import pg from "pg";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "./schema"
const pool = new pg.Pool({
   connectionString: process.env.DB_URL,
   connectionTimeoutMillis: 60000,
});
const db = drizzle(pool,{schema}) as NodePgDatabase<typeof schema>

export default db