# Hannah Van der Haeghen - Visual Artist - Craft project

## Overview
This documentation provides an overview and guidelines for working with this Craft CMS project that utilizes various dependencies. The project includes the following dependencies:

### devDependencies
- browser-sync
- browser-sync-webpack-plugin
- eslint
- eslint-plugin-vue
- laravel-mix
- resolve-url-loader
- vue

### dependencies
- autoprefixer
- gsap
- postcss
- swiper
- tailwindcss

## Getting Started
To get started with the Craft CMS project, follow the steps below:

1. Clone the project repository to your local development environment.
2. Ensure that you have Node.js and npm (Node Package Manager) installed on your machine.
3. Open a terminal and navigate to the project root directory.
4. Run the command `npm install` and `composer install` to install all the project dependencies listed in the `package.json` file.
5. Once the installation is complete, you can start working on the project. Don't forget to insert the database and the .env file.

## Development Server
The project uses **BrowserSync** as a development server. BrowserSync provides live browser reloading, synchronization across multiple devices, CSS injection, and other useful features during the development process. To start the development server, run the command `npm run dev`.


## Code Quality and Styling
The project includes **ESLint** for static code analysis and code quality checks. ESLint helps identify potential errors, coding style issues, and other problems in the JavaScript code. Additionally, the **eslint-plugin-vue** plugin extends ESLint with specific rules for checking Vue.js code.

## CSS Processing
The project uses several tools for CSS processing:

- **Autoprefixer**: This PostCSS plugin automatically adds CSS vendor prefixes to ensure proper rendering in different browsers.
- **PostCSS**: PostCSS is a CSS transformation tool that is often used in conjunction with other tools and plugins to automate and enhance CSS processing.
- **Resolve-url-loader**: This Webpack loader resolves relative URLs in CSS files, ensuring they are correctly processed in the resulting bundled file.
- **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework that simplifies the creation of custom user interfaces through reusable CSS classes.

## Animation and Slider Components
The project includes the following dependencies for animation and slider components:

- **GSAP (GreenSock Animation Platform)**: GSAP is a powerful JavaScript library for creating animations and is often used to build advanced animations in web applications.
- **Swiper**: Swiper is a modern, mobile-friendly JavaScript library for creating touch sliders and carousel components.

## Additional Resources
For more information and documentation on the various dependencies used in the project, refer to the official documentation and websites of each respective dependency.

- [Craft CMS Documentation](https://craftcms.com/docs)
- [BrowserSync Documentation](https://www.browsersync.io/docs)
- [ESLint Documentation](https://eslint.org/docs)
- [Vue.js Documentation](https://v3.vuejs.org/guide/introduction.html)
- [Laravel Mix Documentation](https://laravel-mix.com/docs)
- [Autoprefixer Documentation](https://autoprefixer.github.io)
- [GSAP Documentation](https://greensock.com/docs)
- [PostCSS Documentation](https://postcss.org)
- [Swiper Documentation](https://swiperjs.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Support
Should you encounter any issues or questions, you can contact me on emmavand24@student.arteveldehs.be or send me a message on teams. :)

## Author
This project was made by yours truly,
Emma Van der Haeghen <3

## License
MIT License

Copyright (c) 2023 Emma Van der Haeghen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
