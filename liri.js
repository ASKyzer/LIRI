// ### BONUS
// * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.
// * Make sure you append each command you run to the `log.txt` file. 
// * Do not overwrite your file each time you run a command.
//////////////////////////////////////////////////////////////////////////



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
//This will show your last 20 tweets and when they were created at in your terminal/bash window.
}



function fetchSpotify(songName){
	//If a song was not typed it, default to the movie Mr. Nobody
	if (artName == null){
		songName = "The+Sign";
	}

	var requestURL = "https://api.spotify.com/v1/search?q=" + songName + "&type=track&limit=10" ;

	request(requestURL, function (error, response, data){

		//200 response means that the page has been found and a response was received.
		if (!error && response.statusCode == 200){
			console.log(data);
		}

		console.log("---------------------------------------------");
		console.log(JSON.parse(data));
		// console.log("The song's artist is: " + JSON.parse(data)["name"]);
		// console.log("The song's name is: " + JSON.parse(data)["Year"]);		
		// console.log("The song's URL is: " + JSON.parse(data)["imdbRating"]);
		// console.log("The song's album is: " + JSON.parse(data)["Country"]);									
	});

// * This will show the following information about the song in your terminal/bash window
// 	* Artist(s)
// 	* The song's name
// 	* A preview link of the song from Spotify
// 	* The album that the song is from

// * if no song is provided then your program will default to
// 	* "The Sign" by Ace of Base
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