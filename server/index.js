console.log("Implement servermu disini yak 😝!");

const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../public')));

app.get("/",(req, res) => {
    const addrPath= path.join(__dirname, '../public/index.html');
    console.log({addrPath})
    res.sendFile(addrPath);
})

app.get("/cars",(req,res)=>{
    const carsPath = path.join(__dirname, '../public/carlist.html')
    console.log({carsPath})
    res.sendFile(carsPath)
})
    
app.listen(port, () => {
    console.log(`this app is listening on port ${port}`)
  
  });