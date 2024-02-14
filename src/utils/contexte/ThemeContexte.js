

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContexte = createContext();

const FunctionContexte = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);
    const contextValue = {

        setTheme,
        theme,
        handleTheme,

    }

    return <ThemeContexte.Provider value={contextValue}>{children}</ThemeContexte.Provider>
}


export const useTodoContext = () => useContext(ThemeContexte)

export default FunctionContexte;



