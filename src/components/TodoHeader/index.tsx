import { themeConfig } from "../../../Contexts/theme";
import { ThemeContext } from "../../../Contexts/ThemeContext";
import { useContext } from "react";
export const Todoheader = ()=>{

  const {theme, toggleTheme} = useContext(ThemeContext)
  console.log();
    return(
        <header className="flex justify-between mb-6 pt-20">
        <h1 className="text-white text-4xl sm:text-[2.5rem] font-bold tracking-[1rem]">TODO</h1>
        <button className="cursor-pointer" onClick={toggleTheme}>
          <img className="w-8 h-8" src={`${themeConfig[theme].icon}`} alt="Alternar tema" />
        </button>
      </header>
    )
}
