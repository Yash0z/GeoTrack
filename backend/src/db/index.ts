import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../schema/schema';



const sql = neon("postgresql://GeoTrackDB_owner:CbA3VHtxW9rL@ep-super-meadow-a110jy7o.ap-southeast-1.aws.neon.tech/GeoTrackDB?sslmode=require");

const db = drizzle(sql,{schema});

export default db