import styles from "./styles.module.scss"
import { NavLink, Outlet } from "react-router-dom"
import { useGetRestaurantsQuery } from "../redux/services-api/api"

export const Restaurants = () => {
  const { data: restaurants, status } = useGetRestaurantsQuery()

  if (status === "loading") return <div>Loading restaurants...</div>
  if (status === "error") return <div>Failed to load restaurants.</div>

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {restaurants?.map((restaurant) => (
          <NavLink
            key={restaurant.id}
            to={`/restaurants/${restaurant.id}`}
            className={({ isActive }) =>
              isActive ? styles.activeTab : styles.tabButton
            }
          >
            {restaurant.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  )
}
