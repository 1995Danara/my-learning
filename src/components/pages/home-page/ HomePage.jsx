import { Link } from "react-router"
import styles from "./styles.module.scss"

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
      <p className={styles.subtitle}>
        Discover delicious dishes and restaurants.
      </p>
      <Link to="/restaurants" className={styles.link}>
        View restaurants and menus
      </Link>
    </div>
  )
}
