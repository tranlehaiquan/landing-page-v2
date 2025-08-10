import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
    experimental: {
        useCache: true
    },
    images: {
        remotePatterns: [
            // TODO: download all images and then remove remotePatterns if no need
            {
                protocol: 'https',
                hostname: 'flowbite.s3.amazonaws.com'
            },
            {
                protocol: 'https',
                hostname: 'play.2.thinkmay.net'
            },
            {
                protocol: 'https',
                hostname: 'shared.akamai.steamstatic.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.vn.garenanow.com'
            },
            {
                protocol: 'https',
                hostname: 'pub-d00f534024b04d0e8036586fc78a41fa.r2.dev'
            }
        ]
    }
};

export default withNextIntl(nextConfig);
