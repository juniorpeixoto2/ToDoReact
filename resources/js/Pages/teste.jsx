import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Welcome(props) {
    return (
        <AdminLayout auth={props.auth} errors={props.errors}>
            <div className="cardMain">
                <div className="card">teste</div>
            </div>
        </AdminLayout>
    );
}
