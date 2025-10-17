import app from "./src/presentation/app.js";

import dotenv from "dotenv"

dotenv.config();


app.listen(process.env.PORT, ()=>{
    console.log(`server runing in port :${process.env.PORT}`)
})