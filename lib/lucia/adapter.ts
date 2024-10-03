import db from "@/backend/src/db";
import { sessionTable, userTable } from "@/backend/src/schema/schema";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";




const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);
export default adapter