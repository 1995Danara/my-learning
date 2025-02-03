import styles from "./styles.module.scss"

export const Menu = ({ menu }) => {
  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuTitle}>Menu</h3>
      <ul className={styles.menuList}>
        {menu.map((dish) => (
          <li key={dish.id} className={styles.menuItem}>
            {dish.name} <span className={styles.price}>${dish.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
