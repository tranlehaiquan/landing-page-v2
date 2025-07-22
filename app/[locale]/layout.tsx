import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { StateProvider } from '@/components/providers/stateProvider';
import { Footer } from '@/components';
import Script from 'next/script';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Thinkmay Cloud PC - chơi game trên mây',
    description:
        'Work and game on cloud PC - no need to download anything, games on any devices, work from anywhere'
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;

    return (
        <html lang={locale}>
            <head>
                <Script>
                    {`document.documentElement.classList.add('dark');`}
                </Script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <StateProvider locale={locale}>
                    {children}
                    <Footer />
                </StateProvider>
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
