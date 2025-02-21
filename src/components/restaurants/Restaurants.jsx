import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectGetRestaurantsRequestStatus,
  selectRestaurantsIds,
  selectTotalRestaurants,
} from "../redux/entities/restaurants/slice"
import { getRestaurants } from "../redux/entities/restaurants/getRestaurants"
import { getRestaurantById } from "../redux/entities/restaurants/getRestaurantById"
import styles from "./styles.module.scss"
import { NavLink, Outlet } from "react-router-dom"
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../redux/constants"

export const Restaurants = () => {
  const dispatch = useDispatch()
  const restaurantIds = useSelector(selectRestaurantsIds)
  const restaurantEntities = useSelector(selectTotalRestaurants)
  const restaurantStatus = useSelector(selectGetRestaurantsRequestStatus)

  const [activeRestaurantId, setActiveRestaurantId] = useState(null)

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  useEffect(() => {
    if (restaurantIds.length > 0) {
      setActiveRestaurantId(restaurantIds[0])
    }
  }, [restaurantIds])

  const handleTabClick = (id) => {
    if (id !== activeRestaurantId) {
      setActiveRestaurantId(id)
      dispatch(getRestaurantById(id))
    }
  }

  if (restaurantStatus === REQUEST_STATUS_PENDING) {
    return <div>Loading restaurants...</div>
  }

  if (restaurantStatus === REQUEST_STATUS_REJECTED) {
    return <div>Failed to load restaurants.</div>
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
