import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-black shadow font-helvetica_light">
            <div className="justify-between py-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-2 md:block">
                        <Link href="/">
                            {/* <img
                                src={Logo}
                                alt="DLF foundation"
                                title="DLF foundation"
                                className="h-16"
                            /> */}
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <div
                            className={`md:block justify-end md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            
                        </div>
                        <div
                            className={`flex-1 pb-3 mt-9 md:block md:pb-0 md:mt-3 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
                                <li className="text-white text-md hover:text-custom_hover">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="text-white text-md underline hover:text-custom_hover">
                                    <Link href="/login">Existing Volunteer? Login</Link>
                                </li>
                                <li className="text-white text-md underline hover:text-custom_hover">
                                    <Link href="/register">New Volunteer? Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ml-10">
                        <Link href="/">
                            <img
                                src="https://www.dlffoundation.in/images/logo.svg"
                                alt="DLF Engage"
                                title="DLF Engage"
                                className="h-12 hidden md:block"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}