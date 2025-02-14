const INITIAL_VALUE = {
  name: "",
  text: "",
  rating: 0,
}

const SET_NAME_ACTION = "SET_NAME"
const SET_TEXT_ACTION = "SET_TEXT"
const SET_RATING_ACTION = "SET_RATING"
const CLEAR_FORM_ACTION = "CLEAR_FORM"

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return {
        ...state,
        name: payload,
      }
    case SET_TEXT_ACTION:
      return {
        ...state,
        text: payload,
      }
    case SET_RATING_ACTION:
      return {
        ...state,
        rating: payload,
      }
    case CLEAR_FORM_ACTION:
      return INITIAL_VALUE
    default:
      return state
  }
}
export {
  INITIAL_VALUE,
  SET_NAME_ACTION,
  SET_TEXT_ACTION,
  SET_RATING_ACTION,
  CLEAR_FORM_ACTION,
}
