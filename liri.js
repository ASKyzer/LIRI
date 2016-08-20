// ### BONUS

// * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

// * Make sure you append each command you run to the `log.txt` file. 

// * Do not overwrite your file each time you run a command.
//////////////////////////////////////////////////////////////////////////



var fs = require("fs");				//NPM package for reading and writing files
var request = require("request");	//NPM package for making ajax-like calls
var twitter = require("twitter");	//NPM package for twitter
var spotify = require("spotify");	//NPM package for spotify

request('https://en.wikipedia.org/wiki/Kudos_(granola_bar)', function (error, response, data){

	if (!error && response.statusCode == 200){
		console.log(data);
	}
});

var userCommand = process.argv[3];

switch(userCommand){
	case 'my-tweets':
		fetchTwitter();
	break;

	case "spotify-this-song":
		fetchSpotify();
	break;

	case "movie-this":
		fetchOMDB();
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



function fetchSpotify(){
// * This will show the following information about the song in your terminal/bash window
// 	* Artist(s)
// 	* The song's name
// 	* A preview link of the song from Spotify
// 	* The album that the song is from

// * if no song is provided then your program will default to
// 	* "The Sign" by Ace of Base
}

function fetchOMDB(){
// * This will output the following information to your terminal/bash window:

// 	* Title of the movie.
// 	* Year the movie came out.
// 	* IMDB Rating of the movie.
// 	* Country where the movie was produced.
// 	* Language of the movie.
// 	* Plot of the movie.
// 	* Actors in the movie.
// 	* Rotten Tomatoes Rating.
// 	* Rotten Tomatoes URL.

// * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// 	* If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// 	* It's on Netflix!
}

function fetchRandom(){
// * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// 	* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// 	* Feel free to change the text in that document to test out the feature for other commands.
}