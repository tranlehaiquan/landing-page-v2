'use client';

import { Contents } from '@/components/locales';
import { useLanguage } from '@/components/providers/stateProvider';

export default function Page() {
    return <RefundPolicy />;
}

function RefundPolicy() {
    const { t } = useLanguage();
    const refundPackages = [
        {
            title: t(Contents.PACKAGE_499K),
            requestDays: 3,
            maxHours: 18
        },
        {
            title: t(Contents.PACKAGE_299K),
            requestDays: 3,
            maxHours: 12
        },
        {
            title: t(Contents.PACKAGE_199K),
            requestDays: 2,
            maxHours: 5
        }
    ];

    const refundProcessSteps = [
        t(Contents.REFUND_STEP_1),
        t(Contents.REFUND_STEP_2),
        t(Contents.REFUND_STEP_3)
    ];
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:pb-16">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start xl:gap-20">
                    {/* Sidebar */}
                    <div className="w-full lg:max-w-xs lg:sticky lg:top-20">
                        <div className="border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-6 lg:p-8">
                                <h2 className="text-base font-bold text-gray-900 uppercase dark:text-white">
                                    {t(Contents.POLICY)}
                                </h2>
                                <ul className="space-y-4">
                                    <li>
                                        <a
                                            href="/refund"
                                            className="text-base font-medium text-primary-700 dark:text-primary-500"
                                        >
                                            {t(Contents.REFUND_POLICY)}
                                        </a>
                                    </li>
                                </ul>
                                <a
                                    href="https://www.facebook.com/thinkonmay"
                                    target="_blank"
                                    className="w-full text-white items-center justify-center inline-flex bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    {t(Contents.CONTACT_US)}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Nội dung chính */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {t(Contents.REFUND_POLICY)}
                        </h3>
                        <p className="mt-6 text-base text-gray-500 dark:text-gray-400">
                            {t(Contents.REFUND_DESCRIPTION)}
                        </p>

                        <div className="mt-6 space-y-6">
                            {refundPackages.map((pkg, index) => (
                                <div key={index}>
                                    <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                                        {pkg.title}:
                                    </h4>
                                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mt-2 space-y-1">
                                        <li>
                                            {t(Contents.REQUEST_TIME).replace(
                                                '{x}',
                                                pkg.requestDays.toString()
                                            )}
                                        </li>
                                        <li>
                                            {t(Contents.TOTAL_USAGE).replace(
                                                '{y}',
                                                pkg.maxHours.toString()
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            ))}

                            <div>
                                <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                                    {t(Contents.REFUND_PROCESS_TITLE)}
                                </h4>
                                <ol className="list-decimal list-inside text-gray-500 dark:text-gray-400 mt-2 space-y-1">
                                    {refundProcessSteps.map((step, i) => (
                                        <li key={i}>{step}</li>
                                    ))}
                                </ol>
                            </div>

                            <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg mt-6">
                                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                    {t(Contents.REFUND_NOTE)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
