import React from "react";
import Facebook from "../../../public/facebook-icon.png";
import Twitter from "../../../public/twitter-icon.png";
import Instagram from "../../../public/instagram-icon.png";
import Logo from "../assets/dni.png";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <div className="w-full bg-black shadow font-helvetica_light">
            <div className="max-w-7xl md:w-550 rounded-lg mx-auto px-4 p-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 mt-12">
                    <img
                        src={Logo}
                        alt="DLF foundation"
                        title="DLF foundation"
                        className="h-24"
                    />
                    <div>
                        <h2 className="mb-6 text-md font-semibold text-white uppercase dark:text-white">
                            Contact Us
                        </h2>
                        <ul className="text-gray-400 dark:text-gray-400">
                            <li className="mb-4">
                                <a
                                    href="mailto:amanbahuguna009@gmail.com"
                                    className="hover:underline"
                                    target="_blank"
                                >
                                    amanbahuguna009@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+917895028763"
                                    className="hover:underline"
                                    target="_blank"
                                >
                                    +91-7895028763
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-md font-semibold text-white uppercase dark:text-white">
                            About D&I
                        </h2>
                        <ul className="text-gray-400 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/about" className="hover:underline ">
                                    About Us
                                </a>
                            </li>
                            {/* <li>
                                <a href="/gallery">Gallery</a>
                            </li> */}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-md font-semibold text-white uppercase dark:text-white">
                            Reach Us
                        </h2>
                        <ul className="text-gray-400 dark:text-gray-400">
                            <li className="mb-4 text-sm">
                                <div>
                                    C Block 9/3 Type-3, New Tehri, Tehri Garhwal, Uttarakhand, 249001
                                </div>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-12 border-gray-500" />

                <div className=" flex justify-between">
                    <p className="text-left text-white my-4">
                        All © reserved to D&I</p>
                    <div className="flex text-white mt-4 mr-20 ">
                        <div className="flex">
                            <a
                                target={"_blank"}
                                href="#"
                            >
                                <img
                                    src={Facebook}
                                    alt="Facebook"
                                    className="w-6 h-6 mr-2"
                                />
                            </a>
                        </div>
                        <div className="flex">
                            <a
                                target={"_blank"}
                                href="#"
                            >
                                <img
                                    src={Instagram}
                                    alt="Instagram"
                                    className="w-6 h-6 mr-2"
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
