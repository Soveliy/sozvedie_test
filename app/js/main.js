
$(".region").mouseenter(function(){
    $(".region__popup").addClass("region__popup--isHover")
})
$(".region").mouseleave(function(){
  $(".region__popup").removeClass("region__popup--isHover")
})
$(".region__popup-btn--true").click(function(){
  $(".region__popup").toggleClass("region__popup--isHover");
  
})
$(".main-header__button--search-btn").click(function(){
  $(".main-header__search").toggleClass("main-header__search--isOpen");
  
})
// console.log('q')

// $(".main-header").addClass('main-header--fixed');
   
  $(window).scroll(function() {
    if($(this).scrollTop() > 53) {
     $(".main-header").addClass('main-header--fixed');
    $("body").addClass("bodyFix")
    } else {
      $(".main-header").removeClass('main-header--fixed');
     $("body").removeClass("bodyFix")
    }
  });


  $(function() {
    $('.menu-catalog')
      .mouseenter(function() {
        $(this).dimBackground();
      })
      .mouseleave(function() {
        $(this).undim(); // Note: We could also use `$.undim();`
      });
  });
