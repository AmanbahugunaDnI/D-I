import React from 'react';
import { useForm } from '@inertiajs/react';
import Input from "@/Components/Input";
import InputError from '@/Components/InputError';
import TextArea from '@/Components/TextArea';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import Guest from '@/Layouts/GuestLayout';

const Contact = () => {
    let initialValues = {
        name: "",
        email: "",
        phone: "",
        city: "",
        message: ""
    }
    const { data, setData, post, processing, errors } = useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        post(route("contact.store"));
    };

    return (
        <>
            <Guest>
                <NavBar />
                <div className="relative items-center text-center d-flex flex-column lg:h-52 h-32 mt-10">
                    <div className="lg:text-5xl text-lg font-semibold mb-4 italic">Contact Us...</div>
                    <div className="lg:text-2xl text-sm font-semibold italic">Please complete the fields below and we will get back to you shortly.</div>
                </div>
                <div className="relative w-full sm:max-w-4xl mx-auto -mt-[5%] mb-16 px-6 py-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <form onSubmit={submit} className="mb-4 mt-4">
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <Input
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={val => setData({ ...data, name: val })}
                                    label="Name*"
                                    required
                                    mode="light"
                                />
                                <InputError message={errors.city} className="mt-2" />
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Input
                                    id="email"
                                    name="email"
                                    type='email'
                                    value={data.email}
                                    onChange={val => setData({ ...data, email: val })}
                                    label="Email*"
                                    required
                                    mode="light"
                                />
                                <InputError message={errors.city} className="mt-2" />

                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Input
                                    id="phone"
                                    name="phone"
                                    value={data.phone}
                                    onChange={val => setData({ ...data, phone: val })}
                                    label="Phone*"
                                    required
                                    mode="light"
                                />
                                <InputError message={errors.city} className="mt-2" />

                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <Input
                                    id="city"
                                    name="city"
                                    value={data.city}
                                    onChange={val => setData({ ...data, city: val })}
                                    label="City*"
                                    required
                                    mode="light"
                                />
                                <InputError message={errors.city} className="mt-2" />
                            </div>
                        </div>

                        <div className="relative z-0 mt-16 w-full mb-6 group">
                            <TextArea
                                name="message"
                                id="message"
                                value={data.message}
                                onChange={val => setData({ ...data, message: val })}
                                required
                                label="Message*"
                                mode="light"
                            />

                            <InputError message={errors.message} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-start mt-4">
                            <button className="mt-4 inline-flex items-center px-8 py-2 bg-blue-500 border border-transparent font-semibold text-xs text-white uppercase hover:bg-custom_hover cursor-pointer" processing={processing} disabled={processing}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <Footer />
            </Guest>
        </>
    )
}

export default Contact;