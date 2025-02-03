import styles from "./styles.module.scss"
import { ButtonLogin } from "../buttonlogin/ButtonLogin"
import { ToggleThemeButton } from "../togglethemebutton/ToggleThemeButton"
export const Header = () => {
  return (
    <header className={styles.header}>
      <ToggleThemeButton />
      <ButtonLogin />
    </header>
  )
}
