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
  var dogPic = '<img src="/imgs/corgi.jpg"/>'
  album.forEach(function(albums) {
    var artistName = albums.artist
    var albumName = albums.title
    $('.albums').append(dogPic + `<li>${artistName} -- ${albumName}</li>` )
  });
 }

 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
 }

});
