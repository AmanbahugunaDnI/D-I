import React from 'react';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-8 text-justify">
                <h1 class="text-5xl font-bold mb-12 mt-14">Privacy Policy</h1>
                <div className="italic mb-20 text-lg">
                    <p>
                        At D&I Home Service Company, we are committed to protecting the privacy and security of our customers' personal information. This privacy policy describes how we collect, use, and protect your personal information when you use our services.<br /> <br />
                    </p>
                    <p className="font-semibold underline mb-4">Personal Information We Collect:
                    </p>
                    <p>
                        We may collect personal information such as your name, address, phone number, email address, and payment information when you use our services. We may also collect information about your home, including its size, location, and any specific requests or preferences you may have.
                        <br /> <br />
                    </p>
                    <p className="font-semibold underline mb-4">How We Use Your Personal Information:
                    </p>
                    <p>
                        We use your personal information to provide you with our services, including scheduling appointments, sending reminders, and processing payments. We may also use your information to communicate with you about our services, promotions, and other offers that we think may be of interest to you.
                        <br /> <br />
                    </p>
                    <p className="font-semibold underline mb-4">Disclosure of Your Personal Information:
                    </p>
                    <p>
                        We may share your personal information with third-party service providers who assist us in providing our services, such as payment processing and scheduling software providers. We may also share your information with government or law enforcement agencies if we believe it is necessary to comply with applicable laws or regulations.

                        <br /> <br />
                    </p>
                    <p className="font-semibold underline mb-4">Your Rights:
                    </p>
                    <p className="mb-8">
                        You have the right to access, correct, or delete your personal information at any time. You can also request that we stop using your personal information for marketing purposes. To exercise any of these rights, please contact us using the contact information provided below.
                    </p>
                    <p className="font-semibold underline mb-4">Changes to this Privacy Policy:
                    </p>
                    <p className="mb-8">
                        We may update this privacy policy from time to time. Any changes will be posted on our website, and we encourage you to review it periodically.
                    </p>
                    <p className="font-semibold underline mb-4">Contact Us:
                    </p>
                    <p>
                        If you have any questions or concerns about our privacy policy or the way we handle your personal information, please contact us at:
                    </p>
                    <div className="grid md:grid-cols-3 md:gap-6 mt-8 font-bold">
                        <div>
                            Aman Bahuguna
                        </div>
                        <a className="text-blue-500 hover:underline" href="mailto:amanbahuguna009@gmail.com" target={"_blank"}>
                            amanbahuguna009@gmail.com
                        </a>
                        <a className="text-blue-500 hover:underline" href="tel:+917895028763"
                            target={"_blank"}>
                            +91-7895028763
                        </a>
                        <div className="mt-6 md:mt-0">
                            Atif Khan
                        </div>
                        <a className="text-blue-500 hover:underline" href="atifkhandmx@gmail.com" target={"_blank"}>
                            atifkhandmx@gmail.com
                        </a>
                        <a className="text-blue-500 hover:underline" href="tel:+9181267 52296"
                            target={"_blank"}>
                            +91-81267 52296
                        </a>
                        <div className="mt-6 md:mt-0">
                            Umer Khan
                        </div>
                        <div className="text-blue-500 hover:underline">
                            umer@gmail.com
                        </div>
                        <a className="text-blue-500 hover:underline" href="tel:+919528124903"
                            target={"_blank"}>
                            +91-9528124903                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicy;
