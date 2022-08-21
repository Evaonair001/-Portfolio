
$(function () {
  //預設active
  $(".con").hide(); //隱藏全部的tab內容

  //對第一個li標簽添加class="active屬性" 
  $("ul.tabs li:first").addClass("active");
  $(".con:first").show();//顯示第一個tab內容  

  //點擊事件
  $("ul.tabs li").click(function () {

    //移除class="active"屬性
    $("ul.tabs li").removeClass("active");

    //添加class="active"到選擇標簽中 
    $(this).addClass("active");

    //隱藏全部標簽內容  
    $('.con').hide();

    //找到所屬屬性值 來識別 活躍選項卡和內容
    var activeTab = $(this).find("a").attr("href");
    
    //使內容消失 
    $(activeTab).fadeIn();
    
    return false

  });
})





