import { Link } from "@inertiajs/react";

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? "flex items-center text-white text-sm leading-5 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out bg-slate-600"
                    : "flex items-center text-white border-transparent text-sm leading-5hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out "
            }
        >
            {children}
        </Link>
    );
}
