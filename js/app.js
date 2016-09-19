$(function(){
  $('#search-form').submit(function (max) {
    var counter=0;
    max.preventDefault();
    var search = $('#search-term').val();
    // console.log(search);
    var movieUrl = 'https://api.themoviedb.org/3/search/movie?api_key=' + 'd33d1596f209c36e9f46d525a5f9ba0a' + '&query=' + search;
    $('.results').html('');


    $.getJSON(movieUrl, function (movie) {
      console.log(movie.results);
      $.each(movie.results, function(i,v) {
        console.log(v);
        if (v.poster_path!=undefined && counter<20){

        // var template = '<li class="movie"><h3>' + v.title + '</h3></li>';
        var image = '<li class="movie"> <img src = "http://image.tmdb.org/t/p/w300/'+ v.poster_path + '" title="'+v.title+'"></li>';
        $('.results').append(image);
        counter++;
      }
      });
    });

  });
});
