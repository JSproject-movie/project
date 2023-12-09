lightbox.option({
    'resizeDuration' : 200,
    'disableScrolling' : true,
    'maxWidth': 720,
    'maxHeight': 671,
    'fadeDuration': 300,
    'alwaysShowNavOnTouchDevices':true,
    'wrapAround': true,
  }); 
  const queryString = window.location.search;
  const movieMain = document.querySelector('main');
  const loadingPage = document.querySelector('.loadingPage');
  let movieData = '';
  const renderData = () => {
    const starCounts = parseInt(movieData.ratingStars);
    const maxValue = 5;
    let commentTemelate = '';
    let starTemelate = '';
    for(let n = 0; n < maxValue; n++){
      if(n >= starCounts){
        starTemelate+=`<label>☆</label>`;
      }else{
        starTemelate+=`<label>★</label>`;
      }
    }
    movieData.memberComments.forEach((item) => {
      commentTemelate+=`<div class="col-12 d-flex justify-content-center mb-5">
      <div class="commentary w-75">
          <h4 class="text-white fw-bold my-4">${item.title}</h4>
          <div class="d-flex align-items-center my-4">
              <img src="/movie picture/userImg.png" alt="userImg" class="userImg">
              <h5 class="text-white mb-0 fw-bold ms-4">${item.nickName}</h5>
          </div>
          <p class="mb-4 text-white pe-5">${item.comtent}</p>
          <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex w-50 justify-content-between">
                  <button type="button" class="btn linkBtn w-100 "><i class="bi bi-hand-thumbs-up-fill"></i><span class="ms-2">按讚</span><span class="mb-0 ms-3">${item.thumbsUpNum}讚</span></button>
                  <button type="button" class="btn messageBtn w-100 mx-3"><i class="bi bi-chat-left-text-fill"></i><span class="ms-2">留言</span><span class="mb-0 ms-3">${item.messages}則</span></button>
              </div>
              <button type="button" class="btn commentBtn">展開評論<i class="bi bi-chevron-up mx-3"></i></button>
          </div>
      </div>
  </div>
</div>`
    })
    const n = `
    <div class="row justify-content-around my-3 g-0">
    <div class="col-3 mt-2">
        <img src="${movieData.imgUrl}" alt="${movieData.movieEnglishName}" class="img-fluid" style="width: 385px; height: 529px; object-fit: cover;">
    </div>
    <div class="col-7 text-white">
        <div class="row">
            <div class="col-12 mt-4">
                <h2 class="fw-bold">${movieData.movieName}</h2>
                <h5>${movieData.movieEnglishName}</h5>
            </div>
            <div class="col-12 d-flex flex-column  mt-3">
                <div class="d-flex my-2">
                    <img src="/icon/userSm.png" alt="user" class="img-fluid"><p class="mb-0 mx-3">${movieData.reviewersNumber}人評價</p>
                </div>
                <div class="d-flex my-2 align-items-center">
                    <div class="star-cb-group ">
                      ${starTemelate}
                    </div>
                    <p class="mb-0 mx-3">${movieData.ratingStars} /5.0</p>
                </div>
                <div class="d-flex justify-content-start my-2 align-items-center">
                    <button type="button" class="btn collectBtn me-5  d-flex align-items-center"><i class="love bi bi-heart mx-3"></i>收藏</button>
                    <a href="#"><img src="/icon/good.png" class="img-fluid" alt="good"></a>
                </div>
            </div>
            <div class="col-12 d-flex flex-column mt-4">
                <h5 class="text-white h6">電影簡介 :</h5>
                <p class="mb-0">
                    ${movieData.movieIntroduction}
                </p>
                <hr>
                <h5 class="text-white h6 mb-3">導演： ${movieData.personnelInformation.director}</h5>
                <h5 class="text-white h6 mb-3">作家： ${movieData.personnelInformation.writer}</h5>
                <h5 class="text-white h6 mb-3">影星： ${movieData.personnelInformation.actor}</h5>
            </div>
        </div>
        
    </div>
</div>
<div class="movieTrailer d-flex flex-column w-100">
    <h2 class="text-white fw-bold mb-0 d-flex align-items-center"><img src="/icon/play-arrow.svg" alt="play-arrow" class="me-3">預告片</h2>
    <div class="movieImg d-flex justify-content-center my-3 mt-5 w-100">
        <button type="button" class="btn movieBtn position-absolute top-50 start-50 translate-middle">
            <img src="/icon/PlayButton.svg" alt="playBtn" class="img-fluid">
        </button>
        <img src="${movieData.imgUrl2}" alt="${movieData.movieEnglishName}" class="position-relative img-fluid">
        
    </div>
    <div class="movieControl d-flex justify-content-center w-100">
        <div class="row g-0 justify-content-between w-75">
            <div class="col-3 d-flex justify-content-around">
                <button type="button" class="btn"><img src="/icon/BT_Back.svg" alt="back"></button>
                <button type="button" class="btn moviePlayBtn"><img src="/icon/PlayButton.svg" alt="playBtn" class="img-fluid"></button>
                <button type="button" class="btn"><img src="/icon/Next.svg" alt="next"></button>
            </div>
            <div class="col d-flex flex-column justify-content-center">
                <input type="range" class="movie-range" id="customRange1" value="0">
            </div>
        </div>
    </div>
</div>
<div class="movieStills w-100">
    <h2 class="text-white fw-bold d-flex align-items-center my-5"><img src="/icon/layout-masonry-fill.svg" alt="play-arrow" class="me-3">劇照</h2>
    <div class="row g-0 w-100">
        <div class="col">
            <a href="${movieData.stillsPhotos[0]}" data-lightbox="image-1" data-title="${movieData.movieName}">
                <img src="${movieData.stillsPhotos[0]}" alt="${movieData.movieEnglishName}-1" class="img-fluid" style="width: 310px; height: 215px; object-fit: cover;">
            </a>
        </div>
        <div class="col">
            <a href="${movieData.stillsPhotos[1]}" data-lightbox="image-1" data-title="${movieData.movieName}">
                <img src="${movieData.stillsPhotos[1]}" alt="${movieData.movieEnglishName}-2" class="img-fluid" style="width: 310px; height: 215px; object-fit: cover;">
            </a>
        </div>
        <div class="col">
            <a href="${movieData.stillsPhotos[2]}" data-lightbox="image-1" data-title="${movieData.movieName}">
                <img src="${movieData.stillsPhotos[2]}" alt="${movieData.movieEnglishName}-3" class="img-fluid" style="width: 310px; height: 215px; object-fit: cover;">
            </a>
        </div>
        <div class="col">
            <a href="${movieData.stillsPhotos[3]}" data-lightbox="image-1" data-title="${movieData.movieName}">
                <img src="${movieData.stillsPhotos[3]}" alt="${movieData.movieEnglishName}-4" class="img-fluid" style="width: 310px; height: 215px; object-fit: cover;">
            </a>
        </div>
    </div>
</div>
<div class="d-flex flex-column align-items-center py-4 px-2 w-100">
    <h2 class="text-white fw-bold mb-0">會員評論</h2>
    <div class="row g-0 w-100">
        <div class="col-12 d-flex justify-content-end px-5 my-3">
            <button type="button" class="btn commentBtn mx-3">我要評論<i class="bi bi-pencil-square mx-3"></i></button>
        </div>
        <div class="col-12 mt-3">
            <div class="row g-0">
              ${commentTemelate}
            <div class="d-flex justify-content-center w-100">
                <button type="button" class="btn commentBtn w-25">更多影評</button>
            </div>
        </div>
    </div>
</div>
    `
    movieMain.innerHTML = n;
    const collectBtn = document.querySelector('.collectBtn');
    let enable = false;
    collectBtn.addEventListener('click',(e) => {
      e.preventDefault();
      if(enable === false){
        collectBtn.setAttribute('class','btn collectBtn me-5  d-flex align-items-center text-danger');
        collectBtn.innerHTML = '<i class="bi bi-heart-fill mx-3"></i>已收藏';
        enable = true;
      }else if(enable === true){
        collectBtn.setAttribute('class','btn collectBtn me-5  d-flex align-items-center');
        collectBtn.innerHTML = '<i class="love bi bi-heart mx-3"></i>收藏';
        enable = false;
      }
    })
  }
  const getData = async () => {
    try{
      const res = await axios.get(`http://localhost:3000/movieDatas${queryString}`);
      movieData = res.data[0];
        if(movieData.length === 0){
            alert('資料取得錯誤!');
        }else{
            document.title = `${movieData.movieName}`;
            renderData();
            setTimeout(() => {
                loadingPage.setAttribute('class','d-none loadingPage');
            },500);
        }
    }catch(error){
        console.log(1);
        Swal.fire({
            title: "發生錯誤",
            text: "取得資料失敗!",
            icon: "error"
          });
    }
  }
getData();