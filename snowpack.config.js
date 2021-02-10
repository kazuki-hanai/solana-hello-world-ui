/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: '/',
        src: '/_dist_',
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-postcss',
    ],
    devOptions: {
        /* ... */
    },
    buildOptions: {
    },
    packageOptions: {
        source: "local",
        polyfillNode: true
    },
    alias: {
        '@/': './src',
    },
};
