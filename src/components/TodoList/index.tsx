import { useContext } from "react";
import { themeConfig } from "../../../Contexts/theme";
import { ThemeContext } from "../../../Contexts/ThemeContext";
import type { Todo } from "../../hooks/useToDo";
import IconCheck from "/images/icon-check.svg";

export interface TodoListProps {
  todoList: Todo[];
  toggleTodoCompleted: (id: number) => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
  clearCompleted: () => void;
  filter: "all" | "active" | "completed";
  deleteTodo: (id: number) => void;
}

export const TodoList = ({
  todoList,
  toggleTodoCompleted,
  setFilter,
  filter,
  clearCompleted,
  deleteTodo,
}: TodoListProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>
          {todoList.map((todo) => (
            <li
              className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}
              key={todo.id}
            >
              {/* 🔥 linha principal */}
              <div className="flex items-center justify-between">
                
                {/* esquerda (check + texto) */}
                <div className="flex items-center gap-4">
                  <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-[1px]">
                    <button
                      onClick={() => toggleTodoCompleted(todo.id)}
                      className={`w-full h-full border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer 
                      ${themeConfig[theme].todo.backgroundColor} ${
                        todo.completed
                          ? "bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]"
                          : ""
                      }`}
                    >
                      {todo.completed && (
                        <img
                          src={IconCheck}
                          alt="imagem de check"
                          className="w-2 h-2 m-auto"
                        />
                      )}
                    </button>
                  </span>

                  <p
                    className={`${themeConfig[theme].todo.textColor} ${
                      todo.completed ? "line-through opacity-50" : ""
                    }`}
                  >
                    {todo.text}
                  </p>
                </div>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div
          className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}
        >
          <p>{todoList.length} items total</p>

          <div className="hidden sm:flex gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`${filter === "all" ? "text-bright-blue" : ""} cursor-pointer`}
            >
              All
            </button>

            <button
              onClick={() => setFilter("active")}
              className={`${filter === "active" ? "text-bright-blue" : ""} cursor-pointer`}
            >
              Active
            </button>

            <button
              onClick={() => setFilter("completed")}
              className={`${filter === "completed" ? "text-bright-blue" : ""} cursor-pointer`}
            >
              Completed
            </button>
          </div>

          <button onClick={clearCompleted} className="cursor-pointer">
            Clear Completed
          </button>
        </div>
      </div>

      <div
        className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} flex justify-center gap-5 py-4 rounded-md mt-4 sm:hidden`}
      >
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
    </>
  );
};