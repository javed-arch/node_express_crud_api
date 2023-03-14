import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
app.use(express.urlencoded({ extended:true}));
app.use(cors());
app.use(bodyParser({ extended: true}));
dotenv.config();

app.use('/users', userRoutes);

app.get('/', (req, res) => {
   res.status(200).json("All Ok")
})

app.listen(process.env.PORT,() => {
    console.log(
        `Server Running on ${process.env.PORT}`
      );
})

