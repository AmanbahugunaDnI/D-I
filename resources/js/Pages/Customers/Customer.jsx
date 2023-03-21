import React from 'react';
import InputError from "@/Components/InputError";
import { useForm } from '@inertiajs/react';
import Input from '@/Components/Input';
import TextArea from '@/Components/TextArea';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export default function NgoForm() {

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        service: "",
    };

    const { data, setData, post, patch, processing, errors, reset } = useForm(initialValues);

    console.log(data)

    const submit = (e) => {
        e.preventDefault();
        post(route('ngo.store'));
    };

    function cancelOperation() {
        // code to handle the cancel operation
        window.history.back();
    }

    return (
        <>
            <NavBar />
            <div className="bg-white shadow max-w-7xl md:w-550 rounded-lg mx-auto px-4 mt-12 p-12 sm:px-6 lg:px-8 mb-20">
                <form onSubmit={submit} >
                    <div className="grid md:grid-cols-1 md:gap-6">
                        <div className="w-full mb-6">
                            <Input
                                name="name"
                                id="name"
                                value={data.name}
                                onChange={val => setData({ ...data, name: val })}
                                label="Name"
                                required
                                mode="light"
                            />
                        </div>

                        <div className="w-full mb-6">
                            <Input
                                name="email"
                                id="email"
                                value={data.email}
                                onChange={val => setData({ ...data, email: val })}
                                label="Email"
                                mode="light"
                            />
                        </div>

                        <div className="w-full mb-6">
                            <Input
                                name="phone"
                                id="phone"
                                value={data.phone}
                                onChange={val => setData({ ...data, phone: val })}
                                label="Phone"
                                mode="light"
                            />
                        </div>

                        <div className="w-full mb-6">
                            <Input
                                name="service"
                                id="service"
                                type="service"
                                value={data.service}
                                onChange={val => setData({ ...data, service: val })}
                                label="Service"
                                mode="light"
                            />
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <button className="inline-flex items-center px-8 py-2 bg-blue-500 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-custom_hover" processing={processing}>
                            Book
                        </button>

                        <button className="ml-4 inline-flex items-center px-4 py-2 bg-white-800 border border-transparent  font-semibold text-xs text-gray-700 uppercase tracking-widest hover:bg-slate-200" onClick={cancelOperation}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}
