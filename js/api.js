var myHttp = new XMLHttpRequest();
var myMovies = [];
// Methods: GET, POST, PUT, PATCH, DELETE
myHttp.open('GET', 'https://api.themoviedb.org/3/trending/movie/day?api_key=713e5b505cc52f5aa68161a6f9c471c1');
myHttp.send();
//myHttp.readyState; --> 0, 1, 2, 3, 4
//myHttp.status; --> (404 = Not Found), (403 = Forbidden), (200 = Ok)
console.log(myHttp.readyState);
myHttp.addEventListener('readystatechange', function () {
    if (myHttp.status == 200 && myHttp.readyState == 4) {
        // console.log(myHttp.response);
        console.log(myHttp.readyState);
        myMovies = JSON.parse(myHttp.response).results;
        console.log(myMovies);
        diaplayMovies ()
    }
});
function diaplayMovies (){
    var temp = ``;
    for (let i = 0; i < myMovies.length; i++) {
        temp += `
        <div class="col-md-4">
                <div class="item">
                    <img src="https://image.tmdb.org/t/p/w500/${myMovies[i].poster_path}" class="w-100">
                    <div class="item-card">
                        <h3>${myMovies[i].title}</h3>
                    </div>
                </div>
            </div>`
    }
    document.getElementById('myRow').innerHTML = temp;
}