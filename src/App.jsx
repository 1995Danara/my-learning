import { restaurants } from "./mock"

function App() {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <h3>Меню</h3>
          <ul>
            {restaurant.menu.map((dish, index) => (
              <li key={index}>{dish}</li>
            ))}
          </ul>
          <h3>Отзывы</h3>
          <ul>
            {restaurant.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default App
