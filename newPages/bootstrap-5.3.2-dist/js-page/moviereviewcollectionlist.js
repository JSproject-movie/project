const movielistMain = document.querySelector('.list');
const queryString = window.location.search;
const searchInput = document.querySelector('.search');
const searchBtn = document.querySelector('.searchBtn');
let movieData = '';
const renderData = (data = movieData) => {
    let commentTemelate = '';
    if(data.length === 0){
        commentTemelate=`<h2 class='text-white'>搜尋不到此影評收藏資料</h2>`
    }else{
        data.forEach((item) => {
            commentTemelate+=`
            <div class="movieReview w-75 mb-4">
                            <div class="row g-0">
                                <div class="col-3">
                                    <div class="movieImg d-flex justify-content-center align-items-center">
                                        <img src="${item.movies.imgUrl}" class="img-fluid" style="width: 200px; height: 200px; object-fit: cover;" alt="Oppenheimer-1">
                                    </div>
                                </div>
                                <div class="col p-3">
                                    <h5 class="text-white fw-bold">${item.movies.movieName}</h5>
                                    <p class="text-white">${item.movies.movieIntroduction}</p>
                                </div>
                                <div class="col d-flex flex-row-reverse py-5">
                                    <div class="d-flex flex-column">
                                        <div class="d-flex mb-3">
                                            <button type="button" class="btn border-0"><img src="../newPages/icon/good.png" class="mx-2" alt="good"></button>
                                            <button type="button" class="btn collectBtn"><img src="../newPages/icon/favorite.png" class="mx-1" alt="favorite">收藏</button>
                                        </div>
                                        <a href="../newPages/4-1moviestnopsis.html?id=${item.id}" class="btn btn-light d-flex align-items-center justify-content-between">READ MORE <img src="../newPages/icon/PlayButton_purple.png" alt="PlayButton_purple"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
            `
        });
    }
    
    movielistMain.innerHTML = commentTemelate;
};

const getData = async () => {
    try{
      const res = await axios.get(`https://testrender-tga5.onrender.com/users${queryString}`);
      movieData = res.data[0].favorites;
        if(movieData.length === 0){
            return;
        }else{
            renderData();
        }
    }catch(error){
      Swal.fire({
        title: "發生錯誤",
        text: "取得資料失敗!",
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
      });
      setTimeout(() => {
        window.location.href = "../newPages/1.index.html";
      },3000)
    }
  }
getData();
searchBtn.addEventListener('click',(e) => {
    e.preventDefault();
    if(searchInput.value ===  ''){
        renderData();
        return;
    }else{
        const fillterList = movieData.filter((item) => {
            return item.movies.movieName === searchInput.value;
        })
        renderData(fillterList);
        searchInput.value = '';
    }
})