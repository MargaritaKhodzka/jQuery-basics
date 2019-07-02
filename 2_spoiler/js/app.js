/*
when the button is pressed:
 - show the spoiler text
 - hide the button
*/

$('.spoiler').on('click', 'button', function(){
  $(this).prev().show();
  $(this).hide();
});

// create "Reveal Spoiler" button
const spoilerButton = $('<button>Reveal Spoiler</button>')
// append button to the page
$('.spoiler').append(spoilerButton);

// hide the spoiler on page load
$('.spoiler span').hide();
