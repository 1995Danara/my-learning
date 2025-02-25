import { createAsyncThunk } from "@reduxjs/toolkit"

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      "http://localhost:3001/api/reviews?restaurantId=" + id,
      {},
    )
    const result = await response.json()

    if (!result.length) {
      return rejectWithValue("no data")
    }
    return result
  },
)
