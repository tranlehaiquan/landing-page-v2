'use cache';

import { createClient } from '@supabase/supabase-js';
import { cacheLife } from 'next/dist/server/use-cache/cache-life';

type App = {
    name: string;
    code_name: string;
    tag: {
        hasaccount: boolean;
    };
    metadata: {
        name: string;
        type: string;
        genres: {
            id: string;
            description: string;
        }[];
        movies: {
            id: number;
            webm: {
                max: string;
            };
            mp4: {
                max: string;
            };
            name: string;
            thumbnail: string;
        }[];
        website: string;
        background: string;
        categories: {
            id: number;
            description: string;
        }[];
        developers: string[];
        drm_notice: string;
        publishers: string[];
        screenshots: {
            id: number;
            path_full: string;
            path_thumbnail: string;
        }[];
        header_image: string;
        release_date: {
            date: string;
        };
        capsule_image: string;
        about_the_game: string;
        background_raw: string;
        capsule_imagev5: string;
        short_description: string;
        support_info?: {
            url?: string;
        };
    };
};

const fetchApps = async (): Promise<App[]> => {
    'use cache';
    cacheLife('hours');
    const supabase = createClient(
        'https://play.2.thinkmay.net:445',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE'
    );
    const { data, error } = await supabase
        .from('stores')
        .select('code_name,name,metadata,management->>kickey')
        .not('metadata', 'is', null)
        .eq('management->>landingpage', 'true')
        .order('management->>priority')
        .limit(9);
    if (error) return [];
    return data.map((x) => ({
        ...x,
        tag: {
            hasaccount: x.kickey == 'true'
        }
    }));
};

export const Applications = async () => {
    // TODO : Add translations for the application names and descriptions
    const apps = await fetchApps();
    const renderApp = (app: App, index: number) => {
        const background = app.metadata.screenshots?.[0]?.path_full;
        if (!background) return null;
        const href = `/play/?app=${app.code_name}&ref=landingpage_game${index}`;
        return (
            <div key={index}>
                <img
                    className="object-cover w-full rounded-lg shadow-lg mb-6"
                    src={background}
                    alt={`image of game ${app.name.toLowerCase()}`}
                />
                <div className="space-y-3 mb-6">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                        <svg
                            aria-hidden="true"
                            className="w-3 h-3 mr-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Game mới
                    </span>
                    <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                        <a href={href} className="hover:underline">
                            {app.name}
                        </a>
                    </h3>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                        {app.metadata.short_description}
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href={href}
                        title=""
                        className="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        role="button"
                    >
                        Chơi ngay
                    </a>
                    {app.metadata?.support_info?.url ? (
                        <a
                            href={app.metadata.support_info.url}
                            target="_blank"
                            title=""
                            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            role="button"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 mr-2 -ml-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            Nhà phát hành
                        </a>
                    ) : null}
                </div>
            </div>
        );
    };

    return (
        <section className="bg-white dark:bg-mica antialiased mb-[128px]">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Những game được chơi nhiều trên Thinkmay
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        Thinkmay CloudPC sở hữu kho game đa dạng và phong phú,
                        <br />
                        ngoài ra bạn còn có thể tự tải những tựa game mà mình
                        yêu thích, hoặc cài đặt thêm các bản mod, tùy biến
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-12 sm:gap-8 lg:gap-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {apps.map(renderApp)}
                </div>
            </div>
        </section>
    );
};
