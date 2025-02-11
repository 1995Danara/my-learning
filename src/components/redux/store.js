import { configureStore } from "@reduxjs/toolkit"
import { dishesSlice } from "./entities/dishes/slice"
import { restaurantsSlice } from "./entities/restaurants/slice"
import { reviewsSlice } from "./entities/reviews/slice"
import { userSlice } from "./entities/users/slice"

export const store = configureStore({
  reducer: {
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
})
