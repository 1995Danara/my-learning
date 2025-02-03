import { UserContextName } from "../usercontext/usercontextname"
import { useContext } from "react"
import styles from "./styles.module.scss"

export const ButtonLogin = () => {
  const { user, login, logout } = useContext(UserContextName)

  return (
    <button
      className={`${styles.button} ${user ? styles.loggedIn : ""}`}
      onClick={() => (user ? logout() : login("UserName"))}
    >
      {user ? `Привет, ${user}! Выйти` : "Войти"}
    </button>
  )
}
