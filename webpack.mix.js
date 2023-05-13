const mix = require("laravel-mix");

mix
  .js("./src/scripts/app.js", "app.js")
  .css("./src/styles/styles.css", "app.css")
  .setPublicPath("./web/dist")
  .version();

mix.browserSync({
  proxy: "https://hannahvanderhaeghen-grephic-craft.ddev.site/",
  https: true,
  ui: false,
  open: false,
  notify: false,
});