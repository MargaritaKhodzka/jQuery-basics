const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

// $odd.css('backgroundColor', 'lightGrey');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

/*
check if checkbox is checked
if zero checkboxes are checked
  - prevent download
  - alert the user
else allow download
*/
$pdfs.on('click', e => {
  if ($(':checked').length === 0) {
    e.preventDefault();
    alert('Allow PDF downloads is not checked.');
  }
});

// make the code unobtrusive, make checkbox appear when JS is broken or unavailable
const $checkbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');
$('#links').append($checkbox);

// loop with each()
$('a').each( function() {
  // console.log($(this).attr('href'));
  const url = $(this).attr('href');
  $(this).parent().append(`(${url})`);
});
