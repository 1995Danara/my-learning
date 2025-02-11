import { createSlice } from "@reduxjs/toolkit"
import { normalizedReviews } from "../../../normalized-mock"

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {}),
}
export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, action) => {
      const { id, userId, text, rating } = action.payload
      state.entities[id] = { id, userId, text, rating }
      state.ids.push(id)
    },
  },
})

export const { addReview } = reviewsSlice.actions
