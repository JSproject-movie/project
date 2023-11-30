// swiper-carousel
var mySwiper = new Swiper('.swiper', {
  loop: true,
  autoplay:true,
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

// btn returnTop
$(function(){
  $('#BackTop').click(function(){ 
    $('html,body').animate({scrollTop:0}, 333);
  });
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 300 ){
      $('#BackTop').fadeIn(222);
    } else {
      $('#BackTop').stop().fadeOut(222);
    }
  }).scroll();
});