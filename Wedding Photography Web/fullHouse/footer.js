
var a = $(".fb"); //設定變數
$(a).click(function () {
  $(a).css("color", "rgb(6, 6, 222)"),
    window.open("https://www.facebook.com/fullhouse1314/photos/?ref=page_internal");
}); // 當a點擊時，開啟另一個網頁瀏覽指定網頁

var b = $(".ig");
$(b).click(function () {
  $(b).css("color", "rgb(255, 140, 0)"),
    window.open("https://www.instagram.com/full_house1314/?hl=zh-tw&fbclid=IwAR1-z904JXLEgH0e9MQtJj02VTwmgl6sAi9ay2FNIMRkDZqIcKVe1LGkhKI");
});

var c = $(".yt");
$(c).click(function () {
  $(c).css("color", "rgb(224, 5, 5)"),
    window.open("https://www.youtube.com/user/Show771015");
});



// 固定在螢幕上icon
$(function () {
  $(".scroll-top").click(function () {
    console.log('click');                             // console.log紀錄被點擊
    $("html,body").animate({ scrollTop: 0 }, 1000);   //整個頁面用一秒移動到scrollTop: 0 的位置
  });                                                 

  $(window).on('scroll', function () {      // 當觸發scroll事件時,進行判斷

    if ($(this).scrollTop() > 400) {        // if scrollTop() > 400 為真 
      $('.scroll-top').fadeIn("fast");      // 則進行 fadeIn 與 css 的visibility:visible
      $('.scroll-top').css('visibility', 'visible');
    } else {
      $('.scroll-top').stop().fadeOut("fast");   // 判斷為假則 fadeOut
    }
  });



// navbar 效果
  $(window).on('scroll', function () {    // 當觸發scroll事件時,進行判斷

    if ($(this).scrollTop() > 100) {      // if scrollTop() > 100 為真 
      $('.navbar').fadeIn("fast");        // 則進行 fadeIn 與 css 的visibility:visible
      $('.navbar').css('visibility', 'visible');
    } else {
      $('.navbar').stop().fadeOut("fast");  // 判斷為假則 fadeOut
    }
  });


 // 頁首圖片fadeIn
 $(".fadeinimg").animate({"opacity": "1"}, 3000);

});











