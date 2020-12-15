/** @type {import("snowpack").SnowpackUserConfig } */
const autoPreprocess = require("svelte-preprocess");

module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    ["@snowpack/plugin-svelte", {
      preprocess: autoPreprocess({
        defaults: {
          script: "typescript",
        },
      }),
    }],
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
