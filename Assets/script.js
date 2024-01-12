/*functioning search bar that stores*/




var userInput = document.querySelectorAll('.click');

userInput.forEach(function(element) {
    element.addEventListener("click", function(event) {
        console.log(event.currentTarget.dataset.value);
        getMovies(event.currentTarget.dataset.value);
    });
    
});

function getMovies(data) {
    var url = 'https://moviesminidatabase.p.rapidapi.com/movie/' + data + '/';
    console.log(url);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8592e8a227mshe09ff1caa09d9b2p15d679jsnde7082cd65f7',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    fetch(url, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data) 
        randomMovies(data);      
    }); 


}

function randomMovies(data) {
    for (i = 0; i < 2; i++) {
        var randomMovies = Math.floor(Math.random() * 50);

        console.log(data.results[randomMovies].title);
        youTubeApi(data.results[randomMovies].title);

    }

}


function youTubeApi(data) {
    var searchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + data + '+trailer&type=video&key=AIzaSyAN78WM-3uf7m4lndC86PtmFKgYqW_F9S4'
    console.log(searchUrl)
    fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Logs the data to the console

        // Example: Access specific information
        
        var videoTitle = data.items[0].snippet.title;
        
        console.log('Title:', videoTitle);

        console.log('Video Id: ', data.items[0].id.videoId);
        // url creation
        console.log('https://www.youtube.com/watch?v=' + data.items[0].id.videoId);

        storeHistory(data);
        
    })
}

function storeHistory(data) {
    var movieData = {
        title: data.items[0].snippet.title,
        url: 'https://www.youtube.com/watch?v=' + data.items[0].id.videoId,
        description: data.items[0].snippet.description,
    };

    var movies = JSON.parse(localStorage.getItem('movies')) || [];

    movies.push(movieData);

    localStorage.setItem('movies', JSON.stringify(movies));
}
