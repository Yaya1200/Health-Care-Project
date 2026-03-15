import PG from "pg";

export default function Db(loginData) {
  const { username, email, password } = loginData;
  console.log("Username:", username);

  
  const db = new PG.Pool({
    connectionString: process.env.DB_POSTGRES,   
    ssl: { rejectUnauthorized: false }           
  });



  return loginData; 
}