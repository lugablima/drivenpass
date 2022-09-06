import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const db: Pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default db;
