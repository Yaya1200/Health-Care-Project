import PG from "pg";
export default function Db(loginData){
  const {username, email, password} = loginData
  console.log(username);

  const db = PG.Pool({
    connectionString: process.env.DB_POSTGRES
    ,ssl:{rejectUnautorized:false}
  })
  db.connect();

return (loginData)
}