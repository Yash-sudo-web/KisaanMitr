import image from "../static/e.png";
import React from 'react';
import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Home', to: '/' },
    { name: 'CropChecker', to: '/Cropchecker' },
    { name: 'Bazaar', to: '/Bazaar'},
    { name: 'News',to: 'https://kisan-samachar.vercel.app/'}
];


export default function Navbar() {
    return (
        <div className="flex justify-center">
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-1 md:pb-1 lg:max-w-2xl lg:w-full lg:pb-2 xl:pb-3">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-96 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <Popover>
                            <div className="relative pt-6 px-2 sm:px-2 lg:px-4">
                                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                        <div className="flex items-center justify-between w-full md:w-auto">
                                            <span className="sr-only">Workflow</span>
                                            <img
                                                className="h-20 max-w=40 ml-4"
                                                src={image}
                                                alt=""
                                            />
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Open main menu</span>
                                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex md:justify-center md:ml-6 md:pr-2 md:space-x-5">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                className="font-medium text-gray-500 hover:text-gray-900 inline-flex items-center transition duration-300 ease-in-out hover:shadow-lg"
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="flex">
                                        <Link
                                            to="/signup"
                                            className="font-medium text-amber-500 hover:text-gray-900 inline-flex animate-pulse transition duration-300 ease-in-out hover:shadow-lg ml-4"
                                            await delay >
                                            <span>{`${localStorage.getItem('token')?"Profile":"Join Us"}`}</span>
                                        </Link>
                                    </div>
                                    
                                </nav>
                            </div>

                            {/* ... */}
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    );
}
