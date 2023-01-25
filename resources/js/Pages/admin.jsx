import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Admin(props) {
    return (
        <AdminLayout auth={props.auth} errors={props.errors}>
            <div className="cardMain">
                <div className="card">231321</div>
            </div>
        </AdminLayout>
    );
}
