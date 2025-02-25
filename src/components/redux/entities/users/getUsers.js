import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectValueUsers } from "./slice"

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (id, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/users/", {})
    const result = await response.json()

    if (!result.lenght) {
      return rejectWithValue("no data")
    }
    return result
  },
  {
    condition: (_, { getState }) => {
      return !selectValueUsers(getState())
    },
  },
)
