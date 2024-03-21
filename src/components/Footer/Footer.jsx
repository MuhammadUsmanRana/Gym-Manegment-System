import React from 'react';

const Footer = () => {
    return (
        <footer className="body-font bottom-0 w-full">
            <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <span className="flex title-font font-medium items-center md:justify-start justify-center">
                        <span className="ml-3 text-xl hover:text-gray-400">GymLife</span>
                    </span>
                    <p className="mt-2 text-sm">
                        Air plant banjo lyft occupy retro adaptogen indego
                    </p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                            Quick Links
                        </h2>
                        <nav className="list-none mb-10">
                            <li className='mb-2'>
                                <span className=" hover:text-gray-400 cursor-pointer">About Us</span>
                            </li>
                            <li className='mb-2'>
                                <span className=" hover:text-gray-400 cursor-pointer">Services</span>
                            </li>
                            <li className='mb-2'>
                                <span className=" hover:text-gray-400 cursor-pointer">Contact Us</span>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                            Products
                        </h2>
                        <nav className="list-none mb-10">
                            <li className='mb-2'>
                                <span className="hover:text-gray-400 cursor-pointer">About Us</span>
                            </li>
                            <li className='mb-2'>
                                <span className="hover:text-gray-400 cursor-pointer">Services</span>
                            </li>
                            <li className='mb-2'>
                                <span className="hover:text-gray-400 cursor-pointer">Contact Us</span>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                            Features
                        </h2>
                        <nav className="list-none mb-10">
                            <li className='mb-2'>
                                <span className="cursor-pointer hover:text-gray-400 mb-2">Services</span>
                            </li>
                            <li className='mb-2'>
                                <span className="cursor-pointer hover:text-gray-400 mb-2">About Us</span>
                            </li>
                            <li className='mb-2'>
                                <span className="cursor-pointer hover:text-gray-400 mb-2">Contact Us</span>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © 2020 GymLife —
                        <span
                            href="https://twitter.com/knyttneve"
                            rel="noopener noreferrer"
                            className="ml-1"
                            target="_blank"
                        >
                            @knyttneve
                        </span>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <span className="text-gray-500">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </span>
                        <span className="ml-3 text-gray-500">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </span>
                        <span className="ml-3 text-gray-500">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </span>
                        <span className="ml-3 text-gray-500">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={0}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </span>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer