import { createSlice } from "@reduxjs/toolkit"
import { normalizedRestaurants } from "../../../normalized-mock"

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {}),
}
export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    addReview: (state, action) => {
      const { restaurantId, review } = action.payload
      const restaurant = state.entities[restaurantId]
      if (restaurant) {
        restaurant.reviews.push(review)
      }
    },
  },
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantEntities: (state) => state.entities,
    selectRestaurantById: (state, id) => state.entities[id],
  },
})

export const {
  selectRestaurantIds,
  selectRestaurantEntities,
  selectRestaurantById,
} = restaurantsSlice.selectors

export const { addReview } = restaurantsSlice.actions
export default restaurantsSlice.reducer
