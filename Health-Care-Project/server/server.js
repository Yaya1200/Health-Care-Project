import express from 'express';
import cors from 'cors';
import db from './db.js';

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.post('/login', async (req, res) => {
  try {
    const result = await database(req.body);

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user: result });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

async function database(loginData) {
  const { username, email, password } = loginData;

  const result = await db.query(
    `SELECT * FROM my_health_db 
     WHERE username = $1 AND email = $2 AND password = $3`,
    [username, email, password]
  );

  return result.rows;
}

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});