const express = require("express");

const oneLinerJoke = require('one-liner-joke');

const app = express();
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));
// routes
app.get("/", function(req,res){
    res.render("index.ejs", {"joke": getCleanishJoke()});
});

app.get("/camel", function(req,res){
    
    res.render("camel.ejs", {"joke": getCleanishJoke()});
});
app.get("/kebab", function(req, res) {
    res.render("kebab.ejs", {"joke": getCleanishJoke()});
});
app.get("/snake", function(req, res){
    res.render("snake.ejs", {"joke": getCleanishJoke()});
});


try{
    app.listen(process.env.PORT, process.env.IP, function(){
        console.log("Running Express Server...");
    });
    
} catch(error){
    console.error(error);
    app.listen("8080", "0.0.0.0", function(){
    console.log("Express server is Running...");
    });
}

function getCleanishJoke(){
     return oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage', 'blonde', 'flirty', 'love', 'sex', 'men', 'women', 'rude', 'beauty', 'insults', 'life']
  }).body;
    
}