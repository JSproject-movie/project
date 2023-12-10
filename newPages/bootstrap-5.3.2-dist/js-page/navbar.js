const searchInput = document.querySelector(".search-input");
// console.log(searchInput);
let movieIntroData = [];

function getMovieIntroData() {
  axios
    .get(`https://testrender-tga5.onrender.com/movieDatas`)
    .then(function (res) {
      // console.log(res.data);
      movieIntroData = res.data;
    })
    .catch(function (error) {
      console.log(error.res);
    });
}
getMovieIntroData();
