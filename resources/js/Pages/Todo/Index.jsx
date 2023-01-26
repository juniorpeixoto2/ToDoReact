import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import TodoEdit from "./TodoEdit";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Todo(props) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("todo.store"), {
            onSuccess: () => {
                reset();
                toast("Tarefa Cadastrada");
            },
        });
    };

    function handleDelete(todoId) {
        post(route("todo.delete", { todoId: todoId }), {
            onSuccess: () => {
                reset();
                toast("Tarefa Deletada");
            },
        });
    }

    return (
        <AdminLayout auth={props.auth} errors={props.errors}>
            <ToastContainer />
            <div className="cardMain">
                <form onSubmit={submit} className="flex">
                    <div>
                        <input
                            type="text"
                            onChange={(e) => setData("title", e.target.value)}
                            className="input form-control shadow border-slate-500 border-solid"
                            placeholder="Todo..."
                            name="title"
                            value={data.title}
                        />
                        <p className="text-red-600">{errors.title}</p>
                    </div>
                    <button className="ml-2 btn">Cadastrar</button>
                </form>
                <hr />
                <div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped table-sm w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tarefa</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.todos.map((todo) => {
                                    return (
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.title}</td>
                                            <td>{todo.done}</td>
                                            <td>
                                                <TodoEdit />
                                                <a
                                                    onClick={() =>
                                                        handleDelete(todo.id)
                                                    }
                                                >
                                                    Delete
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Todo;
