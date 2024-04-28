import express from 'express';
import colors from 'colors';
import dotenv from "dotenv";
import morgan from  'morgan';
import  { connectDB } from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import carRoute from "./routes/CarRoute.js";
import cors from "cors";
import { SlPaperPlane } from 'react-icons/sl';

//configure env
dotenv.config();

//databse config
connectDB();



//rest object 
const app = express()

const __dirname = path.resolve();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
 app.use("/api/v1/auth", authRoute);
 app.use("/api/v1/sell",carRoute)
 
//rest api
app.get("/",(req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'client','dist','index.html'))
});

//port
const PORT =  process.env.PORT || 5000;

//run listen
app.listen(PORT,() =>{
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
    .white
);
});