const contactUsList = document.querySelector("#contact_us_list");
const addComment = document.querySelector("#add_comment");
const contactUsListName = document.querySelector("#contact_us_list_name");
const contactUsListEmail = document.querySelector("#contact_us_list_email");
const contactUsListTel = document.querySelector("#contact_us_list_tel");
const contactUsListDate = document.querySelector("#contact_us_list_date");
const contactUsListFloatingSelect = document.querySelector(
  "#contact_us_floatingSelect"
);
const contactUsListFloatingTextarea = document.querySelector(
  "#contact_us_floatingTextarea"
);
const contactBtn = document.querySelector(".contact-btn");
const contactForm = document.querySelector(".contact-form");
addComment.addEventListener("click", function (e) {
  let obj = {};
  if (
    (contactUsListName.value == "") |
    (contactUsListEmail == "") |
    (contactUsListTel == "") |
    (contactUsListDate == "") |
    (contactUsListFloatingSelect == "") |
    (contactUsListFloatingTextarea == "")
  ) {
    contactBtn.innerHTML = `<div class="pb-4 contact-btn">
        <p>請輸入完整資料!!!</p>
        <button type="button" class="mf-addcomment" id="add_comment">提交</button>
      </div>`;
  } else {
    obj.name = contactUsListName.value;
    obj.email = contactUsListEmail.value;
    obj.phoneNumber = contactUsListTel.value;
    obj.EventTime = contactUsListDate.value;
    obj.issue = contactUsListFloatingSelect.value;
    obj.issueContent = contactUsListFloatingTextarea.value;
    obj.userId = "5";
    contactForm.reset();

    axios.post("http://localhost:3000/contacts",obj)
    .then(function (response) {
      console.log(response.data);
    });
  }
});
