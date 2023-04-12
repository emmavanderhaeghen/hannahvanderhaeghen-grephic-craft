import { gsap } from "gsap";
 // import Swiper bundle with all modules installed
 import Swiper from 'swiper/bundle';

 // import styles bundle
 import 'swiper/css/bundle';
class App {
  constructor() {
    this.button = document.querySelector('.js-nav-button');
    this.lines = document.querySelectorAll('.js-lines');
    this.nav = document.querySelector('.js-nav');

    this.init();
  }

  init() {
    this.log();
    this.addEventListeners();

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

  addEventListeners() {
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

  log() {
    // console.clear();
    console.log('\ngrephic was here\nhttps://pgm-emmavanderhaeghen.github.io/grephic\n ');
  }
}

new App();






