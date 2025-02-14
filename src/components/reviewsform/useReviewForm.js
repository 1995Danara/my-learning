import { useReducer } from "react"
import {
  INITIAL_VALUE,
  SET_NAME_ACTION,
  SET_TEXT_ACTION,
  SET_RATING_ACTION,
  CLEAR_FORM_ACTION,
  reducer,
} from "./reducer.js"

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE)

  const setName = (value) => dispatch({ type: SET_NAME_ACTION, payload: value })
  const setText = (value) => dispatch({ type: SET_TEXT_ACTION, payload: value })

  const setRatingIncrement = () => {
    if (form.rating < 5) {
      dispatch({ type: SET_RATING_ACTION, payload: form.rating + 1 })
    }
  }

  const setRatingDecrement = () => {
    if (form.rating > 0) {
      dispatch({ type: SET_RATING_ACTION, payload: form.rating - 1 })
    }
  }

  const clearForm = () => dispatch({ type: CLEAR_FORM_ACTION })

  return {
    form,
    setName,
    setText,
    setRatingDecrement,
    setRatingIncrement,
    clearForm,
  }
}
