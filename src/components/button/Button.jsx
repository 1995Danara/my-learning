import styles from "./styles.module.scss"
import { useContext } from "react"
import { ThemeContext } from "../themecontext/themecontext"

export const Button = ({ title, onClick, disabled }) => {
  const { themeProvider } = useContext(ThemeContext)

  return (
    <button
      className={`${styles.button} ${
        themeProvider === "dark" ? styles.dark : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
