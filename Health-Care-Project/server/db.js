import pg from "pg";

const { Pool } = pg;

const db = new Pool({
  connectionString: process.env.DB_POSTGRES,
  ssl: { rejectUnauthorized: false }
});

export default db;