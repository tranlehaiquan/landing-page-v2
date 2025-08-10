import { MetadataRoute } from 'next';
import { Locale } from 'next-intl';
import { getPathname } from '@/i18n/routing';
import { routing } from '@/i18n/routing';

// Adapt this as necessary - you should replace with your actual domain
const host = 'https://thinkmay.net';

export default function sitemap(): MetadataRoute.Sitemap {
    // Define all available routes in your application
    const routes = [
        '/', // Home page
        // '/blog', // Blog listing
        // '/blog/articles', // Blog articles
        '/faq', // FAQ page
        '/history', // History page
        '/legal', // Legal page
        '/pricing', // Pricing page
        '/refund', // Refund page
        '/refund/policy' // Refund policy page
    ];

    // Generate sitemap entries for all routes and locales
    return routes.flatMap((route) => getEntries(route));
}

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntries(href: Href) {
    return routing.locales.map((locale) => ({
        url: getUrl(href, locale),
        lastModified: new Date(),
        changeFrequency: getChangeFrequency(href),
        priority: getPriority(href),
        alternates: {
            languages: Object.fromEntries(
                routing.locales.map((cur) => [cur, getUrl(href, cur)])
            )
        }
    }));
}

function getUrl(href: Href, locale: Locale) {
    const pathname = getPathname({ locale, href });
    return host + pathname;
}

function getChangeFrequency(
    href: Href
): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
    // Customize change frequency based on route
    const routeString = typeof href === 'string' ? href : href.pathname;
    switch (routeString) {
        case '/':
            return 'weekly';
        // case '/blog':
        // case '/blog/articles':
        //     return 'daily';
        case '/pricing':
            return 'monthly';
        case '/faq':
        case '/legal':
        case '/refund/policy':
            return 'monthly';
        default:
            return 'monthly';
    }
}

function getPriority(href: Href): number {
    // Customize priority based on route importance
    const routeString = typeof href === 'string' ? href : href.pathname;
    switch (routeString) {
        case '/':
            return 1.0;
        case '/pricing':
            return 0.9;
        // case '/blog':
        //     return 0.8;
        case '/faq':
            return 0.7;
        // case '/blog/articles':
        //     return 0.6;
        default:
            return 0.5;
    }
}
