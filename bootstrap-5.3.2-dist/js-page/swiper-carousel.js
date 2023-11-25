// var mySwiper = new Swiper ('.swiper-container', {
//   // パラメーター
//   loop: true,
//   freeMode: true,
//   // 分页器
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   // ナビゲーション
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

var mySwiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  },
  pagination: {
    el: ".swiper-pagination",
    type : 'custom',
    renderCustom: function (swiper, current, total) {
      var paginationHtml = " ";
      for (var i = 0; i < total; i++) {
        // 判斷是不是激活焦點，是的話添加active類，不是就只添加基本樣式類
        if (i === (current - 1)) {
          paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
        }else{
          paginationHtml += '<span class="swiper-pagination-customs"></span>';
        }						  
      }
      return paginationHtml;
    },
  },
});
// var swiper = new Swiper(".mySwiper", {
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,

//   horizontal:direction,
// });


// var mySwiper = new Swiper ('.swiper', {
//   direction: 'vertical', // 垂直切换选项
//   loop: true, // 循环模式选项
  
//   // 如果需要分页器
//   pagination: {
//     el: '.swiper-pagination',
//   },
  
//   // 如果需要前进后退按钮
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
  
//   // 如果需要滚动条
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// })      

// var swiper = new Swiper(".mySwiper", {
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });