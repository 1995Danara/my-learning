import { useState } from "react"
import { useSelector } from "react-redux"
import {
  selectRestaurantIds,
  selectRestaurantEntities,
} from "../redux/entities/restaurants/slice"
import styles from "./styles.module.scss"
import { NavLink, Outlet } from "react-router-dom"

export const Restaurants = () => {
  const restaurantIds = useSelector(selectRestaurantIds)
  const restaurantEntities = useSelector(selectRestaurantEntities)

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0] || null,
  )

  const handleTabClick = (id) => {
    if (id !== activeRestaurantId) {
      setActiveRestaurantId(id)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {restaurantIds.map((id) => (
          <NavLink
            key={id}
            to={`/restaurants/${id}`}
            className={({ isActive }) =>
              isActive ? styles.activeTab : styles.tabButton
            }
            onClick={() => handleTabClick(id)}
          >
            {restaurantEntities[id]?.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  )
}
