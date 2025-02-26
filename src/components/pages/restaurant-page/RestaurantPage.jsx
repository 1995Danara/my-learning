import { Outlet, NavLink } from "react-router-dom"

import styles from "./styles.module.scss"
import classNames from "classnames"
import { useGetRestaurantByIdQuery } from "../../redux/services-api/api"

export const RestaurantPage = (restaurantId) => {
  const { data: restaurant } = useGetRestaurantByIdQuery(restaurantId)
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
