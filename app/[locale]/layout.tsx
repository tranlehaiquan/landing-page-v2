import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { Footer, Header, ThemeProvider } from '@/components';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

export async function generateMetadata({
    params
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title'),
        description: t('description'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            type: 'website',
            locale: locale,
            alternateLocale: locales.filter((l) => l !== locale)
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title'),
            description: t('description')
        }
    };
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;
    // Ensure that the incoming `locale` is valid
    if (!locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-black dark:text-white`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={true}
                    disableTransitionOnChange={false}
                >
                    <NextIntlClientProvider messages={messages}>
                        <Header />
                        {children}
                        <Footer />
                    </NextIntlClientProvider>
                </ThemeProvider>
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-M7MLPFDFXL"
                    strategy="afterInteractive"
                ></Script>
                <Script strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-M7MLPFDFXL');
                `}
                </Script>
            </body>
        </html>
    );
}
