import { Counter } from "../counter/Counter"
import styles from "./styles.module.scss"
import { useReviewForm } from "./useReviewForm"

export const ReviewsForm = () => {
  const {
    form,
    setName,
    setText,
    setRatingDecrement,
    setRatingIncrement,
    clearForm,
  } = useReviewForm()
  const { name, text, rating } = form

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
