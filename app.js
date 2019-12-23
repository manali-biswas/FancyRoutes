var express=require('express');
var app=express();

app.use(express.static("public"));
app.set("view engine","ejs");


app.get("/",function(req,res){
	res.render("home");
});
app.post("/addreview",function(req,res){
	res.send('Review is on');
});
app.get("/about",function(req,res){
	res.render("about");
});
app.get("/destinations",function(req,res){
	res.render("destinations");
});
app.get("/gallery",function(req,res){
	res.render("gallery");
});
app.get("/contact",function(req,res){
	res.render("contact");
});

app.listen(3000,function(){
	console.log("Server is listening!!");
});