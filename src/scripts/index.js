// import './components/grephic-log';
// import './components/nav';
import { gsap } from "gsap";
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






