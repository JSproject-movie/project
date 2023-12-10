const searchInput = document.querySelector(".search-input");
const wrapSearchCard = document.querySelector(".wrap-search-card");
// console.log(searchInput);
let movieIntroData = [];

function getMovieIntroData() {
  axios
    .get(`https://testrender-tga5.onrender.com/movieDatas`)
    .then(function (res) {
      console.log(res.data);
      movieIntroData = res.data;
      renderSearchResult(movieIntroData);
    })
    .catch(function (error) {
      console.log(error.res);
    });
}
getMovieIntroData();

function renderSearchResult(movieIntroData) {
  let str = "";
  movieIntroData.forEach((item) => {
    str += `
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
      <p>導演：安東尼魯索(AnthonyRusso),喬羅素(JoeRusso)</p>
      <p>
        演員：布萊德利庫柏(BradleyCooper),布麗拉森(BrieLarson),克里斯漢斯沃(ChrisHemsworth),克里斯伊凡(ChrisEvans)...
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
    <p>(3000人評價)</p>
  </div>
  <p class="search-card-p">
    如果地球上最強大的英雄想要阻止頑皮的洛基和他的外星軍隊奴役人類，他們就必須團結起來，學會團隊作戰。
  </p>
  <button class="btn-search-result">
    <a href="#" class="text-btn-search">read more </a>
  </button>
    `;
  });
  wrapSearchCard.innerHTML = str;
}
