$(document).ready(function() {
  console.log("hi");
  $('.project-carousel').slick({
    dots: true,
    mobileFirst: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
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
});
