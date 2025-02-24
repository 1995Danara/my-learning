import styles from "./styles.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../redux/constants.js"
import {
  selectGetDishesRequestStatus,
  selectDishById,
} from "../redux/entities/dishes/slice"
import { getDishes } from "../redux/entities/dishes/getDishes.js"
import { useEffect } from "react"

export const Menu = ({ menu, restaurantId }) => {
  const dispatch = useDispatch()
  const requestStatus = useSelector(selectGetDishesRequestStatus)

  const dishes = useSelector((state) =>
    menu.map((dishId) => selectDishById(state, dishId)),
  )

  useEffect(() => {
    if (restaurantId) {
      dispatch(getDishes(restaurantId))
    }
  }, [restaurantId, dispatch])

  const isLoading = requestStatus === REQUEST_STATUS_PENDING
  const isError = requestStatus === REQUEST_STATUS_REJECTED
  const isEmpty = dishes.every((dish) => !dish)

  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuTitle}>Menu</h3>

      {isLoading && <p className={styles.loading}>Loading...</p>}

      {isError && <p className={styles.error}>Error loading dishes</p>}

      {isEmpty && !isLoading && !isError && (
        <p className={styles.noDishes}>No dishes available</p>
      )}

      <ul className={styles.menuList}>
        {dishes.length > 0 &&
          dishes.map((dish) => {
            return dish ? (
              <li key={dish.id} className={styles.menuItem}>
                <Link to={`/dish/${dish.id}`} className={styles.dishLink}>
                  {dish.name}{" "}
                  <span className={styles.price}>${dish.price}</span>
                </Link>
              </li>
            ) : null
          })}
      </ul>
    </div>
  )
}
