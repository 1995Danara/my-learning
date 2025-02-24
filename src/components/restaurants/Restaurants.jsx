import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectGetRestaurantsRequestStatus,
  selectRestaurantsIds,
  selectTotalRestaurants,
} from "../redux/entities/restaurants/slice"
import { getRestaurants } from "../redux/entities/restaurants/getRestaurants"
import { getRestaurantById } from "../redux/entities/restaurants/getRestaurantById"
import styles from "./styles.module.scss"
import { NavLink, Outlet, useParams } from "react-router-dom"
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../redux/constants"

export const Restaurants = () => {
  const dispatch = useDispatch()
  const { restaurantId } = useParams()
  const restaurantIds = useSelector(selectRestaurantsIds)
  const restaurantEntities = useSelector(selectTotalRestaurants)
  const restaurantStatus = useSelector(selectGetRestaurantsRequestStatus)

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  useEffect(() => {
    if (restaurantId) {
      dispatch(getRestaurantById(restaurantId))
    }
  }, [restaurantId, dispatch])

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
          >
            {restaurantEntities[id]?.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  )
}
