// ### BONUS
// * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.
// * Make sure you append each command you run to the `log.txt` file. 
// * Do not overwrite your file each time you run a command.
//////////////////////////////////////////////////////////////////////////


var keys = require("./keys.js");

var fs = require("fs");				//NPM package for reading and writing files
var request = require("request");	//NPM package for making ajax-like calls
var twitter = require("twitter");	//NPM package for twitter
var spotify = require("spotify");	//NPM package for spotify

var userCommand = process.argv[2];
var artName = process.argv[3];

switch(userCommand){
	case 'my-tweets':
		fetchTwitter();
	break;

	case "spotify-this-song":
		fetchSpotify(artName);
	break;

	case "movie-this":
		fetchOMDB(artName);
	break;

	case "do-what-it-says":
		fetchRandom();
	break;

	default:
	break;
}


function fetchTwitter(){

	//From twitter's NPM documentation, grab the most recent tweets
	var params = {screen_name: 'nodejs'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			console.log(tweets);




		}
	});
}


function fetchSpotify(songName){
	//If a song was not typed it, default to the movie Mr. Nobody
	if (artName == null){
		songName = "The Sign";
	}

	//Get data from spotify API based on the query term (song name) typed in by the suer
	spotify.search({ type: 'track', query: songName}, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }

	    var matchedTracks = [];
	    var dataItems = data.tracks.items;

	    if (songName == "The Sign"){
			console.log("Track: " + dataItems[7].name);	
			console.log("Artist: " + dataItems[7].artists[0].name);
			console.log("Album" + dataItems[7].album.name);
			console.log("Spotify link: " + dataItems[7].external_urls.spotify);
		}
		else {
			matchedTracks = [];

		    for (var i=0; i<20; i++){
		    	if (data.tracks.items[i].name == songName){
		    		matchedTracks.push(i);
		    	}
		    }

		    console.log(matchedTracks.length + " tracks found that match your query.")
    		console.log("Track: " + dataItems[matchedTracks[0]].name);	
			console.log("Artist: " + dataItems[matchedTracks[0]].artists[0].name);
			console.log("Album: " + dataItems[matchedTracks[0]].album.name);
			console.log("Spotify link: " + dataItems[matchedTracks[0]].external_urls.spotify);	
		}
	});
}

function fetchOMDB(movieName){
	//If a movie was not typed it, default to the movie Mr. Nobody
	if (artName == null){
		movieName = "Mr. Nobody";
	}

	var requestURL = "http://www.omdbapi.com/?t=" + movieName + "&tomatoes=true&y=&plot=short&r=json";

	request(requestURL, function (error, response, data){

		//200 response means that the page has been found and a response was received.
		if (!error && response.statusCode == 200){
			console.log(data);
		}
		console.log("---------------------------------------------");
		console.log("The movie's title is: " + JSON.parse(data)["Title"]);
		console.log("The movie's release year is: " + JSON.parse(data)["Year"]);		
		console.log("The movie's rating is: " + JSON.parse(data)["imdbRating"]);
		console.log("The movie's was produced in: " + JSON.parse(data)["Country"]);
		console.log("The movie's language is: " + JSON.parse(data)["Language"]);
		console.log("The movie's plot: " + JSON.parse(data)["Plot"]);
		console.log("The movie's actors: " + JSON.parse(data)["Actors"]);
		console.log("The movie's Rotten Tomatoes Rating: " + JSON.parse(data)["tomatoRating"]);
		console.log("The movie's Rotten Tomatoes URL: " + JSON.parse(data)["tomatoURL"]);									
	});
}

function fetchRandom(){
// * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// 	* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// 	* Feel free to change the text in that document to test out the feature for other commands.
}