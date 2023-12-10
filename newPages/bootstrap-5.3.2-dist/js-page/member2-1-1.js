 // 獲取元素
    //emailInput 輸入E-MAIL
    //checkButton  確認E-mail
    const emailInput = document.querySelector('.Login_ALLuser_input');
    const checkButton = document.querySelector('#BT_Login_submit');
    console.log(emailInput, checkButton);

    //判斷
    function checkEmail(emailInput) {
      // 至少8個字符
      const LengthCondition = emailInput.length >= 8;

      // 包含英文字母
      const EnglishCondition = /[a-zA-Z]/.test(emailInput);

      // 包含數字
      const NumberCondition = /\d/.test(emailInput);

      // 檢查所有條件
      if (LengthCondition && EnglishCondition && NumberCondition) {
        alert("郵件地址符合條件，可以使用。");
        window.location.href = "/bootstrap-5.3.2-dist/pages/2.member/2-1-2_e-mail.index.html";
        return true;
      } else {
        alert("郵件地址不符合條件，請重新輸入。");
        return false;
      }
    }

   
    // 添加事件監聽器
    //EnteredEmail= 輸入的郵件地址
    checkButton.addEventListener('click', function () {
      const EnteredEmail = emailInput.value;
      checkEmail(EnteredEmail);
    });