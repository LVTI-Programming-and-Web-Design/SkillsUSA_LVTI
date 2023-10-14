const express = require("express"); 
const fs = require("fs");

const app = express();
//app.set("view engine", "ejs"); 


     //fs.readFile(__dirname + "/index.html", "utf-8", (err, txt) =>{
     //   res.send(txt); 
    //})
    //or


app.use(express.static("index"));
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index/index.html"); 
})
 
app.listen(3000, () =>{
    console.log("server running through " + __dirname);
    console.log(__dirname); 
}); 
