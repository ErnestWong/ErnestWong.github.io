$(document).ready(function() {
  $('body').fadeIn(2000);
  console.log("hi");
  $('.project-carousel').slick({
    dots: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } 
    ]
  });

  $("a").smoothScroll();
  $("button").smoothScroll();

  $('.header').stickyNavbar({
    activeClass: "active" 
  });


  $(".icon-center").hide();
  $(".project-img-container").hover(function() {
    $(this).find(".project-img").foggy();
    $(this).find(".icon-center").fadeIn(300);
  }, function() {
    $(this).find(".icon-center").fadeOut(300);
    $(this).find(".project-img").foggy(false);
  });

  $(".hover-text").hide();
  $(".main-btns").hover(function() {
    $(this).find(".hover-text").fadeIn(200);
  }, function() {
    $(this).find(".hover-text").fadeOut(200);
  });
});
