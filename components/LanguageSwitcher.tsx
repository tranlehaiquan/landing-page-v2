'use client';

import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

export function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const handleLanguageChange = (newLocale: string) => {
        router.push(pathname, { locale: newLocale });
    };

    const getLanguageLabel = (locale: string) => {
        switch (locale) {
            case 'vi':
                return 'Tiếng Việt';
            case 'en':
                return 'English';
            case 'id':
                return 'Bahasa Indonesia';
            default:
                return locale;
        }
    };

    return (
        <div className="relative">
            <select
                value={locale}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-4 py-2 lg:px-5 lg:py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
                {routing.locales.map((lng) => (
                    <option key={lng} value={lng}>
                        {getLanguageLabel(lng)}
                    </option>
                ))}
            </select>
        </div>
    );
}
