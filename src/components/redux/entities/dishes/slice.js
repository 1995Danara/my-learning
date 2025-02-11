import { createSlice } from "@reduxjs/toolkit"
import { normalizedDishes } from "../../../normalized-mock"

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {}),
}
export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    addReview: (state, action) => {
      const { id, price, text, ingredients } = action.payload
      if (state.entities[id]) {
        state.entities[id] = {
          ...state.entities[id],
          price,
          text,
          ingredients,
        }
      }
    },
  },
})
