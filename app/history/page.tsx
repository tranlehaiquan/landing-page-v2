'use client';
import { info, loggedin } from '@/api/auth';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';

export type PlanName =
    | 'month1'
    | 'month2'
    | 'week1'
    | 'week2'
    | 'ramcpu20'
    | '50GB'
    | '100GB'
    | '200GB';

interface Deposit {
    amount: number;
    created_at: string;
    id: number;
}
interface Order {
    id: string;
    pay_at: string;
    plan_name: PlanName;
}

type RefundRequest = {
    id: number;
    created_at: string;
    amount: string;
};

interface DepositStatus {
    created_at: string;
    amount: number;
    status: string;
}

interface PlanStatus {
    created_at: string;
    amount: number;
    plan_name: string;
}

export default function Page() {
    const [loggedIn, setloggedIn] = useState(false);
    const [email, setEmail] = useState(null);
    const [supabase, setSupabase] = useState<SupabaseClient | null>();
    const [depositHistory, setDepositHistory] = useState<Deposit[]>([]);

    useEffect(() => {
        setSupabase(
            createClient(
                'https://play.2.thinkmay.net:445',
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzU0OTMxNjAwLCJleHAiOjE5MTI2OTgwMDB9.m7qcf4j3u1oPoqIsCqU3JHqYEO0DV2PmoPXGcdUAdR8'
            )
        );

        const i = setInterval(() => {
            const loggedIn = loggedin();
            setloggedIn(loggedIn);
            if (!loggedIn) return;

            const inf = info();
            setEmail(inf?.email);
        }, 500);

        return () => {
            clearInterval(i);
        };
    }, []);

    const fetch_refund_request = async (email: string) => {
        if (supabase == null) return [];
        const { data, error: err } = await supabase
            .from('refund_request')
            .select('id,created_at,amount')
            .eq('user', email);
        if (err) return err;
        return data;
    };

    const fetch_payment_pocket = async (email: string) => {
        if (supabase == null) return [];
        const { data, error: error } = await supabase.rpc(
            'get_payment_pocket',
            {
                email
            }
        );
        if (error) throw error;
        return data;
    };

    const fetch_pocket_balance = async (email: string) => {
        if (supabase == null) return [];
        const { error, data } = await supabase.rpc('get_pocket_balance', {
            email
        });
        if (error) throw error;
        return data;
    };

    const fetch_deposit_history = async (email: string) => {
        if (supabase == null) return [];
        const { error, data } = await supabase.rpc('get_deposit_history', {
            email: email
        });
        if (error) throw error;
        return data as Deposit[];
    };
    const fetch_payment_history = async (email: string) => {
        if (supabase == null) return [];
        const { error, data } = await supabase.rpc('get_payment_history', {
            email: email
        });
        if (error) throw error;
        return data;
    };

    const fetch_all = async (email: string) => {
        // const payment_pockets = await fetch_payment_pocket(email);
        // const refund_requests = await fetch_refund_request(email);
        // const payment_history = await fetch_payment_history(email);
        // const balance = await fetch_pocket_balance(email);
        const deposit_history = await fetch_deposit_history(email);
        setDepositHistory(deposit_history);
    };

    useEffect(() => {
        if (email == null || supabase == null) return;
        fetch_all(email);
    }, [email]);

    const renderPayment = (payment: Deposit, index: number) => {
        console.log(payment);
        return (
            <div
                key={index}
                className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
                <div className="items-start justify-between border-b border-gray-100 pb-4 dark:border-gray-700 md:flex lg:block xl:flex">
                    <div className="mb-4 justify-between sm:flex sm:items-center md:mb-0 md:block lg:mb-4 lg:flex xl:mb-0 xl:block">
                        <h3 className="dark:text-gry-400 mb-2 text-gray-500 sm:mb-0 md:mb-2">
                            Order ID:
                            <a
                                href="#"
                                className="font-medium text-gray-900 hover:underline dark:text-white"
                            >
                                #{payment.id}
                            </a>
                        </h3>
                        {/* <button
                            type="button"
                            className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
                        >
                            <svg
                                className="me-2 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                                />
                            </svg>
                            Download invoice
                        </button> */}
                    </div>
                    <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                        {/* <button
                            id="deleteOrderButton4"
                            data-modal-target="deleteOrderModal2"
                            data-modal-toggle="deleteOrderModal2"
                            type="button"
                            className="w-full rounded-lg bg-red-700 px-3 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 sm:w-auto"
                        >
                            Cancel order
                        </button> */}
                        {/* <a
                            href="#"
                            className="inline-flex w-full items-center justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 sm:w-auto"
                        >
                            <svg
                                className="-ms-0.5 me-1.5 h-4 w-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
                                />
                            </svg>
                            Track order
                        </a>
                        <a
                            href="#"
                            className="inline-flex w-full justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 sm:w-auto"
                        >
                            Order details
                        </a> */}
                    </div>
                </div>
                <div className="mb-4 items-center sm:flex sm:flex-wrap xl:flex">
                    <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                        <dt className="me-2 font-medium text-gray-900 dark:text-white">
                            Order date:
                        </dt>
                        <dd>
                            {new Date(payment.created_at).toLocaleDateString()}
                        </dd>
                    </dl>
                    <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                        <dt className="me-2 font-medium text-gray-900 dark:text-white">
                            Amount
                        </dt>
                        <dd>{payment.amount}k</dd>
                    </dl>
                    <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                        <dt className="me-2 font-medium text-gray-900 dark:text-white">
                            Payment method:
                        </dt>
                        <dd className="flex items-center">
                            {/* <img
                                className="h-4 w-auto dark:hidden"
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                                alt=""
                            />
                            <img
                                className="hidden h-4 w-auto dark:flex"
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
                                alt=""
                            /> */}
                            <span className="ms-1">VietQR</span>
                        </dd>
                    </dl>
                </div>
                {/* <div
                    className="flex items-center rounded-lg bg-orange-50 px-4 py-3 text-sm text-orange-800 dark:bg-gray-700 dark:text-orange-300"
                    role="alert"
                >
                    <svg
                        className="me-2 hidden h-4 w-4 flex-shrink-0 sm:flex"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                        />
                    </svg>
                </div> */}
            </div>
        );
    };

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-8">
                    My orders
                </h2>
                <div className="gap-8 lg:flex">
                    <aside
                        id="sidebar"
                        className="hidden h-full w-80 shrink-0 overflow-y-auto border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:block lg:rounded-lg"
                    >
                        <button
                            id="dropdownUserNameButton"
                            data-dropdown-toggle="dropdownUserName"
                            type="button"
                            className="dark:hover-bg-gray-700 mb-3 flex w-full items-center justify-between rounded-lg bg-white p-2 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            <span className="sr-only">Open user menu</span>
                            <div className="flex w-full items-center justify-between">
                                <div className="flex items-center">
                                    <img
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                        className="mr-3 h-8 w-8 rounded-md"
                                        alt="Bonnie avatar"
                                    />
                                    <div className="text-left">
                                        <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                                            {email}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            {email}
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    className="h-5 w-5 text-gray-900 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m8 15 4 4 4-4m0-6-4-4-4 4"
                                    />
                                </svg>
                            </div>
                        </button>
                        <div
                            id="dropdownUserName"
                            className="z-10 hidden w-[294px] divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                            data-popper-placement="bottom"
                        >
                            <a
                                href="#"
                                className="flex items-center rounded px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <img
                                    src="/img/logo.png"
                                    className="mr-3 h-8 w-8 rounded"
                                    alt="Michael avatar"
                                />
                                <div className="text-left">
                                    <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                                        Flowbite LLC (Company)
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        company@flowbite.com
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* <div className="mb-4 w-full border-y border-gray-100 py-4 dark:border-gray-700">
                            <ul className="grid grid-cols-3 gap-2">
                                <li>
                                    <a
                                        href="#"
                                        className="group flex flex-col items-center justify-center rounded-xl bg-primary-50 p-2.5 hover:bg-primary-100 dark:bg-primary-900 dark:hover:bg-primary-800"
                                    >
                                        <span className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-200 dark:bg-primary-800  dark:group-hover:bg-primary-700">
                                            <svg
                                                className="h-5 w-5 text-primary-600 dark:text-primary-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="square"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-primary-600 dark:text-primary-300">
                                            Profile
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="group flex flex-col items-center justify-center rounded-xl bg-purple-50 p-2.5 hover:bg-purple-100 dark:bg-purple-900 dark:hover:bg-purple-800"
                                    >
                                        <span className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 dark:bg-purple-800  dark:group-hover:bg-purple-700">
                                            <svg
                                                className="h-5 w-5 text-purple-600 dark:text-purple-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-purple-600 dark:text-purple-300">
                                            Gifts
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="group flex flex-col items-center justify-center rounded-xl bg-teal-50 p-2.5 hover:bg-teal-100 dark:bg-teal-900 dark:hover:bg-teal-800"
                                    >
                                        <span className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 group-hover:bg-teal-200 dark:bg-teal-800  dark:group-hover:bg-teal-700">
                                            <svg
                                                className="h-5 w-5 text-teal-600 dark:text-teal-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-teal-600 dark:text-teal-300">
                                            Wallet
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div> */}

                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                                        />
                                    </svg>
                                    <span className="ml-3">My orders</span>
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    href="#"
                                    className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                                        />
                                    </svg>
                                    <span className="ml-3 flex-1 whitespace-nowrap">
                                        Reviews
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                                        />
                                    </svg>
                                    <span className="ml-3 flex-1 whitespace-nowrap">
                                        Delivery addresses
                                    </span>
                                </a>
                            </li> */}
                            {/* <li>
                                <a
                                    href="#"
                                    className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                    <span className="ml-3 flex-1 whitespace-nowrap">
                                        Recently viewed
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                        />
                                    </svg>
                                    <span className="ml-3 flex-1 whitespace-nowrap">
                                        Favourite items
                                    </span>
                                </a>
                            </li> */}
                        </ul>
                        <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5 dark:border-gray-700">
                            {/* <li>
                                <a
                                    href="#"
                                    className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                        />
                                    </svg>
                                    <span className="ml-3 flex-1 whitespace-nowrap">
                                        Settings
                                    </span>
                                </a>
                            </li> */}
                            <li>
                                <a
                                    href="#"
                                    className="group flex items-center rounded-lg p-2 text-base font-medium text-red-600 hover:bg-red-100 dark:text-red-500 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="h-6 w-6 flex-shrink-0 text-red-600 transition duration-75 dark:text-red-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                                        />
                                    </svg>
                                    <span className="ml-3 flex-1 whitespace-nowrap">
                                        Log out
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </aside>
                    <div className="w-full">
                        <div className="mb-4 items-center justify-between md:flex md:space-x-4">
                            <form className="w-full flex-1 md:mr-4 md:max-w-md">
                                <label
                                    htmlFor="default-search"
                                    className="sr-only text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg
                                            aria-hidden="true"
                                            className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                        placeholder="Search by Order ID"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute bottom-0 right-0 top-0 rounded-r-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>

                            <div className="mt-4 items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">
                                <button
                                    id="filterDropdownButtonLabel2"
                                    data-dropdown-toggle="filterDropdownButton"
                                    type="button"
                                    className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                                >
                                    <svg
                                        className="-ms-0.5 me-1.5 h-4 w-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                                        />
                                    </svg>
                                    Filter by: Completed
                                    <svg
                                        className="-me-0.5 ms-1.5 h-4 w-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 9-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="filterDropdownButton"
                                    className="z-10 hidden w-36 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                >
                                    <ul
                                        className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                        aria-labelledby="filterDropdownButtonLabel"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <span className="me-2 h-2.5 w-2.5 rounded-full bg-green-500"></span>
                                                <span>Completed</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <span className="me-2 h-2.5 w-2.5 rounded-full bg-primary-600"></span>
                                                Pre-order
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <span className="me-2 h-2.5 w-2.5 rounded-full bg-yellow-300"></span>
                                                In transit
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <span className="me-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
                                                Cancelled
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <button
                                    id="dateDropdownButtonLabel2"
                                    data-dropdown-toggle="dateDropdownButton2"
                                    type="button"
                                    className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                                >
                                    Last 7 days
                                    <svg
                                        className="-me-0.5 ms-1.5 h-4 w-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 9-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="dateDropdownButton2"
                                    className="z-10 hidden w-80 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                                >
                                    <ul
                                        className="divide-y divide-gray-200 text-sm font-medium dark:divide-gray-700"
                                        aria-labelledby="dateDropdownButtonLabel2"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600"
                                            >
                                                Today
                                                <span className="font-normal text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                                    {' '}
                                                    Aug 21, 2023 - Aug 21,
                                                    2023{' '}
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600"
                                            >
                                                Yesterday
                                                <span className="font-normal text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                                    {' '}
                                                    Aug 20, 2023 - Aug 21,
                                                    2023{' '}
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600"
                                            >
                                                Last 7 days
                                                <span className="font-normal text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                                    {' '}
                                                    Aug 21, 2023 - Aug 21,
                                                    2023{' '}
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600"
                                            >
                                                Last Month
                                                <span className="font-normal text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                                    {' '}
                                                    Aug 15, 2023 - Aug 21,
                                                    2023{' '}
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600"
                                            >
                                                Last year
                                                <span className="font-normal text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                                    {' '}
                                                    Jan 1, 2023 - Aug 21,
                                                    2023{' '}
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#"
                                                className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600"
                                            >
                                                All time
                                                <span className="font-normal text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                                    {' '}
                                                    Feb 1, 2020 - Aug 21,
                                                    2023{' '}
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {depositHistory.map(renderPayment)}
                    </div>
                </div>
                <div
                    id="deleteOrderModal2"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
                >
                    <div className="relative h-full w-full max-w-md p-4 md:h-auto">
                        <div className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
                            <button
                                type="button"
                                className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="deleteOrderModal2"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                                <svg
                                    className="h-8 w-8 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                    />
                                </svg>
                                <span className="sr-only">Danger icon</span>
                            </div>
                            <p className="mb-3.5 text-gray-900 dark:text-white">
                                <span className="font-medium text-primary-700 dark:text-primary-500">
                                    @bonniegr
                                </span>
                                , are you sure you want to delete this order
                                from your account?
                            </p>
                            <p className="mb-4 text-gray-500 dark:text-gray-300">
                                This action cannot be undone.
                            </p>
                            <div className="flex items-center justify-center space-x-4">
                                <button
                                    data-modal-toggle="deleteOrderModal2"
                                    type="button"
                                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                                >
                                    No, cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >
                                    Yes, delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
