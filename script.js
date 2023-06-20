// $("#search-icon").click(function() {
//   $(".nav").toggleClass("search");
//   $(".nav").toggleClass("no-search");
//   $(".search-input").toggleClass("search-active");
// });

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});


$('.close').click(
  
  function(){
    console.log('hello');
    $('#myModal').modal('hide')});

$(window).on('load', function() {
  $('#myModal').modal('show');
});

const clip = document.querySelectorAll(".hover-to-play");
for (let i = 0; i < clip.length; i++) { clip[i].addEventListener("mouseenter", function (e) { clip[i].play();
  }); clip[i].addEventListener("mouseout", function (e) { clip[i].pause(); }); }