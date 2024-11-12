const swiperAdvantages = new Swiper('.about-us__swiper', {
    spaceBetween: 20,
    loop: true,
    simulateTouch: true,
    slidesPerView: 1.29,
    centeredSlides: true,
    

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },

    breakpoints: {
        1025: {
            spaceBetween: 0,
            loop: false,
            slidesPerView: 3,
            centeredSlides: false,
            simulateTouch: false,
            watchSlidesVisibility: false,
            pagination: {
                enabled: false,
                el: '.swiper-pagination',
            }
        },

        400: {
            slidesPerView: 1.4,
        },

        475: {
            slidesPerView: 1.5,
        },

        550: {
            slidesPerView: 1.7,
        },

        700: {
            slidesPerView: 2,
        },

        900: {
            slidesPerView: 2.5,
        }
    }
  });


  const swiperReviews = new Swiper('.reviews-swiper', {
    spaceBetween: 20,
    loop: true,
    simulateTouch: true,
    slidesPerView: 1.29,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },
    navigation: {
        enabled: false,
      },

    breakpoints: {
        1025: {
            spaceBetween: 44,
            slidesPerView: 3,
            simulateTouch: false,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            pagination: {
                enabled: false,
                el: '.swiper-pagination',
            }
        },

        400: {
            slidesPerView: 1.4,
        },

        475: {
            slidesPerView: 1.5,
        },

        550: {
            slidesPerView: 1.7,
        },

        700: {
            slidesPerView: 2,
        },

        900: {
            slidesPerView: 2.5,
        }
    }
  });
