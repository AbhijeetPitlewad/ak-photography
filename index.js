const express = require('express');
const app = express();
const path = require('path');
const PORT = 9090;
 
// Static Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine 
app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    res.render("home");
})

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server running on PORT: 9090");
    }
    
})