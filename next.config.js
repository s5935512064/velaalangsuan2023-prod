// @ts-check

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {

    images: {
        domains: ['scontent-kut2-2.xx.fbcdn.net', 'scontent.fbkk10-1.fna.fbcdn.net', "scontent-kut2-1.xx.fbcdn.net", "scontent.fbkk14-1.fna.fbcdn.net", "https://velaalangsuan.com/", "scontent-kul2-1.xx.fbcdn.net"],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 600,
        unoptimized: true,
    },
    swcMinify: true,
    transpilePackages: ['@fancyapps/ui', 'vanilla-cookieconsent'],
    webpack: (config, { isServer }) => {
        if (isServer) {
            // @ts-ignore
            require("./scripts/sitemap-generator");
        }
        return config;
    },

}

module.exports = withBundleAnalyzer(nextConfig)


