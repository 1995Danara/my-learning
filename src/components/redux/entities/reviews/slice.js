import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { getReviews } from "./getReviews"
import {
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
  REQUEST_STATUS_FULFILLED,
} from "../../constants"

const entityAdapter = createEntityAdapter()

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({
    getReviewsStatus: REQUEST_STATUS_IDLE,
  }),
  selectors: {
    selectGetReviewsStatus: (state) => state.getReviewsStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.getReviewsStatus = REQUEST_STATUS_PENDING
      })
      .addCase(getReviews.rejected, (state) => {
        state.getReviewsStatus = REQUEST_STATUS_REJECTED
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.addMany(state, payload)
        state.getReviewsStatus = REQUEST_STATUS_FULFILLED
      }),
})

const selectReviewsSlice = (state) => state.reviews

export const { selectById: selectReviewById } =
  entityAdapter.getSelectors(selectReviewsSlice)

export const { selectGetReviewsRequestStatus } = reviewsSlice.selectors
