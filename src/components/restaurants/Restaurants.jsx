import { useState } from "react"

import { restaurants } from "../mock"
import { CounterButton } from "../counter/CounterButton"
export const Restaurants = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0)

  const handleTabClick = (index) => {
    if (index !== activeRestaurantIndex) {
      setActiveRestaurantIndex(index)
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          marginBottom: "30px",
        }}
      >
        {restaurants.map((restaurant, index) => (
          <button
            key={restaurant.id}
            onClick={() => handleTabClick(index)}
            style={{
              backgroundColor:
                index === activeRestaurantIndex ? "#ccc" : "transparent",
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
      <div>
        {restaurants[activeRestaurantIndex] && (
          <div style={{ marginBottom: "20px" }}>
            <h1>{restaurants[activeRestaurantIndex].name}</h1>
            <h2>Меню</h2>
            <ul>
              {restaurants[activeRestaurantIndex].menu.map((dish) => (
                <li
                  key={dish.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px",
                  }}
                >
                  <div style={{ marginRight: "5px" }}>
                    {dish.name} - ${dish.price}
                  </div>
                  <CounterButton />
                </li>
              ))}
            </ul>
            <h3>Отзывы</h3>
            <ul>
              {restaurants[activeRestaurantIndex].reviews.map((review) => (
                <li key={review.id}>
                  <strong>{review.user}:</strong> {review.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
