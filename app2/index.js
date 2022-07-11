const express = require('express');
const path = require('path')




const app = express();
app.use(express.json());




app.use('/',(req,res)=>{
    const homePath = path.resolve(__dirname,'views','Cards.ejs');
    res.render(homePath)
})


const port = "5000";
const host = "0.0.0.0";
app.listen( port,host);
console.log(`Node Js Server is running on the host: ${host} on the port: ${port}`);




