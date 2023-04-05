import React from "react";
import Instagram from '../assets/igrm.png';
import Facebook from '../assets/fbrm.png';
import Twitter from '../assets/twrm.png';
import Logo from "../assets/dni.png";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <div className="w-full bg-blue-300 shadow">
            <div className="max-w-7xl md:w-550 rounded-lg mx-auto px-4 p-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 mt-12">
                    <img
                        src={Logo}
                        alt="DLF foundation"
                        title="DLF foundation"
                        className="h-24"
                    />
                    <div>
                        <h2 className="mb-6 text-md font-bold text-black uppercase dark:text-white">
                            Contact Us
                        </h2>
                        <ul className="text-gray-800 dark:text-gray-400">
                            <li className="mb-4">
                                <a
                                    href="mailto:decorateinnovate@gmail.com"
                                    className="hover:underline whitespace-pre-line"
                                    target="_blank"
                                >
                                    decorateinnovate @gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+919528124903"
                                    className="hover:underline"
                                    target="_blank"
                                >
                                    +91-9528124903                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-md font-bold text-black uppercase dark:text-white">
                            About D&I
                        </h2>
                        <ul className="text-gray-800 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/about" className="hover:underline ">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-md font-bold text-black uppercase dark:text-white">
                            Reach Us
                        </h2>
                        <ul className="text-gray-800 dark:text-gray-400">
                            <li className="mb-4 text-md">
                                <div>
                                    Dehradun, Uttarakhand, India, 248001
                                </div>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-12 border-gray-500" />

                <div className=" flex justify-between">
                    <p className="text-left text-black my-4">
                        All © reserved to D&I</p>
                    <div className="flex text-white mt-4 sm:ml-5">
                        <div className="flex">
                            <a
                                target={"_blank"}
                                href="#"
                            >
                                <img
                                    src={Facebook}
                                    alt="Facebook"
                                    className="w-4 h-6 mr-2"
                                />
                            </a>
                        </div>
                        <div className="flex">
                            <a
                                target={"_blank"}
                                href="https://instagram.com/decorateinnovate?igshid=YmMyMTA2M2Y="
                            >
                                <img
                                    src={Instagram}
                                    alt="Instagram"
                                    className="w-10 h-6 mr-2"
                                />
                            </a>
                        </div>
                        <div className="flex">
                            <a
                                target={"_blank"}
                                href="#"
                            >
                                <img
                                    src={Twitter}
                                    alt="Twitter"
                                    className="w-6 h-6 mr-2"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
