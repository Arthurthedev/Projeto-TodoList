import { TodoForm } from "./components/TodoForm"
import { Todoheader } from "./components/TodoHeader"
import { TodoList } from "./components/TodoList"
import { useContext} from "react";
import { themeConfig } from "../Contexts/theme";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useTodo } from "./hooks/useToDo";


function App() {
  const {addTodo, toggleTodoCompleted, filteredTodos, clearCompleted, setFilter, filter} = useTodo()
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <main className={`h-screen ${themeConfig[theme].layout.backgroundColor}`}>
        <div className={`${themeConfig[theme].layout.heroClass} h-80 bg-cover bg-center`}>
          <div className="max-w-[43.75rem] m-auto p-8">
            <Todoheader></Todoheader>

            <TodoForm addTodo={addTodo}></TodoForm>

            <TodoList
              todoList={filteredTodos}
              toggleTodoCompleted={toggleTodoCompleted}
              setFilter={setFilter}
              filter={filter}
              clearCompleted={clearCompleted}
            >
            </TodoList>

          </div>
        </div>

      </main>

    </>
  )
}

export default App
