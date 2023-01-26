import { Link } from "@inertiajs/react";

import "../../css/admin/soft-ui-dashboard-tailwind.css?v=1.0.4";
import "../../css/admin/nucleo-icons.css";
import "../../css/admin/nucleo-svg.css";
import NavLink from "@/Components/NavLink";
import MenuAdmin from "./MenuAdmin";

export default function AdminLayout({ children }) {
    return (
        <div>
            <main>
                <div className="drawer drawer-mobile bg-slate-300">
                    <input
                        id="my-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content  " style={{ width: "100%" }}>
                        <div className="relative">
                            <div className="fixed top-0 left-0 lg:left-56 right-0">
                                <div className="navbar bg-gradient-to-r from-blue-700 to-blue-500  shadow-sm shadow-slate-500">
                                    <div className="flex-1 ">
                                        <label
                                            htmlFor="my-drawer"
                                            className="lg:hidden text-white cursor-pointer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-10 h-10"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                                />
                                            </svg>
                                        </label>
                                    </div>
                                    <div className="flex-none gap-2">
                                        <div className="form-control">
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                className="rounded"
                                            />
                                        </div>
                                        <div className="dropdown dropdown-end ">
                                            <label
                                                tabIndex={0}
                                                className="btn btn-ghost btn-circle avatar"
                                            >
                                                <div className="w-10 rounded-full">
                                                    <img src="https://placeimg.com/80/80/people" />
                                                </div>
                                            </label>
                                            <ul
                                                tabIndex={0}
                                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                                            >
                                                <li>
                                                    <a className="justify-between">
                                                        Profile
                                                        <span className="badge">
                                                            New
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>Settings</a>
                                                </li>
                                                <li>
                                                    <a>Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 mt-20">{children}</div>

                        <footer className="footer bottom-100 p-2 m-0 bg-base-300 text-base-content fixed bottom-0 flex justify-center left-0 lg:left-56 right-0">
                            Copyright © 2023
                        </footer>
                    </div>

                    <div className="drawer-side ">
                        <label
                            htmlFor="my-drawer"
                            className="drawer-overlay"
                        ></label>

                        <div className="menu w-60 bg-gradient-to-r from-slate-800 to-slate-600 ">
                            <div className="bg-blue-600 h-16 flex justify-center items-center border-r border-r-slate-500">
                                <div className="normal-case text-white text-xl font-bold ">
                                    ToDo
                                </div>
                            </div>
                            <MenuAdmin />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
