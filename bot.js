console.log('The bot is starting');

var Twit = require('twit');

var config = require ('./config');

var T = new Twit(config);

var tweetArray = ['Your self worth is not determined by your employment status.', 'No feedback does not equal negative feedback.', 'You\'re a person, not a project.', 'Your boss\'s opinions are not an indication of your value.', 'No one expects you to be perfect.', 'You are worth more than what you did or didn\'t accomplish today.', 'You have the right to ask for what you want.', 'It\'s okay to change your mind.', 'You don\'t have to be an expert to have a valid opinion.', 'You deserve to be treated with dignity and respect.', 'Your value is not determined by your productivity.', 'You don\'t have to be perfect.', 'You are not responsible for the behavior of others.', 'It\'s okay to say "I don\'t know."', 'It\'s okay if you didn\'t get everything done on your to-do list today. You did your best.', 'You don\'t have to get everything done right now. Maybe it\'s time to take a break? You can try again later.', 'It\'s okay if that thing didn\'t work out. You tried your best.', 'It\'s okay to take ownership of your schedule. You don\'t owe everyone your time.', 'You have the right to say no.', 'You don\'t have to be the best to be good.', 'You have the right to be angry, even if it\'s at a person you respect.', 'It\'s okay to feel afraid.', 'You have played a huge role in your many own successes.', 'Being wrong about something doesn\'t make you a fraud.', 'Nobody belongs here more than you.', 'It takes courage to be imperfect.', 'It\'s okay to feel confident while also acknowledging you have a lot to learn.']

setInterval(tweetIt, 1000*20);

tweetIt();

function tweetIt() {
    
    var randomTweet = tweetArray[Math.floor(Math.random() * tweetArray.length)];
    
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