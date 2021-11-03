import { createApp } from "vue";
import { Quasar, QLayout, QPageContainer, QPage, QBtn } from "quasar"; // Add Quasar components otherwise Pug will not render it
import router from "./router";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";

createApp(App)
  .use(router)
  .use(Quasar, {
    components: {
      // Add Quasar components here
      QLayout,
      QPageContainer,
      QPage,
      QBtn,
    },
    plugins: {}, // import Quasar plugins and add here
    /*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
  })
  .mount("#app");
