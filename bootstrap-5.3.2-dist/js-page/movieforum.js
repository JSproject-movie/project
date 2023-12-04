const movieForumList = document.querySelector(".movie-forum-list");
function movieForumInit(){
    axios
    .get(
      "http://localhost:3000/posts"
    )
    .then(function (response) {
        let str ="";
        response.data.forEach((item)=>{
           let content = `          <ul class="commentcard">
           <li class="card-body">
             <div class="mf-intro">
               <h3 class="mf-purpose">${item.title}</h3>
               <span class=""
                 ><img
                   class="col-1"
                   src="/movie picture/repairman.jpg"
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
                     <img src="/icon/white-good.png" alt="" srcset="" />0000讚
                   </button>
                   <button class="mf-chat" type="button">
                     <img src="/icon/chat.png" alt="" srcset="" />2521則
                   </button>
                 </li>
                 <li class="mf-more"><a href="/bootstrap-5.3.2-dist/pages/6-1-1individual-forum.html">
                   <button class="more-icon" type="button" >
                     展開評論<img src="/icon/downArrow.png" alt=""  srcset="" />
                   </button></a>
                 </li>
               </ul>
             </div>
           </li>
         </ul>`
       str+=content
        })
        movieForumList.innerHTML = str;
    })
    
};
movieForumInit()

const exampleModal1 = document.querySelector("#exampleModal1");
const movieForumFalseContent = document.querySelector("#movieForumFalseContent");
const movieFalseMegEnter = document.querySelector("#movie-False-meg-enter");
