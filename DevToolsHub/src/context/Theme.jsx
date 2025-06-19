import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    themeMode: "dark",
    theme: () => {},
})

export const ThemeProvider = ({children}) => {
    const [themeMode, setThemeMode] = useState("dark")
    const theme = () => {
        setThemeMode(prevMode => prevMode === "light" ? "dark" : "light");
    }
    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(themeMode);
        localStorage.setItem("theme", themeMode);
    }, [themeMode])

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme) setThemeMode(savedTheme)
    }, [])

    return(
        <ThemeContext value={{themeMode, theme}}>
            {children}
        </ThemeContext>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}
