/*
when the button is pressed:
 - show the spoiler text
 - hide the button
*/

$('.spoiler').on('click', 'button', () => {
  spoilerText.show();
  spoilerButton.hide();
});

// create "Reveal Spoiler" button
const spoilerButton = $('<button>Reveal Spoiler</button>')
// append button to the page
$('.spoiler').append(spoilerButton);

// hide the spoiler on page load
const spoilerText = $('.spoiler span').hide();
