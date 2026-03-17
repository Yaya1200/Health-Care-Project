import PG from "pg";

export default function Db(loginData) {
  const { username, email, password } = loginData;
  console.log("Username:", username);

  
  const db = new PG.Pool({
    connectionString: process.env.DB_POSTGRES,   
    ssl: { rejectUnauthorized: false }           
  });
  
   const result = db.query('SELECT * FROM my_health_db WHERE USERNAME = $1 AND EMAIL = $2 AND PASSWORD = $3', [username, email, password]);
   console.log(result)



  return loginData; 
}