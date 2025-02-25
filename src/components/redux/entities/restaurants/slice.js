import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { getRestaurants } from "./getRestaurants.js"
import {
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../constants.js"
import { getRestaurantById } from "./getRestaurantById.js"

const entityAdapter = createEntityAdapter()

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState({
    getRestaurantsRequestStatus: REQUEST_STATUS_IDLE,
  }),
  selectors: {
    selectGetRestaurantsRequestStatus: (state) =>
      state.getRestaurantsRequestStatus,
    selectGetRestaurantByIdRequestStatus: (state) =>
      state.getRestaurantByIdRequestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.getRestaurantsRequestStatus = REQUEST_STATUS_PENDING
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.getRestaurantsRequestStatus = REQUEST_STATUS_REJECTED
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload)
        state.getRestaurantsRequestStatus = REQUEST_STATUS_FULFILLED
      })
      .addCase(getRestaurantById.pending, (state) => {
        state.getRestaurantByIdRequestStatus = REQUEST_STATUS_PENDING
      })
      .addCase(getRestaurantById.rejected, (state) => {
        state.getRestaurantByIdRequestStatus = REQUEST_STATUS_REJECTED
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.addOne(state, payload)
        state.getRestaurantByIdRequestStatus = REQUEST_STATUS_FULFILLED
      }),
})

const selectRestaurantsSlice = (state) => state.restaurants

export const {
  selectById: selectRestaurantById,
  selectIds: selectRestaurantsIds,
  selectTotal: selectTotalRestaurants,
} = entityAdapter.getSelectors(selectRestaurantsSlice)

export const {
  selectGetRestaurantsRequestStatus,
  selectGetRestaurantByIdRequestStatus,
} = restaurantsSlice.selectors
