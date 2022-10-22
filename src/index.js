import  express  from "express";
import dotenv from 'dotenv';
import connection from "./database/db.js";
import exempleRouter from './routers/exemple.router.js'

const app = express();
app.use(express.json());
dotenv.config();

app.use(exempleRouter)




app.listen(4000, ()=>{
  console.log('server listening on port 3000')
})


//teste
const query = connection.query('SELECT * FROM exemple;');
query.then(result => {
    console.log(result.rows);
});