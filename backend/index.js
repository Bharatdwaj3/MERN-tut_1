import { PORT } from "./config.js";
import express from "express";

const app = express();

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send()
});

app.listen(PORT,()=>{
    console.log(`App is listening to port: ${PORT}`)
})