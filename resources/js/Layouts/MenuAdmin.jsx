import NavLink from "@/Components/NavLink";

function MenuAdmin() {
    return (
        <ul className="mt-5">
            <li>
                <NavLink
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    href={route("admin")}
                    active={route().current("admin")}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    href={route("about")}
                    active={route().current("about")}
                >
                    Sobre
                </NavLink>
            </li>
            <li>
                <NavLink
                    href={route("logout")}
                    active={route().current("logout")}
                    method="post"
                >
                    Sair
                </NavLink>
            </li>
        </ul>
    );
}

export default MenuAdmin;
