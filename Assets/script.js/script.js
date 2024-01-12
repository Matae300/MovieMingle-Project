
// var genresButton = document.getElementById("genresButton");
//         var popularityButton = document.getElementById("popularityButton");
//         var ratingsButton = document.getElementById("ratingsButton");


//         genresButton.addEventListener("click", function() {

//             console.log("Genres button clicked");
//         });

//         popularityButton.addEventListener("click", function() {

//             console.log("Popularity button clicked");
//         });

//         ratingsButton.addEventListener("click", function() {

//             console.log("Ratings button clicked");
//         });





document.addEventListener('DOMContentLoaded', function () {
  var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  var searchInput = document.getElementById('searchInput');

  document.getElementById('searchButton').addEventListener('click', function () {
    var searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
      searchHistory.push(searchTerm);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      console.log('Search History:', searchHistory);


      searchInput.value = '';
    }
  });
});


