import React from "react"
import ReactDOM from "react-dom/client"
import { restaurants } from "./mock"
const App = () => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} style={{ marginBottom: "20px" }}>
          <h2>{restaurant.name}</h2>
          <h3>Меню</h3>
          <ul>
            {restaurant.menu.map((dish) => (
              <li key={dish.id}>
                {dish.name} - ${dish.price}
              </li>
            ))}
          </ul>
          <h3>Отзывы</h3>
          <ul>
            {restaurant.reviews.map((review) => (
              <li key={review.id}>
                <strong>{review.user}:</strong> {review.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
