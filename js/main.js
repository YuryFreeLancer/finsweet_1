$(function () {

// =========== рейтинг rateYo =================
// =========== Звездный рейтинг ===============

   $(".header__rating").rateYo({
    rating: 4.5,
    readOnly: false,
    starWidth: "28px",
    starSvg: '<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3662 1.82936C13.5032 -0.255461 16.4968 -0.255466 17.6338 1.82936L19.9256 6.03174C20.3571 6.82292 21.1214 7.37822 22.0072 7.5441L26.7121 8.42517C29.0463 8.86228 29.9713 11.7093 28.3399 13.4349L25.0514 16.9132C24.4323 17.5681 24.1404 18.4666 24.2563 19.3603L24.8723 24.1072C25.1779 26.4621 22.756 28.2217 20.6107 27.2034L16.2865 25.1507C15.4724 24.7642 14.5276 24.7642 13.7135 25.1507L9.38927 27.2034C7.24399 28.2217 4.82214 26.4621 5.12772 24.1072L5.74367 19.3603C5.85964 18.4666 5.5677 17.5681 4.94858 16.9132L1.66009 13.4349C0.0286615 11.7093 0.953722 8.86228 3.28786 8.42517L7.99278 7.5441C8.87858 7.37822 9.64288 6.82293 10.0744 6.03174L12.3662 1.82936Z"/></svg>'
    
  });
  $(".header__rating").rateYo("option", "ratedFill", "#FFB648");
  $(".header__rating").rateYo("option", "spacing", "9.0");
  $(".header__rating").rateYo("option", "normalFill", "#D7D1C7");


  // =========== фильтр mixitup =================

  var mixer = mixitup('.our-blog__list');
  $('.our-blog__filter-button').on('click', function () {
    $('.our-blog__filter-button').removeClass('our-blog__filter-button--active')
    $(this).addClass('our-blog__filter-button--active')
  })


  // =========== слайдер SLICKSLIDER =================
 
  $('.reviews__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    waitForAnimate: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1
        }
      }
    ],
  })
  $('.reviews__slider-prev').on('click', function(e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickPrev')
  })
  $('.reviews__slider-next').on('click', function(e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickNext')
  })
   

/*============================= Аккордион ==============================*/
  
 /*  $('.faq__acc-link').on('click', function(e) {
    e.preventDefault()
    if ($(this).hasClass('faq__acc-link--active')) {
      $(this).removeClass('faq__acc-link--active')
      $(this).children('.faq__acc-text').slideUp( 100, function() {
        // Animation complete.
      })
    } else {
      $('.faq__acc-link').removeClass('faq__acc-link--active')
      $('.faq__acc-text').slideUp()
      $(this).addClass('faq__acc-link--active')
      $(this).children('.faq__acc-text').slideDown( 100, function() {
        // Animation complete.
      })
    }
  }) 
  */
 /*============================= Вариант без if ==============================*/
  
  $('.faq__acc-link').on('click', function(e) {
    e.preventDefault()
      /* $('.faq__acc-link').removeClass('faq__acc-link--active')
      $('.faq__acc-text').slideUp( 300, function() {}) */
      $(this).toggleClass('faq__acc-link--active')
      $(this).children('.faq__acc-text').slideToggle( 300, function() {
      })
  })
  


  
  
  // ======= Плавный скролл к якорным ссылкам =======

  $(".header__nav a, .button, .footer__nav a, .logo").on("click", function(e) {
    e.preventDefault()
    var id  = $(this).attr('href'),
    top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })
   

  // ======= Бургер-меню =======

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__nav').hasClass('header__nav--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0);
  $('.burger, .overlay, .header__nav a').on('click', function(e) {
    e.preventDefault()
    $('.header__nav').toggleClass('header__nav--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('open')
  }) 


});