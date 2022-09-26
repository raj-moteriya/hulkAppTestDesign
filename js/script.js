
/* our best sellers Slider Script Start */
$('.sellers-slider').owlCarousel({
  loop: true,
  margin: 30,
  items: 4.2,
  nav: true,
  dots: false,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
});
/* our best sellers Slider Script End */

/* Click to Move Section */
$(".explore-more a").click(function () {
  $('html, body').animate({
    scrollTop: $("section#OURBESTSELLERS").offset().top + -60
  }, 1000);
});

/* Header Stick Section */
$(window).scroll(function () {
  if ($(this).scrollTop() > 30) {
    $('header').addClass("sticky");
  }
  else {
    $('header').removeClass("sticky");
  }
});

