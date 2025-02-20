import { createSelector, createSlice } from "@reduxjs/toolkit"
export const cartSlice = createSlice({
  name: "cart",
  initialState: {},

  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1
    },

    removeFromCart: (state, { payload }) => {
      if (state[payload]) {
        state[payload] = state[payload] - 1

        if (state[payload] <= 0) {
          delete state[payload]
        }
      }
    },
    selectors: {
      selectorAmountById: (state, id) => state[id],
    },
  },
})

export const selectorAmountById = (state, id) => {
  return state.cart?.[id] || 0
}

export const { addToCart, removeFromCart } = cartSlice.actions
const selectCartSlice = (state) => state.cart
export const selectCartItemsIds = createSelector([selectCartSlice], (cart) =>
  Object.keys(cart),
)
