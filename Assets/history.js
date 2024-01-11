// variables to target elements to list

var moviesEl = document.getElementById('inprogress');

function showMovies() {
    var movies = JSON.parse(localStorage.getItem('movies')) || [];

    for (var i = 0; i < movies.length; i++) {
        var movieEl = document.createElement('li');
       // movieEl.textContent = movies[i].title + ' - ' + movies[i].url;
        console.log(movies[i].title + ' - ' + movies[i].url);
        console.log('Description: ' + movies[i].description);

        //moviesEl.appendChild(movieEl);

    }
}

showMovies();