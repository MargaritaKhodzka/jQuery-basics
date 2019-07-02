const flashMessage = $('#flashMessage').hide();

$('#previewButton').click( () => {
  const inputTitle = $('#blogTitleInput').val();
  const inputContent = $('#blogContentInput').val();
  $('#blogTitlePreview').text(inputTitle);
  $('#blogContentPreview').html(inputContent);
  flashMessage.slideDown(1000).delay(3000).slideUp();
});
