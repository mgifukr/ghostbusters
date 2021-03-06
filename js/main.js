$(document).ready(function () {
   const mMenuBtn = $('.m-menu-button');
   const mMenu = $('.m-menu');
   const tab = $('.tab');
   const mSearchButton = $('.m-search-button');
   mSearchButton.on('click', function () {
      $('.search-input').toggleClass('active');
   });
   mMenuBtn.on('click', function () {
      $('.search-input').removeClass('active');
      mMenu.toggleClass('active');
      $('body').toggleClass('no-scroll');
   });
   tab.on('click', function () {
      tab.removeClass('active');
      $(this).toggleClass('active');
      let activeTabContent = $(this).attr('data-target');
      $('.tabs-content').removeClass('visible');
      $(activeTabContent).toggleClass('visible');
   });
   var mySwiper = new Swiper('.swiper-container', {
      spaceBetween: 25,
      navigation: {
         nextEl: ".button-next",
      },
      loop: true,
      breakpoints: {
         992: {
            slidesPerView: 4,
         },
         768: {
            slidesPerView: 2,
         },
         320: {
            slidesPerView: 1,

         },
      },

   });
});