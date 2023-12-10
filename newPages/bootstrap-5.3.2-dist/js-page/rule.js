const user_rule = document.querySelector('#user-rule');
const comment_rule = document.querySelector('#comment-rule');
const rule_btn = document.querySelector('#rule-btn');
const user_text = document.querySelector('#user-text');

user_rule.addEventListener('click',function(e){
console.log("5");
    if(e.target.innerHTML =="用戶規章"){
        let str_btn = `
        <button class="col-2 rule-target" id="user-rule" type="button">用戶規章</button>
        <button class="col-2  rule-notarget" id="comment-rule" type="button">評論規章</button>
      `;
      let str = `<li class="rule-text" id="user-text">
        <div class="user-text">
          <p>使用本網站服務,您同意以下事項</p>
          <p>1.當您註冊成為網站會員,或使用本網站所提供之服務與參加活動時,我們會要求您填寫個人資料,如姓名、性別、電話...。</p>
            <p>2.請妥善保管帳號,不得透露或提供、出借轉讓給第三人使用,若帳號遭人冒用,請立即通知客服人員。</p>
            <p>3.若您提供任何不實或不完整的資料,如造成您任害本公司不予負責,如造</p>
            <p>4.本公司損害,您可能還會牽涉相關法律及賠償責任,本公司並有權暫停或終止您的帳號,並拒絕您使用會員服務之全或一部份。</p>
            <p>5.本公司對於「會員」所登錄之資料,基於保障個人隱私權,將供本網站之所需,及本網站行銷統計、分析服務外,不作其他任何目的使用。</p>
        </div>
      </li>`;
        rule_btn.innerHTML = str_btn;
        user_text.innerHTML = str;
    }
})


comment_rule.addEventListener('click',function(e){
    console.log("ok1");
    if(e.target.innerHTML =="評論規章"){
        let str_btn1 = `
        <button class="col-2 rule-notarget" id="user-rule" type="button">用戶規章</button>
        <button class="col-2  rule-target" id="comment-rule" type="button">評論規章</button>
      `;
      let str1 = `<li class="rule-text" id="user-text">
        <div class="user-text">
          <p>使用本網站服務,您同意以下事項</p>
          <p>1.當您註冊成為網站會員,或使用本網站所提供之服務與參加活動時,我們會要求您填寫個人資料,如姓名、性別、電話...。</p>
            <p>2.請妥善保管帳號,不得透露或提供、出借轉讓給第三人使用,若帳號遭人冒用,請立即通知客服人員。</p>
            <p>3.若您提供任何不實或不完整的資料,如造成您任害本公司不予負責,如造</p>
            <p>4.本公司損害,您可能還會牽涉相關法律及賠償責任,本公司並有權暫停或終止您的帳號,並拒絕您使用會員服務之全或一部份。</p>
            <p>5.本公司對於「會員」所登錄之資料,基於保障個人隱私權,將供本網站之所需,及本網站行銷統計、分析服務外,不作其他任何目的使用。</p>
        </div>
      </li>`;
        rule_btn.innerHTML = str_btn1;
        user_text.innerHTML = str1;
    }
})


