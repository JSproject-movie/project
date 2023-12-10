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
const contact_warn = document.querySelector(".contact-warn");
const contactForm = document.querySelector(".contact-form");
addComment.addEventListener("click", function (e) {
  let obj = {};
  if (
    (contactUsListName.value == "") |
    (contactUsListEmail.value == "") |
    (contactUsListTel.value == "") |
    (contactUsListDate.value == "") |
    (contactUsListFloatingSelect.value == "") |
    (contactUsListFloatingTextarea.value == "")
  ) {
    contact_warn.innerHTML = `<p class="contact_warn">請輸入完整資料!!!</p>`;
  } else {
    contact_warn.innerHTML = `<p class="contact_warn"></p>`;
    obj.name = contactUsListName.value;
    obj.email = contactUsListEmail.value;
    obj.phoneNumber = contactUsListTel.value;
    obj.EventTime = contactUsListDate.value;
    obj.issue = contactUsListFloatingSelect.value;
    obj.issueContent = contactUsListFloatingTextarea.value;
    obj.userId = "5";
    contactForm.reset();

    axios.post("https://testrender-tga5.onrender.com/contacts",obj)
    .then(function (response) {
      console.log(response.data);
    });
  }
});
