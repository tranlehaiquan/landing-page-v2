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

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <head>
                <Script>
                    {`document.documentElement.classList.add('dark');`}
                </Script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <StateProvider>
                    {children}
                    <Footer />
                </StateProvider>
                <Script
                    src="https://play.2.thinkmay.net:446/api/script.js"
                    data-track-errors="true"
                    data-session-replay="true"
                    data-site-id="9"
                    data-api-key="rb_7f2d91be37169e808a643691f1916c16"
                    defer
                ></Script>
            </body>
        </html>
    );
}
