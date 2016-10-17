var http = require("http");
var username = "anthonylee";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " pints in Javascript";
  console.log(message);
}

var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
  var body = "";
  response.on('data', function(chunk) {
    body += chunk;
  });
  response.on('end', function() {
    console.log(body);
  });
});

request.on("error", function(error) {
  console.error(error.message);
})
