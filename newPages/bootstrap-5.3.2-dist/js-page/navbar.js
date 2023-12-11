const searchCardContainer = document.querySelector(".search-card-container");
const searchNum = document.querySelector(".search-num");
// console.log(searchInput);
let movieIntroData = [];

function getMovieIntroData() {
  axios
    .get(`https://testrender-tga5.onrender.com/movieDatas`)
    .then(function (res) {
      console.log(res.data);
      movieIntroData = res.data;
      // renderSearchResult(movieIntroData);
    })
    .catch(function (error) {
      console.log(error.res);
    });
}
getMovieIntroData();

// 渲染結果
function renderSearchResult(movieIntroData) {
  let str = "";
  movieIntroData.forEach((item) => {
    str += `
    <div class="wrap-search-card">
    <div class="search-card-header">
    <img
      src="${item.imgUrl}"
      class="search-img"
      alt=""
    />
    <div class="search-text">
      <h2>${item.movieName}(${item.movieEnglishName})</h2>
      <p>語言：${item.language}</p>
      <p>片長：${item.movieLength}</p>
      <p>導演：${item.personnelInformation.director}</p>
      <p>
        演員：${item.personnelInformation.actor}
      </p>
    </div>
  </div>
  <div class="wrap-star-score">
    <div class="wrap-star">
      <img src="icon/star1.png" class="star-search" alt="" />
      <img src="icon/star1.png" class="star-search" alt="" />
      <img src="icon/star1.png" class="star-search" alt="" />
      <img src="icon/star1.png" class="star-search" alt="" />
      <img src="icon/star0.png" class="star" alt="" />
    </div>
    <span class="ml-30"></span>
    <p>3.8</p>
    <span class="ml-30"></span>
    <p>(${item.reviewersNumber}人評價)</p>
  </div>
  <p class="search-card-p">
    ${item.movieIntroduction}
  </p>
  <button class="btn-search-result">
    <a href="#" class="text-btn-search">read more </a>
  </button>
  </div>
    `;
  });
  searchCardContainer.innerHTML = str;
}

// 關鍵字搜尋
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".btn-search");
searchBtn.addEventListener("click", keywordSearch);

function keywordSearch() {
  let keyword = searchInput.value.trim().toLowerCase();
  let targetMovieData = [];
  targetMovieData = movieIntroData.filter(function (item) {
    let title = item.movieName.toLowerCase();
    return title.match(keyword);
  });
  renderSearchNum(targetMovieData);
  renderSearchResult(targetMovieData);
}
// 渲染搜尋筆數
function renderSearchNum(targetMovieData) {
  let str = "";
  let inputKeyword = searchInput.value;
  str += `搜尋「 ${inputKeyword}」的結果： ${targetMovieData.length} 筆`;
  searchNum.innerHTML = str;
}
