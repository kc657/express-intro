console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $.ajax({
   method: 'GET',
   url: 'http://localhost:3000/albums',
   success: handleSuccess,
   error: handleError
 });

 function handleSuccess(json) {
  var album = json;
  album.forEach(function(albums) {
    var artistName = albums.artist
    var albumName = albums.title
    $('.albums').append(`<li>${artistName} -- ${albumName}`)
  });
 }

 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
 }

});
