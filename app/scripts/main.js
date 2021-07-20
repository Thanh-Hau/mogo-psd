//Slick slider
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
//toogle menu
const menuToogle = document.querySelector(".header-toogle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuToogle.addEventListener("click", function(){
    menuHeader.classList.add(expandClass);
});
window.addEventListener("click", function (e) {
    if(!menuHeader.contains(e.target) && !e.target.matches(".header-toogle")){
        menuHeader.classList.remove(expandClass);
    }
});
//accordion menu
// $(document).ready(function(){
//   $(".wedo-item-header").click(function(){
//     $(".wedo-item").removeClass("active");    
//     $(this).parent().addClass("active");
//     $(this).parent().slideUp();
//     $(this).next().slideToggle();
//   });
// });
$(document).ready(function() {
  $(".wedo-item-header").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".wedo-item-info")
        .slideUp(400);
      $(".wedo-item-arrow")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
    } else {
      $(".wedo-item-arrow")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
      $(this)
        .find("i")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-up");
      $(".wedo-item-header").removeClass("active");
      $(this).addClass("active");
      $(".wedo-item-info").slideUp(400);
      $(this)
        .siblings(".wedo-item-info")
        .slideDown(400);
    }
  });
});
// Button back to top
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
//toggle search bar
$(document).ready(function() {
     
  $(".fa-search").click(function() {
     $(".search-box").slideToggle();
     $("input[type='text']").focus();
   });

});


