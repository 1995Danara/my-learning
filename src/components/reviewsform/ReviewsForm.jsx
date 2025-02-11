import { useReducer } from "react"
import { Counter } from "../counter/Counter"
import styles from "./styles.module.scss"
import { use } from "react"
import { UserContextName } from "../usercontext/usercontextname"

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
  const { user } = use(UserContextName)
  if (!user) {
    return null
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <span>Text</span>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <div>
        <span>Rating</span>
        <div className={styles.ratingContainer}>
          <Counter
            count={rating}
            onDecrement={setRatingDecrement}
            onIncrement={setRatingIncrement}
          />
        </div>
      </div>

      <button onClick={clearForm} className={styles.clearButton}>
        Clear
      </button>
    </div>
  )
}
