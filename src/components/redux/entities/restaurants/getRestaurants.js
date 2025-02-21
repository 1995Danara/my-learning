import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectTotalRestaurants } from "./slice.js"

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (id, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants", {})
    const result = await response.json()

    if (!result.length) {
      return rejectWithValue("no data")
    }

    return result
  },
  {
    condition: (_, { getState }) => {
      return !selectTotalRestaurants(getState())
    },
  },
)
