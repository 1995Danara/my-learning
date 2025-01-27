import { useReducer } from "react"

const INITIAL_VALUE = {
  name: "",
  text: "",
  rating: "",
}
const SET_NAME_ACTION = "SET_NAME"
const CLEAR_FORM = "CLEAR_FORM"

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return {
        ...state,
        name: payload,
      }
    case "TEXT_ACTION":
      return {
        ...state,
        text: payload,
      }
    case "RATING_ACTION":
      return {
        ...state,
        rating: payload,
      }
    case "CLEAR_FORM":
      return INITIAL_VALUE
    default:
      return {
        state,
      }
  }
}

export const ReviewsForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE)
  const setName = (value) => dispatch({ type: SET_NAME_ACTION, payload: value })
  const setText = (value) => dispatch({ type: "TEXT_ACTION", payload: value })
  const setRating = (value) =>
    dispatch({ type: "RATING_ACTION", payload: value })
  const clearForm = () => dispatch({ type: CLEAR_FORM })

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
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="rating"
                value={value}
                checked={rating === String(value)}
                onChange={() => setRating(String(value))}
              />
              {value}
            </label>
          ))}
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
