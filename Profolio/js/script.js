// Binding of init has to be before intialization!
$('.slick-slider').on('init', (event, slick, currentSlide) => {
  let slideIndex = slick.currentSlide;
  let slidesLength = slick.slideCount;
})

// Initialise.
$('.slick-slider').slick({
  slidesToShow: 3,
  dots: true,
  //centerMode: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
})

let slideIndex = $('.slick-slide:not(.slick-cloned)').length
  $('.add-slide').on('click', () => {
    slideIndex++
    $('.slick-slider').slick('slickAdd','<li><h3>' + slideIndex + '</h3></li>')
    $('.slick-slider').slick('slickGoTo', 'slickCurrentSlide' + 1)
  })

  $('.remove-slide').on('click', () => {
    $('.slick-slider').slick('slickRemove', slideIndex - 1)
      if (slideIndex !== 0) {
        slideIndex--
      }
  })