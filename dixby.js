//When creating this application remember:
//Use conditionals - if the user does __ then it will do ____


console.log("hey!")

//basic skeleton for how to structure the spotify API package using Node 

var spotify = require('spotify');
 
//brackets let js identify the index of an array

// the if conditional below states that if the second index in the command line is = to the string which is "spotify-this-song" then do everything listed in the function
 if (process.argv[2] === "spotify-this-song") {

//only use == and === in if/then statements not when declaring/designating variable

var songName = process.argv[3]
	console.log(songName)

	spotify.search({ type: 'track', query: songName }, function(err, data) {
    	if ( err ) {
        	console.log('Error occurred: ' + err);
        return;
    	}
 
    // Do something with 'data' 
    console.log(data)

	});
}
	

