import pkg from "./package";
import * as path from "path";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "http://www.samdodds.com"
    : "http://localhost:3000";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: ["~/assets/scss/site.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/uikit.js", ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL,
    browserBaseURL: baseURL
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias = {
        ...config.resolve.alias,
        scss: path.join(__dirname, "assets/scss")
      };
    }
  }
};
