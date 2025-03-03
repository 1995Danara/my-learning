import { configureStore } from "@reduxjs/toolkit"
import { dishesSlice } from "./entities/dishes/slice"
import { restaurantsSlice } from "./entities/restaurants/slice"
import { reviewsSlice } from "./entities/reviews/slice"
import { userSlice } from "./entities/users/slice"
import { cartSlice } from "./entities/cart/slice"
import { apiSlice } from "./services-api/api"

export const store = configureStore({
  reducer: {
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
})
