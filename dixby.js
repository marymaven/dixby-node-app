console.log("hey!")

//basic skeleton for how to structure the spotify API package using Node 

var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dirty diana' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
    console.log(data)

});
