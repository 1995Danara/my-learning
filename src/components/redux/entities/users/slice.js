import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { getUsers } from "./getUsers"

import {
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../constants.js"

const entityAdapter = createEntityAdapter()

export const userSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState({
    getUsersStatus: REQUEST_STATUS_IDLE,
  }),
  selectors: {
    selectGetUsersStatus: (state) => state.getUsersStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.getUsersStatus = REQUEST_STATUS_PENDING
      })
      .addCase(getUsers.rejected, (state) => {
        state.getUsersStatus = REQUEST_STATUS_REJECTED
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload)
        state.getUsersStatus = REQUEST_STATUS_FULFILLED
      }),
})

const selectUsersSlice = (state) => state.users

export const {
  selectById: selectUserById,
  selectValueUsers: selectValueUsers,
} = entityAdapter.getSelectors(selectUsersSlice)

export const { selectGetUsersStatus } = userSlice.selectors
