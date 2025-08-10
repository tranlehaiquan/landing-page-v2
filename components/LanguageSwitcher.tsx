'use client';

import { useRouter, usePathname } from '@/i18n/routing';
import { useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Locale } from '@/i18n/config';
import { useState, useRef, useEffect } from 'react';

interface LanguageOption {
    code: Locale;
    label: string;
    flag: string;
}

export function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const locale = useLocale() as Locale;
    const t = useTranslations('Common');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages: LanguageOption[] = [
        { code: 'vi' as Locale, label: 'Tiếng Việt', flag: '🇻🇳' },
        { code: 'en' as Locale, label: 'English', flag: '🇺🇸' },
        { code: 'id' as Locale, label: 'Bahasa Indonesia', flag: '🇮🇩' }
    ];

    const currentLanguage =
        languages.find((lang) => lang.code === locale) || languages[0];

    const handleLanguageChange = (newLocale: Locale) => {
        // Skip navigation if the locale is the same
        if (newLocale === locale) {
            setIsOpen(false);
            return;
        }

        // Preserve query parameters during locale switch
        const search = searchParams.toString();
        const fullPath = search ? `${pathname}?${search}` : pathname;

        router.push(fullPath, { locale: newLocale });
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close dropdown on escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={t('selectLanguage')}
                aria-expanded={isOpen}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-400 min-w-[140px]"
            >
                <span className="text-lg">{currentLanguage.flag}</span>
                <span className="hidden sm:inline">
                    {currentLanguage.label}
                </span>
                <span className="sm:hidden">
                    {currentLanguage.code.toUpperCase()}
                </span>
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 dark:bg-gray-800 dark:border-gray-600 animate-in fade-in duration-200">
                    <div className="py-1">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() =>
                                    handleLanguageChange(language.code)
                                }
                                className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                                    language.code === locale
                                        ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300'
                                        : 'text-gray-700 dark:text-gray-200'
                                }`}
                            >
                                <span className="text-lg">{language.flag}</span>
                                <span className="font-medium">
                                    {language.label}
                                </span>
                                {language.code === locale && (
                                    <svg
                                        className="w-4 h-4 ml-auto text-primary-600 dark:text-primary-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
