import styles from "./styles.module.scss"
import { ButtonLogin } from "../buttonlogin/ButtonLogin"
import { ToggleThemeButton } from "../togglethemebutton/ToggleThemeButton"
import { CartContainer } from "../cart/cart-container"

export const Header = () => {
  return (
    <header className={styles.header}>
      <ToggleThemeButton />
      <CartContainer />
      <ButtonLogin />
    </header>
  )
}
