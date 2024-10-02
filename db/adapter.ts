import { sessionTable, userTable } from "@/db/schema";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import db from ".";



const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);
export default adapter