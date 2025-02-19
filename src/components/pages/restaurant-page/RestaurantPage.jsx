import { Outlet, NavLink, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurants/slice"
import styles from "./styles.module.scss"
import classNames from "classnames"

export const RestaurantPage = () => {
  const { restaurantId } = useParams()
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  )

  return (
    <div>
      <h1>{restaurant?.name}</h1>
      <div className={styles.navLinks}>
        <NavLink
          to={`/restaurants/${restaurantId}/menu`}
          className={({ isActive }) =>
            classNames(styles.navLink, {
              [styles.active]: isActive,
            })
          }
        >
          Menu
        </NavLink>
        <NavLink
          to={`/restaurants/${restaurantId}/reviews`}
          className={({ isActive }) =>
            classNames(styles.navLink, {
              [styles.active]: isActive,
            })
          }
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}
