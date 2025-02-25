import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { Restaurants } from "../restaurants/Restaurants"
import { Layout } from "../layout/Layout"
import { ThemeContextProvider } from "../themecontext/ThemeContextProvider"
import { UserContextProvider } from "../usercontext/UserContextProvider"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { ReviewsPage } from "../pages/reviews-page/ReviewsPage"
import { RestaurantPage } from "../pages/restaurant-page/RestaurantPage"
import { MenuPage } from "../pages/menu-page/MenuPage"
import { HomePage } from "../pages/home-page/ HomePage"
import { DishPage } from "../pages/dish-page/DishPage"
import { CartPage } from "../pages/cart-page/CartPage"

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/cart" element={<CartPage />} />
                <Route
                  path="/restaurants/:restaurantId"
                  element={<RestaurantPage />}
                >
                  <Route index element={<Navigate to="menu" replace />} />
                  <Route path="menu" element={<MenuPage />} />
                  <Route path="reviews" element={<ReviewsPage />} />
                </Route>
                <Route path="/dish/:dishId" element={<DishPage />}></Route>
              </Routes>
            </Layout>
          </Router>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  )
}
