import React from 'react';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

const About = () => {
    return (
        <>
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-8 text-justify">
                <h1 className="md:text-5xl text-3xl font-bold md:mb- mb-8 md:mt-14 mt-6">About</h1>
                <div className="italic md:mb-20 mb-10 md:text-lg text-sm">
                    <p>
                        D&I Home Service is a company that is dedicated to providing top-notch home services to our clients. Our mission is to help homeowners keep their homes in great condition by offering a range of services that cater to their needs. <br /> <br />
                    </p>
                    <p>
                        Our team is made up of experienced professionals who are passionate about what they do. We take pride in delivering high-quality workmanship that meets the expectations of our clients. We understand that our clients are busy individuals who value their time, which is why we strive to offer convenient scheduling options that fit their busy lifestyles.  <br /> <br />
                    </p>
                    <p>
                        Our team is made up of experienced professionals who are passionate about what they do. We take pride in delivering high-quality workmanship that meets the expectations of our clients. We understand that our clients are busy individuals who value their time, which is why we strive to offer convenient scheduling options that fit their busy lifestyles. <br /> <br />
                    </p>
                    <p>
                        Whether you need help with routine maintenance tasks like cleaning and organizing or require more specialized services like plumbing or electrical work, we have the skills and expertise to get the job done right. Our team uses the latest tools and techniques to ensure that our work is efficient and effective, and we always strive to exceed our clients' expectations. <br /> <br />
                    </p>
                    <p>
                        At D&I Home Service, we are committed to providing exceptional service that is reliable, affordable, and convenient. We believe that our clients deserve the very best, and we work hard every day to deliver on that promise. Contact us today to learn more about our services and how we can help you keep your home in great condition.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;
