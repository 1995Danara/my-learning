import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  addReview,
  selectRestaurantIds,
  selectRestaurantEntities,
  selectRestaurantById,
} from "../redux/entities/restaurants/slice"
import { Reviews } from "../reviews/Reviews"
import { Menu } from "../menu/Menu"
import { ReviewsForm } from "../reviewsform/ReviewsForm"
import { DishCounter } from "../dishcounter/DishCounter"
import styles from "./styles.module.scss"
import { useUser } from "../user/useUser"
export const Restaurants = () => {
  const { user } = useUser()
  const dispatch = useDispatch()
  const restaurantIds = useSelector(selectRestaurantIds)
  const restaurantEntities = useSelector(selectRestaurantEntities)

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0] || null,
  )
  const activeRestaurant = useSelector((state) =>
    selectRestaurantById(state, activeRestaurantId),
  )

  const handleTabClick = (id) => {
    if (id !== activeRestaurantId) {
      setActiveRestaurantId(id)
    }
  }

  const handleAddReview = (review) => {
    if (activeRestaurantId) {
      dispatch(addReview({ restaurantId: activeRestaurantId, review }))
    }
  }

  return (
    <div className={styles.wrapper}>
      {restaurantIds.map((id) => (
        <button
          key={id}
          onClick={() => handleTabClick(id)}
          className={styles.tabButton}
        >
          {restaurantEntities[id].name}
        </button>
      ))}

      <div className={styles.content}>
        {activeRestaurant && (
          <>
            <h1>{activeRestaurant.name}</h1>
            <Menu menu={activeRestaurant.menu} />
            <DishCounter user={user} />
            <Reviews reviews={activeRestaurant.reviews} />
            {user && <ReviewsForm onAddReview={handleAddReview} />}
          </>
        )}
      </div>
    </div>
  )
}
