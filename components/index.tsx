'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import screenshot from '@/public/img/screenshoot_store.png';

export { LanguageSwitcher } from './LanguageSwitcher';
export { Header } from './Header';
export { ThemeProvider } from './providers/themeProvider';
export { ThemeToggle } from './ThemeToggle';

const ExternalURL = {
    facebook: 'https://www.facebook.com/thinkonmay',
    discord:
        'https://discord.com/servers/thinkmay-cloud-pc-1085741898309849128',
    tiktok: 'https://www.tiktok.com/@thinkmaycloudpcvn'
};

export const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <section className="bg-white dark:bg-mica ">
            <div className="max-w-screen-xl px-4 pt-8 mx-auto text-center lg:pt-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    {t('title')}
                </h1>
                <p className="mb-8 text-gray-500 md:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 font-medium">
                    <span className="font-bold text-white text-2xl">
                        {t('description1')}
                    </span>
                    <br />
                    {t('description2')}
                    <br />
                    {t('description3')}
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a
                        href="/play/?app=null&ref=landingpage_heroplay"
                        className="inline-flex items-center justify-center px-5 py-3 text-2xl font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
                        {t('button')}
                    </a>
                    {/* <a
                        href="/pricing"
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Pricing & FAQ
                        <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a> */}
                </div>
                <Image
                    className="mx-auto mb-5 lg:mb-8 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 z-1 dark:hidden"
                    src={screenshot}
                    alt="demo image for thinkmay"
                />
                <Image
                    className="mx-auto mb-5 lg:mb-8 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 hidden dark:block z-1"
                    src={screenshot}
                    alt="demo image for thinkmay"
                />
            </div>
            <div className="pt-48 lg:pb-16 pb-8 -mt-48 bg-gray-50 sm:pt-80 sm:-mt-80 dark:bg-gray-800 z-2">
                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 ">
                    <div className="grid grid-cols-3 gap-20 sm:gap-0 justify-center mt-8 text-gray-500 mb-[128px]">
                        <a
                            href={ExternalURL.tiktok}
                            target="_blank"
                            className="mb-5 mr-5 max-h-24 lg:mb-0 hover:text-gray-900 dark:hover:text-gray-400"
                        >
                            <svg
                                className="w-full h-full text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 512 512"
                            >
                                <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                            </svg>
                        </a>
                        <a
                            href={ExternalURL.facebook}
                            target="_blank"
                            className="mb-5 mr-5 max-h-24 lg:mb-0 hover:text-gray-900 dark:hover:text-gray-400"
                        >
                            <svg
                                className="w-full h-full text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                />
                            </svg>
                        </a>
                        <a
                            href={ExternalURL.discord}
                            target="_blank"
                            className="mb-5 mr-5 max-h-24 lg:mb-0 hover:text-gray-900 dark:hover:text-gray-400"
                        >
                            <svg
                                className="w-full h-full text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Feature = () => {
    const t = useTranslations('Feature');

    return (
        <section className="bg-white dark:bg-mica mb-[128px]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    {t('title')}
                </h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400 lg:px-48">
                    {t('description')}
                </p>
                <div className="mt-8 lg:mt-16 mb-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    <div>
                        <h3 className="mb-4 text-2xl font-bold dark:text-white">
                            {t('feature1Title')}
                        </h3>
                        <p className="mb-4 text-gray-500 dark:text-gray-400">
                            {t('feature1Description')}
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-2xl font-bold dark:text-white">
                            {t('feature2Title')}
                        </h3>
                        <p className="mb-4 text-gray-500 dark:text-gray-400">
                            {t('feature2Description')}
                        </p>
                    </div>
                </div>
                <p className="text-center">
                    <a
                        href="/faq"
                        className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
                    >
                        {t('link')}
                        <svg
                            className="ml-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                        </svg>
                    </a>
                </p>
            </div>
        </section>
    );
};

export const Preview = () => (
    <Image
        className="w-full mt-[256px] mb-[256px] hidden sm:block"
        alt="demo image for thinkmay"
        src="/img/macbook_mockup.png"
        width={1200}
        height={800}
    />
);

export const SocialProof = () => {
    const t = useTranslations('SocialProof');

    return (
        <section className="bg-white dark:bg-mica mb-[256px] mt-[256px]">
            <div className="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16 lg:px-6">
                <div className="col-span-2 mb-8">
                    <p className="text-lg font-medium text-primary-600 dark:text-primary-500">
                        {t('title')}
                    </p>
                    <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                        {t('subtitle')}
                    </h2>
                    <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                        <div>
                            <Link
                                href="/legal"
                                className="inline-flex items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
                            >
                                {t('legality')}
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="/legal"
                                className="inline-flex items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
                            >
                                {t('trust')}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    {[
                        {
                            title: t('infrastructure.title'),
                            desc: t('infrastructure.description')
                        },
                        {
                            title: t('users.title'),
                            desc: t('users.description')
                        },
                        {
                            title: t('coverage.title'),
                            desc: t('coverage.description')
                        },
                        {
                            title: t('guarantee.title'),
                            desc: t('guarantee.description')
                        }
                    ].map((item, index) => (
                        <div key={index}>
                            <h3 className="mb-2 text-2xl font-bold dark:text-white">
                                {item.title}
                            </h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const CTA = () => {
    const t = useTranslations('CTA');

    return (
        <section className="bg-white dark:bg-mica mt-[128px] mb-[128px]">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <Image
                    className="w-full dark:hidden"
                    src="/img/macbook_empty.png"
                    alt="demo image for thinkmay"
                    width={600}
                    height={400}
                />
                <Image
                    className="w-full hidden dark:block"
                    src="/img/macbook_empty.png"
                    alt="demo image for thinkmay"
                    width={600}
                    height={400}
                />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {t('title')}
                    </h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        {t('description')}
                    </p>
                    <a
                        href="/play/?app=null&ref=landingpage_footerplay"
                        className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                    >
                        {t('button')}
                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-gray-50 dark:bg-gray-800">
            <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:-10">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                    <div className="col-span-2">
                        <a
                            href="/play/?app=null&ref=landingpage"
                            className="flex items-center mb-2 text-2xl font-semibold text-gray-900 sm:mb-0 dark:text-white"
                        >
                            <Image
                                src="/img/logo_white.png"
                                className="mr-3 h-6 sm:h-9 hidden dark:block"
                                alt="thinkmay logo"
                                width={36}
                                height={36}
                            />
                            <Image
                                src="/img/logo.png"
                                className="mr-3 h-6 sm:h-9 dark:hidden"
                                alt="thinkmay logo"
                                width={36}
                                height={36}
                            />
                            Thinkmay
                        </a>
                        <p className="my-4 font-light text-gray-500 dark:text-gray-400">
                            {t('description')}
                        </p>
                        {/* Socials */}
                        <ul className="flex mt-5 space-x-6">
                            {[
                                ExternalURL.facebook,
                                ExternalURL.discord,
                                ExternalURL.tiktok
                            ].map((url, i) => (
                                <li key={i}>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="..." />{' '}
                                            {/* Bạn thay từng icon vào nếu muốn giữ chính xác */}
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:mx-auto">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            {t('company')}
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            {['About', 'Careers', 'Brand Center', 'Blog'].map(
                                (item, i) => (
                                    <li key={i} className="mb-4">
                                        <a
                                            href="/play/?app=null&ref=landingpage"
                                            className="hover:underline"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Help */}
                    <div className="lg:mx-auto">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            {t('help')}
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a
                                    href={ExternalURL.discord}
                                    className="hover:underline"
                                >
                                    Discord
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href={ExternalURL.tiktok}
                                    className="hover:underline"
                                >
                                    TikTok
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href={ExternalURL.facebook}
                                    className="hover:underline"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href={ExternalURL.facebook}
                                    className="hover:underline"
                                >
                                    {t('contact')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:mx-auto">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            {t('legal')}
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            {['Privacy Policy', 'Licensing', 'Terms'].map(
                                (item, i) => (
                                    <li key={i} className="mb-4">
                                        <a
                                            href="/legal"
                                            className="hover:underline"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                    © 2021–2025{' '}
                    <a
                        href="/play/?app=null&ref=landingpage"
                        className="hover:underline"
                    >
                        Thinkmay
                    </a>
                    . {t('allRightsReserved')}
                </span>
            </div>
        </footer>
    );
};

export const qa: [string, string][][] = [
    [
        ['q1', 'a1'],
        ['q2', 'a2'],
        ['q3', 'a3'],
        ['q4', 'a4']
    ],
    [
        ['q5', 'a5'],
        ['q6', 'a6'],
        ['q7', 'a7']
    ],
    [
        ['q8', 'a8'],
        ['q9', 'a9'],
        ['q10', 'a10'],
        ['q11', 'a11']
    ]
];

export const FAQ = () => {
    const t = useTranslations('FAQ');

    const renderQA = (
        [questionKey, answerKey]: [string, string],
        index: number
    ) => (
        <div key={index} className="mb-10">
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t(`questions.${questionKey}`)}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
                {t(`questions.${answerKey}`)}
            </p>
        </div>
    );

    return (
        <section className="bg-white dark:bg-mica">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-lg text-center">
                    <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {t('title')}
                    </h2>
                    <p className="mb-8 text-gray-500 lg:text-lg dark:text-gray-400">
                        {t('description')}
                    </p>
                </div>

                <div className="grid pt-8 text-left border-t border-gray-200 dark:border-gray-700 sm:gap-8 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3">
                    {qa.map((col, index) => (
                        <div key={index}>{col.map(renderQA)}</div>
                    ))}
                </div>
            </div>
        </section>
    );
};
