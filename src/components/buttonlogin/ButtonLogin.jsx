import styles from "./styles.module.scss"
import { useUser } from "../user/useUser"
export const ButtonLogin = () => {
  const { user, login, logout } = useUser()

  const handleClick = () => {
    if (user) {
      logout()
    } else {
      login("UserName")
    }
  }

  return (
    <button
      className={`${styles.button} ${user ? styles.loggedIn : ""}`}
      onClick={handleClick}
    >
      {user ? `Hi, ${user}! Get out` : "Login"}
    </button>
  )
}
