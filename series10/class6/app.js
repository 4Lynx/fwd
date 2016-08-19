var form = $('form');
var textarea = $('textarea');

$('f)orm').on('submit', function() {
	event.preventDefault();

	var newTweetValue = textarea.val();

	var newTweet = $('.tweet').first().clone();

	newTweet.find('.tweet__time').text('Now');
	newTweet.find('.tweet__content').text(newTweetValue);

	$('.tweets').prepend(newTweet);
});