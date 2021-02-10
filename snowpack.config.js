/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: '/',
        src: '/_dist_/',
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-postcss',
        [
            'snowpack-plugin-baseurl-handler',
            {
                exts: ['.html'],
                baseUrl: '/solana-hello-world-ui',
                debug: true,
            },
        ],
    ],
    devOptions: {
        /* ... */
    },
    buildOptions: {
    },
    packageOptions: {
        source: 'local',
        polyfillNode: true,
    },
    alias: {
        '@/': './src',
    },
};
