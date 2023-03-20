import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import NavBar from '@/Components/Navbar';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <div></div>
        </>
    );
}
