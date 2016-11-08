var express = require('express');
var app = express();
var PORT = 3000;
var middleware = require('./middleware');



//app.use(middleware.requiredAuthentication);
app.use(middleware.logger);

app.get('/about',middleware.requiredAuthentication,function(req, res){
    res.send("About us!");
});

app.use(express.static(__dirname+'/public'));




app.listen(3000, function(){
    console.log("Server is running on port "+PORT);
});