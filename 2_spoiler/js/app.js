// create "Reveal Spoiler" button
const spoilerButton = $('<button>Reveal Spoiler</button>')
// append button to the page
$('.spoiler').append(spoilerButton);

// hide the spoiler on page load
const spoilerText = $('.spoiler span').hide();

/*
when the button is pressed:
 - show the spoiler text
 - hide the button
*/

spoilerButton.click( () => {
  spoilerText.show();
  spoilerButton.hide();
});
