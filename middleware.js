var middleware = {
    requiredAuthentication: function(req, res, next){
        console.log('private route hit');
        next();
    },
    logger: function(req, res, next){
        console.log("Reguest: " + new Date().toDateString()+" "+req.method +" "+ req.originalUrl);
        next();
    }
};

module.exports = middleware;