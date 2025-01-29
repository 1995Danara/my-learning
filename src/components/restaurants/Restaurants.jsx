import { useState } from "react"

import { restaurants } from "../mock"
import { Reviews } from "../reviews/Reviews"
import { Menu } from "../menu/Menu"
import { ReviewsForm } from "../reviewsform/ReviewsForm"
import { DishCounter } from "../dishcounter/DishCounter"

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
    <div>
      <div style={{ display: "flex", marginBottom: "30px" }}>
        {restaurants.map((restaurant, id) => (
          <button
            key={restaurant.id}
            onClick={() => handleTabClick(restaurant.id)}
            style={{
              backgroundColor:
                id === activeRestaurantId ? "#ccc" : "transparent",
              border: "1px solid #ccc",
              padding: "10px",
              cursor: "pointer",
              margin: "0 10px",
            }}
          >
            {restaurant.name}
          </button>
        ))}
      </div>
      {activeRestaurant && (
        <div style={{ marginBottom: "20px" }}>
          <h1>{activeRestaurant.name}</h1>
          <Menu menu={activeRestaurant.menu} />
          <DishCounter />
          <Reviews reviews={activeRestaurant.reviews} />
          <ReviewsForm />
        </div>
      )}
    </div>
  )
}
