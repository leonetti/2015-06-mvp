var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config')

// Config holds the API KEYS
var yelp = require("yelp").createClient(config);

app.use(bodyParser.json());
// Serves up assets
app.use(express.static('client'));


app.get('/location/:location', function (req, res) {
  // grabs the request location
  var location = req.params.location;

  // stores each get request from yelp in a response object
  var response = {};
  var mapRequests = function(term,businessArray){
    // adds each returned response from each get request into response
    response[term] = businessArray;

    // if all get requests finish then it will send the response object as a result
    if(response.restaurants&&response.club&&response.store&&response.bar){
      res.json(response);
    }
  }

  yelp.search({term: "restaurants", location: location, sort:2, limit:4,radius_filter:10000}, function(error, data) {
    if(error) res.end("Error");
    mapRequests("restaurants",data.businesses);
  });

  yelp.search({term: "club", location: location, sort:2, limit:2,radius_filter:10000}, function(error, data) {
    if(error) res.end("Error");
    mapRequests("club",data.businesses);
  });

  yelp.search({term: "store", location: location, sort:2, limit:2,radius_filter:10000}, function(error, data) {
    if(error) res.end("Error");
    mapRequests("store",data.businesses);
  });

  yelp.search({term: "bar", location: location, sort:2, limit:4,radius_filter:10000}, function(error, data) {
    if(error) res.end("Error");
    mapRequests("bar",data.businesses);
  });
});


// listening to port 3000
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});






