// GRAB THE PACKAGES/VARIABLES WE NEED // ================================================== 
var express = require('express'); 
var app = express(); 
var ig = require('instagram-node').instagram(); 

// CONFIGURE THE APP // ================================================== 
// tell node where to look for site resources 
app.use(express.static(__dirname + '/public')); 

// set the view engine to ejs 
app.set('view engine', 'ejs'); 

// configure instagram app with your access token 
//
ig.use({
access_token: '1942890441.1677ed0.5c151a2d495744f68f8a1f0963e172bf',
});

//SET THE ROUTES // =================================================== 
// home page route - our profile's images 
app.get('/', function(req, res) { 

// use the instagram package to get our profile's media 
ig.user_self_media_recent(function(err, media, pagination, remaining, limit) {
// render the home page and pass in our profile's images 
res.render('pages/index',{ grams: media}); 
}); 
});


// START THE SERVER // ================================================== 
app.listen(8080); console.log('App started! Look at http://localhost:8080'); 
