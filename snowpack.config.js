/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-typescript',
  ],
  installOptions: {
    polyfillNode: true,
    installTypes: true,
  },
  buildOptions: {
    clean: true,
  },
  alias: {
    components: './src/components',
    pages: './src/pages'
  }
};
