import { useState } from "react"

import { restaurants } from "../mock"
import { Reviews } from "../reviews/Reviews"
import { Menu } from "../menu/Menu"
import { ReviewsForm } from "../reviewsform/ReviewsForm"
import { DishCounter } from "../dishcounter/DishCounter"
import styles from "./styles.module.scss"

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0]?.id,
  )

  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeRestaurantId,
  )

  const handleTabClick = (id) => {
    if (id !== activeRestaurantId) {
      setActiveRestaurantId(id)
    }
  }
  return (
    <div className={styles.wrapper}>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => handleTabClick(restaurant.id)}
          className={styles.tabButton}
        >
          {restaurant.name}
        </button>
      ))}

      <div className={styles.content}>
        {activeRestaurant &&
          Array.from({ length: 20 }).map((_, id) => (
            <div key={id}>
              <h1>{activeRestaurant.name}</h1>
              <Menu menu={activeRestaurant.menu} />
              <DishCounter />
              <Reviews reviews={activeRestaurant.reviews} />
              <ReviewsForm />
            </div>
          ))}
      </div>
    </div>
  )
}
