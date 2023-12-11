const appealInfoInput = document.querySelector(".appeal-info-input");
const reportedReason = document.querySelector(".reportedReason");
const appealInfoText = document.querySelector(".appeal-info-text"); //案件編號
const appealContent = document.querySelector(".appeal-info-input-2");
const btnSendAppeal = document.querySelector(".btn-send-appeal");

// 對於檢舉案件提出申訴(新增申訴案件)
// 取得檢舉案件資料 // 之後試著用expand取user資料
let reportedData = [];
function getreportedData() {
  axios
    .get(`https://testrender-tga5.onrender.com/reportPosts`)
    .then(function (res) {
      reportedData = res.data;
      // console.log(reportedData.id);
      renderReportedNum();
      renderReportedReason();
    })
    .catch(function (error) {
      console.log(error);
    });
}
getreportedData();
// 渲染(自動帶入檢舉案件資料)：編號
function renderReportedNum() {
  let str = "";
  reportedData.forEach(function (item) {
    str += `${item.id}`;
  });
  appealInfoText.innerHTML = str;
}
// 渲染：被檢舉原因
function renderReportedReason() {
  let str = "";
  reportedData.forEach(function (item) {
    str += `${item.reportReason}`;
  });
  reportedReason.innerHTML = str;
}
// 新增申訴案件
// 我認為這則影評並無劇透
function appealPost() {
  axios
    .post(`https://testrender-tga5.onrender.com/appealposts`, {
      email: `${appealInfoInput.value}`,
      appealContent: `${appealContent.value}`,
    })
    .then(function (response) {
      window.location.href =
        "https://jsproject-movie.github.io/project/newPages/8-2report.html";
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 監聽送出按鈕來觸發新增申訴
btnSendAppeal.addEventListener("click", function (e) {
  e.preventDefault();
  appealPost();
});
