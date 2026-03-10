import express from 'express';
import cors from 'cors';
const app = express()
app.use(express.json());
app.use(cors());
const port = 3000;
app.post('/login',(req,res)=>{
  console.log(req.body)
})
app.listen(port, ()=>{
  console.log(`Listening to port ${port}`)
})
