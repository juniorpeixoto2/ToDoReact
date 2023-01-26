import AdminLayout from "@/Layouts/AdminLayout";

export default function About(props) {
    return (
        <AdminLayout auth={props.auth} errors={props.errors}>
            {/* <div className="cardMain">LaViTaDi</div> */}

            <div className="flex gap-2 w-full ">
                <div className="card bg-base-100  w-full shadow-xl rounded-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Laravel</h2>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-xl rounded-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center">ReactJS</h2>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 w-full mt-2">
                <div className="card bg-base-100 w-full shadow-xl rounded-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center">
                            TailwindCss
                        </h2>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-xl rounded-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center">DaisyUI</h2>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
