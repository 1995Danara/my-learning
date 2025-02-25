import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectDishById } from "./slice"

export const getDishById = createAsyncThunk(
  "restaurant/getDishById",
  async (id, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/dish/" + id, {})
    const result = await response.json()

    if (!result) {
      return rejectWithValue("no data")
    }

    return result
  },
  {
    condition: (id, { getState }) => {
      return !selectDishById(getState(), id)
    },
  },
)
