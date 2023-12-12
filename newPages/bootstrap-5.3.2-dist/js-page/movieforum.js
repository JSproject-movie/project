const movieForumList = document.querySelector(".movie-forum-list");
function movieForumInit() {
  axios.get("https://testrender-tga5.onrender.com/posts").then(function (response) {
    let str = "";
    response.data.forEach((item) => {
      let content = `          <ul class="commentcard">
           <li class="card-body">
             <div class="mf-intro">
               <h3 class="mf-purpose">${item.title}</h3>
               <span class=""
                 ><img
                   class="col-1"
                   src="/newPages/movie picture/repairman.jpg"
                   alt=""
                   srcset=""
                 />
                 <p>台北星探．伊莎貝爾</p></span
               >
             </div>
             <div class="mf-comment">
               ${item.content}
             </div>
             <div class="mf-btn">
               <ul>
                 <li class="mf-reaction">
                   <button class="mf-good" type="button">
                     <img src="/newPages/icon/white-good.png" alt="" srcset="" />0000讚
                   </button>
                   <button class="mf-chat" type="button">
                     <img src="/newPages/icon/chat.png" alt="" srcset="" />2521則
                   </button>
                 </li>
                 <li class="mf-more"><a href="/bootstrap-5.3.2-dist/pages/6-1-1individual-forum.html">
                   <button class="more-icon" type="button" >
                     展開評論<img src="/newPages/icon/downArrow.png" alt=""  srcset="" />
                   </button></a>
                 </li>
               </ul>
             </div>
           </li>
         </ul>`;
      str += content;
    });
    movieForumList.innerHTML = str;
  });
}
movieForumInit();

const movieForumFalseContent = document.querySelector(
  "#movieForumFalseContent"
);
const movieFalseMegEnter = document.querySelector("#movie-False-meg-enter");
const falseContent = document.querySelector(".falseContent");
const check_rule = document.querySelector(".check-rule");
const flexCheckDefault1 = document.getElementById("flexCheckDefault1");
const movie_forum_title = document.querySelector(".movie-forum-title")
movieFalseMegEnter.addEventListener("click", function (e) {
  let obj = {};
  if (movieForumFalseContent.value == ""||movie_forum_title.value== "") {
    check_rule.innerHTML = `<span class="check-rule">主旨及評論內容不得空白!!!</span>`;
  } else if (!flexCheckDefault1.checked) {
    check_rule.innerHTML = `<span class="check-rule">下方請確認後勾選!!!</span>`;
  } else {
    check_rule.innerHTML = `<span class="check-rule"></span>`;
    obj.movieId = 1;
    obj.spoiler = false;
    obj.title=movie_forum_title.value;
    obj.content = movieForumFalseContent.value;
    obj.userId = 5
    axios.post("https://testrender-tga5.onrender.com/posts",obj)
    .then(function (response) {
      console.log(response)
    });
    movie_forum_title.value='';
    movieForumFalseContent.value='';
  }
});

const movieTrueForumTitle = document.querySelector(".movie-True-forum-title")
const movieTrueMegEnter = document.querySelector("#movie-True-meg-enter");
const movieForumTrueContent = document.querySelector("#movieForumTrueContent");
const checkFRule = document.querySelector(".check-F-rule");
movieTrueMegEnter.addEventListener("click", function (e) {
  console.log(movieForumTrueContent.value);
  let obj = {};
  if (movieForumTrueContent.value == ""||movieTrueForumTitle.value== "") {
    checkFRule.innerHTML = `<span class="checkFRule">主旨及評論內容不得空白!!!</span>`;
  }else {
    checkFRule.innerHTML = `<span class="checkFRule"></span>`;
    obj.movieId = 1;
    obj.spoiler = true;
    obj.title=movieTrueForumTitle.value;
    obj.content = movieForumTrueContent.value;
    obj.userId = 5
    axios.post("https://testrender-tga5.onrender.com/posts",obj)
    .then(function (response) {
      console.log(response.data);
    });
    movieTrueForumTitle.value='';
    movieForumTrueContent.value='';
  }
});

const movieForumAll = document.querySelector(".movie-forum-All");
const movieForumNoSpoiler = document.querySelector(".movie-forum-no-spoiler");

movieForumAll.addEventListener("click",function(e){
  movieForumInit()
})
movieForumNoSpoiler.addEventListener("click",function(e){
  axios.get("https://testrender-tga5.onrender.com/posts").then(function (response) {
    let str = "";
    if(response.data = false){}
    response.data.forEach((item) => {
      if(response.data == item.spoiler){}
      str+= `          <ul class="commentcard">
           <li class="card-body">
             <div class="mf-intro">
               <h3 class="mf-purpose">${item.title}</h3>
               <span class=""
                 ><img
                   class="col-1"
                   src="/newPages/movie picture/repairman.jpg"
                   alt=""
                   srcset=""
                 />
                 <p>台北星探．伊莎貝爾</p></span
               >
             </div>
             <div class="mf-comment">
               ${item.content}
             </div>
             <div class="mf-btn">
               <ul>
                 <li class="mf-reaction">
                   <button class="mf-good" type="button">
                     <img src="/newPages/icon/white-good.png" alt="" srcset="" />0000讚
                   </button>
                   <button class="mf-chat" type="button">
                     <img src="/newPages/icon/chat.png" alt="" srcset="" />2521則
                   </button>
                 </li>
                 <li class="mf-more"><a href="/bootstrap-5.3.2-dist/pages/6-1-1individual-forum.html">
                   <button class="more-icon" type="button" >
                     展開評論<img src="/newPages/icon/downArrow.png" alt=""  srcset="" />
                   </button></a>
                 </li>
               </ul>
             </div>
           </li>
         </ul>`;
    });
    movieForumList.innerHTML = str;
  });
})