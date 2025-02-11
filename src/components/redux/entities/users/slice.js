import { createSlice } from "@reduxjs/toolkit"
import { normalizedUsers } from "../../../normalized-mock"

const initialState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {}),
}

export const userSlice = createSlice({
  name: "users",
  initialState,
})
