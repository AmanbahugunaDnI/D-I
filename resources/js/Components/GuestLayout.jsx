import ToastContainer from "@/Components/ToastContainer";
import { toast } from "react-toastify";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function GuestLayout() {
    const { status, errors } = usePage().props;

    useEffect(() => {
        if (status && status.success) {
            toast.success(status.success);
        }
        if (errors && errors.error) {
            toast.error(errors.error);
        }
    }, [status, errors]);

    return (
        <>
            <ToastContainer />
        </>
    );
}