import Link from "next/link";
import { getCart } from "@/store/slices/cartSlice";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

export default function Navbar() {
    const [firstTime, setFirstTime] = useState(true)
    const [classForCart, setClassForCart] = useState('')
    const cart = useSelector(getCart);
    useEffect(() => {
        if (firstTime)
            setFirstTime(false);
        else {
            shakeWithTimeout()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])

    function shakeWithTimeout() {
        setClassForCart('shaker')
        setTimeout(() => {
            setClassForCart('')
        }, 500);
    }

    return (
        <nav className="bg-slate-100 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <span className="text-slate-600 text-2xl font-semibold whitespace-nowrap dark:text-white">Asif&apos;s eStore</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-slate-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                            <Link href="/checkout" className={`${classForCart} relative flex`}>
                                <svg className="flex-1 w-10 h-10 fill-current" viewBox="0 0 24 24">
                                    <path fill="grey" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                                </svg>
                                <span onChange={(e) => console.log('change val')} className="absolute right-0 top-0 rounded-full bg-blue-400 w-5 h-5 top right p-0.5 m-0 text-white font-mono text-sm  leading-tight text-center">
                                    {cart.length}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
