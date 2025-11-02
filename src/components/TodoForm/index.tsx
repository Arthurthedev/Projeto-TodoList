import { useContext, type FormEvent } from "react";
import { themeConfig } from "../../../Contexts/theme";
import { ThemeContext } from "../../../Contexts/ThemeContext";

interface TodoInputProps{
    addTodo: (event: FormEvent<HTMLFormElement>) => void
}

export const TodoForm = ({addTodo} : TodoInputProps)=>{

    const {theme} = useContext(ThemeContext)

    return(
        <form className="relative mb-10" onSubmit={addTodo}>
        <span className={`absolute w-6 h-6 border ${themeConfig[theme].todo.borderColor} top-1/2 transform -translate-y-1/2 rounded-full left-6 cursor-pointer`}></span>
        <input type="text" 
               name="todo" 
               placeholder="Create a new todo..." 
               className={`${themeConfig[theme].todo.backgroundColor} w-full ${themeConfig[theme].todo.textColor} rounded-md py-6 pl-16 outline-none text-lg`}/>
      </form>
    )
}