var database = [
	{
	username: "alex",
	password: "123"
	},
	{
	username: "Sally",
	password: "123"
	},
	{
	username: "Ingrid",
	password: "777"
	}

	];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "I'm so tired!"
	},
	{
		username: "Sally",
		timeline: "JS is cool!"
	},
	{
		username: "Michael",
		timeline: "Who wants pizza?"
	},


];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}
	


signIn(userNamePrompt, passwordPrompt);