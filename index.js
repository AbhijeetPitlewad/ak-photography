const express = require('express');
const app = express();
const path = require('path');

const { weddingController, preWeddingController, babyShowerController, albumController } = require('./controllers/controllers');
const PORT = 9090;

// Static Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine 
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home");
})
app.get("/home", (req, res) => {
    res.render("home");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})


app.get("/wedding-photos", weddingController);
app.get("/pre-wedding-photos", preWeddingController);
app.get("/baby-shower-photos", babyShowerController);
app.get("/album", albumController);
// app.get("/makeup-shoot", weddingController );
// app.get("/model-photos", weddingController );

app.get("/*", (req, res)=>{
    res.redirect("/home")
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Server running on PORT: 9090");
    }

})