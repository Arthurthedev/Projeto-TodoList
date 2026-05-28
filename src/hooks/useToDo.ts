import { useState, useEffect, type FormEvent } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type BackendTodo = {
  id: number;
  title: string;
  done: boolean;
};

export const useTodo = () => {
  const [todolist, setTodoList] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data: BackendTodo[]) => {
        const formatted = data.map((todo) => ({
          id: todo.id,
          text: todo.title,
          completed: todo.done,
        }));

        setTodoList(formatted);
      })
      .catch((err) => console.log(err));
  }, []);

  const addTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get("todo") as string;

    if (!todoItem.trim()) return;

    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: todoItem.trim(),
        }),
      });

      if (!response.ok) {
        console.log("Erro ao criar tarefa");
        return;
      }

      const newTodo: BackendTodo = await response.json();

      setTodoList((prev) => [
        ...prev,
        {
          id: newTodo.id,
          text: newTodo.title,
          completed: newTodo.done,
        },
      ]);

      event.currentTarget.reset();
      setFilter("all");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        console.log("Erro ao deletar");
        return;
      }

      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodoCompleted = async (id: number) => {
  const todo = todolist.find(t => t.id === id);
  if (!todo) return;

  try {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: !todo.completed,
      }),
    });

    if (!response.ok) {
      console.log("Erro ao atualizar");
      return;
    }

    const updated = await response.json();

    setTodoList(prev =>
      prev.map(t =>
        t.id === id
          ? { ...t, completed: updated.done }
          : t
      )
    );

  } catch (error) {
    console.log(error);
  }
};

  const filteredTodos = todolist.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const clearCompleted = () => {
    setTodoList((prev) => prev.filter((todo) => !todo.completed));
  };

  return {
    addTodo,
    toggleTodoCompleted,
    filteredTodos,
    clearCompleted,
    setFilter,
    filter,
    deleteTodo,
  };
};
