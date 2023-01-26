<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TodoController extends Controller {

    public function index(Request $request): Response {
        $todos = Todo::get();
        return Inertia::render('Todo/Index', compact('todos'));
    }

    public function store(Request $request) {
        $request->validate(['title' => 'required']);
        Todo::create($request->all());
    }

    public function delete(Request $request) {
        $todoId = $request->todoId;
        Todo::find($todoId)->delete();
    }
}
