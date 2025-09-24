const handleMobileMenuBtn = () => {
  const headerContent = document.querySelector(".header-content");
  const menuBtn = document.querySelector(".menu-button");

  menuBtn?.addEventListener("click", (e) => {
    menuBtn.classList.toggle("open");
    headerContent?.classList.toggle("mobile-menu-open");
    document.body.classList.toggle("prevent-scroll");
  });
};
handleMobileMenuBtn();

const handleAllSwiperInit = () => {
  const swiperConfigs = {
    heroSwiper: {
      // grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      speed: 500,
      navigation: {
        nextEl: ".hero-swiper-button-next",
        prevEl: ".hero-swiper-button-prev",
      },
    },
    coursesSwiper: {
      // grabCursor: true,
      init: false,
      slidesPerView: "auto",
      spaceBetween: 40,
      // watchSlidesProgress: true,
      centeredSlides: true,
      speed: 500,
      // navigation: {
      //   nextEl: ".hero-swiper-button-next",
      //   prevEl: ".hero-swiper-button-prev",
      // },
      on: {
        init: (s) => {
          // if (window.innerWidth >= 1024) {
          //   s.wrapperEl.style.marginLeft = "20px";
          //   if (s.activeIndex > 1) {
          //     s.wrapperEl.style.marginLeft = "67px";
          //   }
          //   if (s.activeIndex === 0) {
          //     // s.wrapperEl.style.marginLeft = "0";
          //     s.wrapperEl.style.marginLeft = "-67px";
          //   } else {
          //     s.wrapperEl.style.marginLeft = "0";
          //   }
          // }
          s.slidesSizesGrid[0] = 438;
          console.log(s.wrapperEl.scrollWidth);
          console.log(
            (s.wrapperEl.style.width = `${s.wrapperEl.scrollWidth}px`)
          );
          console.log(s.wrapperEl.getBoundingClientRect());
          console.log(s);
          // s.update();
        },
        slideChange: (s) => {
          // s.update();
          console.log(s.slidesSizesGrid);
          // if (window.innerWidth >= 1024) {
          //   s.wrapperEl.style.marginLeft = "20px";
          //   // s.wrapperEl.style.marginLeft = "-160px";
          //   if (s.activeIndex > 1) {
          //     s.wrapperEl.style.marginLeft = "68px";
          //   }
          //   if (s.activeIndex === 0) {
          //     s.wrapperEl.style.marginLeft = "0";
          //     // s.wrapperEl.style.marginLeft = "-67px";
          //   }
          // } else {
          //   s.wrapperEl.style.marginLeft = "0";
          // }
        },
      },
    },
    // heroSwiper: {
    //   grabCursor: true,
    //   slidesPerView: "auto",
    //   // spaceBetween: 24,
    //   centeredSlides: true,
    //   effect: "creative",
    //   creativeEffect: {
    //     prev: {
    //       translate: ["-100%", 0, 0],
    //       scale: 0.9,
    //     },
    //     next: {
    //       translate: ["100%", 0, 0],
    //       scale: 0.9,
    //     },
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // },
    // heroSwiper: {
    //   slidesPerView: "auto",
    //   spaceBetween: 24,
    //   centeredSlides: true,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // },
  };

  for (swiperId in swiperConfigs) {
    // if (swiperConfigs.hasOwnProperty(swiperId)) {
    const swiperElement = document.getElementById(swiperId);
    const config = swiperConfigs[swiperId];

    if (swiperElement) {
      console.log(swiperElement.id);

      if (swiperElement.id === "coursesSwiper") {
        const coursesSwiper = new Swiper(swiperElement, config);

        let swiperInitialized = false;

        swiperElement.addEventListener("transitionend", () => {
          if (!swiperInitialized) {
            coursesSwiper.init();
            swiperInitialized = true;
            console.log("Swiper has been initialized after CSS transition.");
          }
        });
      } else {
        new Swiper(swiperElement, config);
      }
    }
    // }
  }
};
handleAllSwiperInit();
