// imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from 'swiper/bundle';  // Swiper bundle with all modules installed
import 'swiper/css/bundle'; // styles bundle

class App {
  constructor() {
    this.button = document.querySelector('.js-nav-button');
    this.lines = document.querySelectorAll('.js-lines');
    this.nav = document.querySelector('.js-nav');
    this.fadeItems = document.querySelectorAll('.fade-in');
    this.staggerItems = document.querySelectorAll('.stagger-in');

    this.scrollTitlesRight = document.querySelectorAll(".scroll-title-right");
    if (this.scrollTitlesRight[0]) this.initScrollTitlesRight();

    this.init();
  }

  init() {
    this.initOpenNav();
    this.initSwiper();
    this.initFadeIn();
    this.initStaggerIn();
    this.initScrollTitlesRight();
  }

  // Open Navigation
  initOpenNav() {
    this.button.addEventListener('click', () => {
      this.button.classList.toggle('open');
      this.nav.classList.toggle('hidden');
      if (this.button.classList.contains('open')) {
        gsap.to(this.lines[0], { duration: 0.2, rotate: '45deg', top: '8px', backgroundColor: 'white' });
        gsap.to(this.lines[1], { duration: 0.2, rotate: '-45deg', bottom: '2px', backgroundColor: 'white' });
      } else {
        gsap.to(this.lines[0], { duration: 0.2, rotate: '0deg', top: '0', backgroundColor: 'black' });
        gsap.to(this.lines[1], { duration: 0.2, rotate: '0deg', top: '0', backgroundColor: 'black' });
      }
    });
  } 

  // Image Swiper
  initSwiper() {
    const swiper = new Swiper('.js-slider', {
      // Optional parameters
      slidesPerView: 1.2,
      loop: true,
      allowTouchMove: true,
      shortSwipes: false,
      spaceBetween: 15,
      centeredSlides: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      breakpoints: {
        768: {
          centeredSlides: false,
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },

    });

    const swiperProject = new Swiper('.js-slider-project', {
      // Optional parameters
      slidesPerView: 1,
      loop: true,
      allowTouchMove: true,
      shortSwipes: false,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },

      // Navigation arrows
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },

    });
  }

  // Fade in when scrolling
  initFadeIn() {
    gsap.registerPlugin(ScrollTrigger);

    this.fadeItems.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 3,
        ease: 'power4.out',
      });
    });
  }

  // Stagger in when scrolling
  initStaggerIn() {
    gsap.registerPlugin(ScrollTrigger);
  
    // this.staggerItems.forEach((item) => {
    //   gsap.from(item, {
    //     scrollTrigger: {
    //       trigger: item,
    //       start: 'top 80%',
    //     },
    //     y: 50,
    //     autoAlpha: 0,
    //     duration: 1.5,
    //     ease: 'power4.out',
    //   });
    // });
  }
  
  // Scroll titles right
  initScrollTitlesRight() {
    for (let i = 0; i < this.scrollTitlesRight.length; i++) {
      const scrollTitle = this.scrollTitlesRight[i];
      gsap.to(scrollTitle, {
        scrollTrigger: {
          trigger: scrollTitle.parentNode,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
        x: window.innerWidth / 6,
        ease: "power2.inOut",
      });
    }
  }
}

new App();


