import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Guest({ children }) {
    const { success } = usePage().props.status;
    useEffect(() => {
        if (success) {
            toast.success(success);
        }
    }, [success]);
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
            {children}
        </div>
    );
}
