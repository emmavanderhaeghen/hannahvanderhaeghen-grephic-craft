import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 // import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

 // import styles bundle
import 'swiper/css/bundle';
class App {
  constructor() {
    this.button = document.querySelector('.js-nav-button');
    this.lines = document.querySelectorAll('.js-lines');
    this.nav = document.querySelector('.js-nav');
    
    this.containerItems = [...document.querySelectorAll('.fade-in')];
    this.onIsVisible = this.isVisible.bind(this);

    this.init();
  }

  init() {
    this.addEventListeners();
    const containerItems = gsap.utils.toArray('.fade-in');

    containerItems.forEach((containerItem, i) => {
      const anim = gsap.fromTo(containerItem, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
      ScrollTrigger.create({
        trigger: containerItem,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      });
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

  

}

new App();


// const swiper = new Swiper('.js-slider', {
//   // Optional parameters
//   slidesPerView: 1.2,
//   loop: true,
//   allowTouchMove: true,
//   shortSwipes: false,
//   spaceBetween: 15,
//   centeredSlides: true,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false
//   },
//   breakpoints: {
//     768: {
//       centeredSlides: false,
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.button-next',
//     prevEl: '.button-prev',
//   },

// });

// const swiperProject = new Swiper('.js-slider-project', {
//   // Optional parameters
//   slidesPerView: 1,
//   loop: true,
//   allowTouchMove: true,
//   shortSwipes: false,
//   spaceBetween: 30,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.button-next',
//     prevEl: '.button-prev',
//   },

// });