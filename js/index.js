
   var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      }
    }
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,       // one image per slide
    spaceBetween: 20,
    loop: true,             // enable looping
    autoplay: {
      delay: 2000,          // 2 seconds per slide
      disableOnInteraction: false, // keeps auto-slide even if user interacts
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {          // responsive: can show more slides on larger screens
         992: { slidesPerView: 2 },  // 2 per slide on tablets
      768: { slidesPerView: 2 },  // 2 per slide on tablets
      1200: { slidesPerView: 5 }  // 3 per slide on desktops
    }
  });




