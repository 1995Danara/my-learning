import { useReducer } from "react"
import { Counter } from "../counter/Counter"
const INITIAL_VALUE = {
  name: "",
  text: "",
  rating: 0,
}

const SET_NAME_ACTION = "SET_NAME"
const SET_TEXT_ACTION = "SET_TEXT"
const SET_RATING_ACTION = "SET_RATING"
const CLEAR_FORM_ACTION = "CLEAR_FORM"

const reducer = (state, { type, payload }) => {
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

export const ReviewsForm = () => {
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

  const { name, text, rating } = form

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <span>Rating</span>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <Counter
            count={rating}
            onDecrement={setRatingDecrement}
            onIncrement={setRatingIncrement}
          />
        </div>
        <div>
          <button
            onClick={clearForm}
            style={{ padding: "10px 10px", color: "black" }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}
