// 點小圖變大圖
$(function () {

    $('.largelick').on("click", function () { 
      //當largelick被點擊時

      $('#imagepreview').attr('src', $(this).attr('src')).css({ heght: '100%', width: '100%' }); 
      //imagepreview 的scr 引用(當下largelick被點擊的這個scr; 這個的largelick做css的寬高縮放)
      
      $('#imagemodal').modal('show');
       // imagemodal 的 modal 將被顯示

    });

  })


// 專案變大專案圖
$(function () {

  $('.projectlick').on("click", function () { 
    //當projectlick被點擊時

    $('#imgproview').attr('src', $(this).find(".ff").attr('src')).css({ heght: '70%', width: '70%' }); 
    //imagepreview 的scr 引用(當下largelick被點擊的這個,找到這個的.ff的scr; 做css的寬高縮放)
    
    $('#imgpromodal').modal('show'); 
    // imagemodal 的 modal 將被顯示


  });

})




 // Wrap every letter in a span 頁首
 var textWrapper = document.querySelector('.ml6 .letters');
 textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

 anime.timeline({ loop: true })
   .add({
     targets: '.ml6 .letter',
     translateY: ["1.1em", 0],
     translateZ: 0,
     duration: 1050,
     delay: (el, i) => 50 * i
   }).add({
     targets: '.ml6',
     opacity: 0,
     duration: 1500,
     easing: "easeOutExpo",
     delay: 1200
   });
