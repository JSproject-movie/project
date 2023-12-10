// let obj ={
//     email: 'love123@gmail.com',
//     password: '12345678'
//   }

//   axios.post('https://hex-escape-room.herokuapp.com/api/user/signup'
//   , obj)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
const account = document.querySelector('.Login_Input_account');
const password = document.querySelector('.Login_Input_password');
const send = document.querySelector('#BT_Login_submit_2-1_2-2');



send.addEventListener('click',function(e){
callSingUp()
})
    // email: 'lovef2e@hexschool.com',
    // password: '12345678'
    //判斷空字串
function callSingUp(){
if(account.value=="" || password.value==""){
alert("帳號密碼不得為空");
return;
}
    let obj ={};
    obj.email = account.value;
    obj.password = password.value;
    console.log(obj);
      axios.post('https://hex-escape-room.herokuapp.com/api/user/signin', obj)
      .then(function (response) {
        if(response.data.message=="帳號註冊成功"){
            alert("帳號註冊成功");
        }else{
            alert("帳號錯誤失敗");
        }
         account.value = "";
         password.value="";
      })
      .catch(function (error) {
        console.log(error);
      });
}