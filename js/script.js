$(document).ready(function() {
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
});
