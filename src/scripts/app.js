import '/src/styles/styles.css';

class App {
  constructor() {
    // Set Variables
    this.init();
  }

  init() {
    this.imports();
  }

  imports() {
    import(/* webpackChunkName: "chilli-log-component" */ './components/grephic-log').then(({ default: Module }) => new Module());
    import(/* webpackChunkName: "nav" */ './components/nav').then(({ default: Module }) => new Module());
    // if (document.querySelector('.js-validate')) import(/* webpackChunkName: "validation-component" */ './components/validation').then(({ default: Module }) => new Module());
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new App();
});
