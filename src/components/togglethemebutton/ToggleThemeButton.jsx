import { useContext } from "react"
import { ThemeContext } from "../themecontext/themecontext"
import { Button } from "../button/Button"

export const ToggleThemeButton = () => {
  const { themeProvider, toggleTheme } = useContext(ThemeContext)

  return (
    <Button
      onClick={toggleTheme}
      title={themeProvider === "dark" ? "Switch to light" : "Switch to dark"}
    />
  )
}
