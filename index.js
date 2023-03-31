import express from "express";

const app = express();
const PORT = 6000;

app.get("/" , function (request,response){
  response.send("hello")
})

app.listen(PORT , ()=> console.log(`Port started in ${PORT}`))