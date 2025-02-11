import { useState } from "react"
import { Reviews } from "../reviews/Reviews"
import { Menu } from "../menu/Menu"
import { ReviewsForm } from "../reviewsform/ReviewsForm"
import { DishCounter } from "../dishcounter/DishCounter"
import styles from "./styles.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { addReview } from "../redux/entities/restaurants/slice"

export const Restaurants = () => {
  const dispatch = useDispatch()
  const restaurants = useSelector((state) => state.restaurants.entities)

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    Object.values(restaurants)[0]?.id || null,
  )

  const activeRestaurant = restaurants[activeRestaurantId]

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
      {Object.values(restaurants).map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => handleTabClick(restaurant.id)}
          className={styles.tabButton}
        >
          {restaurant.name}
        </button>
      ))}

      <div className={styles.content}>
        {activeRestaurant && (
          <>
            <h1>{activeRestaurant.name}</h1>
            <Menu menu={activeRestaurant.menu} />
            <DishCounter />
            <Reviews reviews={activeRestaurant.reviews} />
            <ReviewsForm onAddReview={handleAddReview} />
          </>
        )}
      </div>
    </div>
  )
}
