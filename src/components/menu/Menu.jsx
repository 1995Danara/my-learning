import styles from "./styles.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../redux/constants.js"
import {
  selectGetDishesRequestStatus,
  selectDishes,
} from "../redux/entities/dishes/slice"
import { getDishes } from "../redux/entities/dishes/getDishes.js"
import { useEffect } from "react"

export const Menu = ({ menu, restaurantId }) => {
  const dispatch = useDispatch()
  const dishes = useSelector(selectDishes) || []
  const requestStatus = useSelector(selectGetDishesRequestStatus)

  useEffect(() => {
    if (restaurantId) {
      dispatch(getDishes(restaurantId))
    }
  }, [restaurantId, dispatch])

  const filteredDishes = menu
    .map((dishId) => dishes.find((dish) => dish?.id === dishId))
    .filter(Boolean)

  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuTitle}>Menu</h3>

      {requestStatus === REQUEST_STATUS_PENDING && (
        <p className={styles.loading}>Loading...</p>
      )}
      {requestStatus === REQUEST_STATUS_REJECTED && (
        <p className={styles.error}>Error loading dishes</p>
      )}

      <ul className={styles.menuList}>
        {filteredDishes.length > 0
          ? filteredDishes.map((dish) => (
              <li key={dish.id} className={styles.menuItem}>
                <Link to={`/dish/${dish.id}`} className={styles.dishLink}>
                  {dish.name}{" "}
                  <span className={styles.price}>${dish.price}</span>
                </Link>
              </li>
            ))
          : requestStatus !== REQUEST_STATUS_PENDING &&
            !requestStatus === REQUEST_STATUS_REJECTED && (
              <p className={styles.noDishes}>No dishes available</p>
            )}
      </ul>
    </div>
  )
}
