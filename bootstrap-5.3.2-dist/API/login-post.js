// json-server login-post.json -m ./node_modules/json-server-auth
let token="";
let id="";
// 註冊
function signUp(){
  axios.post(`http://localhost:3000/signup`,{
    "email":"user10@mail.com",
    "password":"user10",
    "lastName":"Hogan",
    "firstName":"Freya",
    "nickName":"Freya",
    "gender":"female",
    "role":"user"
  })   
  .then(function(response){
    console.log(response.data)
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 登入
function login(){
  axios.post(`http://localhost:3000/login`,{
    "email":"user06@mail.com",
    "password":"Users006",
  })   
  .then(function(response){
    token=response.data.accessToken;
    id=response.data.user.id;
    console.log(response)
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 修改密碼
function upDatePassword(){
  axios.patch(`http://localhost:3000/600/users/5`,{
    "password":"Users005",
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })          
  .then(function(response){
    token=response.data.accessToken;
    id=response.data.user.id;
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 發布影評
// 不用另外代userId的寫法：http://localhost:3000/600/users/${id}/posts
function addPost(){
  axios.post(`http://localhost:3000/600/posts`,{
    "movieId":1, 
    "spoiler":"false",
    "title":"科學與道德的交織",
    "content":"片中賈羅·奧本海默的角色由傑克·吉倫哈爾精湛詮釋，他不僅展現了奧本海默作為核物理學家的才華，更將觀眾帶入他內心的道德掙扎。奧本海默在創造毀滅性武器的同時，也面臨道德的困惑和人性的挑戰，這種內心掙扎讓影片更具深度和情感。",
    "userId":id
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })   
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 刪除影評
// let delPostId=2;
function delPost(){
  axios.delete(`http://localhost:3000/posts/${delPostId}`,{
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })   
  .then(function(response){
    token=response.data.accessToken;
    id=response.data.user.id;
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 修改影評
function editPost(){
  axios.patch(`http://localhost:3000/600/posts`,{
    
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })          
  .then(function(response){
    token=response.data.accessToken;
    id=response.data.user.id;
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 新增留言
function addComment(){
  axios.post(`http://localhost:3000/600/comments`,{
    "movieId":1, 
    "postId": 1,
    "spoiler":"false",
    "comment":"中肯的評論！",
    "userId":id
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })   
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 刪除留言
function delComment(){
  axios.delete(`http://localhost:3000/posts/${delCommentId}`,{

  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })   
  .then(function(response){
    token=response.data.accessToken;
    id=response.data.user.id;
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 修改留言
function editComment(){
  axios.patch(`http://localhost:3000/600/comments`,{
    
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })          
  .then(function(response){
    token=response.data.accessToken;
    id=response.data.user.id;
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 聯絡我們
function addContact(){
  axios.post(`http://localhost:3000/600/contacts`,{
    "name":"Tom",
    "email": "user05@mail.com",
    "phoneNumber":"0912345678",
    "EventTime":"01/01/2023",
    "issue":"意見回饋",
    "issueContent":"希望電影介紹能更詳細",
    "userId":id
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })   
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error.response);
  })
}

// 檢舉影評
function reportPost(){
  axios.post(`http://localhost:3000/reportPosts`,{
    "postId": 1,
    "reportReason":"惡意劇透",
    "userId":id
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })   
  .then(function(response){
    token=response.data.accessToken;
    id=response.data.user.id;
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 檢舉留言
function reportComment(){
  axios.post(`http://localhost:3000/reportComments`,{
    "commentId": 1,
    "reportReason":"散布明顯無意義之內容",
    "userId":id
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })  
  .then(function(response){
    token=response.data.accessToken;
    id=response.data.user.id;
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 對檢舉影評提出申訴
function appealPost(){
  axios.post(`http://localhost:3000/600/appealposts`,{
    "email":"user05@mail.com",
    "beReportReason":"惡意劇透",
    "reportPostId":1,
    "appealContent":"我認為這則影評並無劇透",
    "userId":id
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })   
  .then(function(response){
    token=response.data.accessToken;
    id=response.data.user.id;
  })
  .catch(function(error){
    console.log(error.response);
  })
}
// 對檢舉留言提出申訴
function appealComment(){
  axios.post(`http://localhost:3000/appealComments`,{
    "email":"user05@mail.com",
    "beReportReason":"散布明顯無意義之內容",
    "reportCommentId":1,
    "appealContent":"我認為這則留言並無問題",
    "userId":id
  },{
    headers:{
      "authorization":`Bearer ${token}`
    }
  })   
  .then(function(response){
    token=response.data.accessToken;
    id=response.data.user.id;
  })
  .catch(function(error){
    console.log(error.response);
  })
}
