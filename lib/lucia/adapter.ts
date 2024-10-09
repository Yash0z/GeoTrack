import db from "@/lib/db";
import { sessionTable, userTable } from "@/lib/models/schema";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);
export default adapter;
