console.log('The bot is starting');

var Twit = require('twit');

var config = require ('./config');

var T = new Twit(config);

var tweetArray = ['wow', 'hello', 'okay'];

var randomTweet = tweetArray[Math.floor(Math.random() * tweetArray.length)];

setInterval(tweetIt, 1000*60);

tweetIt();

function tweetIt() {
    
    var tweet = {
        status: randomTweet
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log("Something went wrong!");
        } else {
            console.log("It worked!");
        }
    }
}