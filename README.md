# Password Generator

Vanilla JavaScript password generator web application using HTML Custom Elements.
**[Live demo](https://pg.zielinsk.im/)** hosted on Netlify.

---

#### Features and details
  - Lightweight (~30kB total size) and fast (scores 100/100 in Lighthouse performance audit)
  - UI responds to any changes immediately
  - Easy to use - a *"copy to clipboard"* button
  - Fits most resolutions - suitable for mobile devices
  - Custom [Webpack](https://webpack.js.org) scripts for development and production builds

#### Usage and development
The app comes with two main scripts you can use to either build a final bundle or further develop the project.

Development server with live-reload feature can be initiated using `npm start` command.
Creating production bundles is as easy as typing `npm run build`. These can be found in the `/dist` directory.

---

#### Notes

My main goal with this project was to get familiar with HTML Custom Elements and use them to build something useful. With this being said - this project isn't fully tested and it built around a somewhat new technology, it might not be the best idea to run it in a real-world environment.