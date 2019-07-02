// hide the spoiler on page load
const spoilerText = $('.spoiler span').hide();
const spoilerButton = $('.spoiler button');

// when the button is pressed - show the spoiler text and hide the button
spoilerButton.click( () => {
  spoilerText.show();
  spoilerButton.hide();
});
