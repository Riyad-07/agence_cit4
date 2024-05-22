$('.slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    speed: 1000,
    fade: true,
});

$('.slider101').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
  responsive: [
    
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

