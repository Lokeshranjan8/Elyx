import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';

const app = express();
app.use(cors({
  origin: "*", // ⚠️ Allow all origins — only for testing
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
const PORT = process.env.PORT || 3000;



app.use('/auth', authRouter);

app.get('/',(req,res)=>{
    res.send('Hello World');
    console.log('Server is running');

})

app.listen(PORT,'0.0.0.0', ()=>{
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

export default app;