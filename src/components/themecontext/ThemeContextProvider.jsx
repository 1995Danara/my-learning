import { useCallback, useState } from "react"
import { ThemeContext } from "./themecontext"

export const ThemeContextProvider = ({ children }) => {
  const [themeProvider, setThemeProvider] = useState("light")

  const toggleTheme = useCallback(() => {
    setThemeProvider((currentTheme) => {
      if (currentTheme === "dark") {
        return "light"
      } else {
        return "dark"
      }
    })
  }, [])

  return (
    <ThemeContext value={{ themeProvider, toggleTheme }}>
      {children}
    </ThemeContext>
  )
}
