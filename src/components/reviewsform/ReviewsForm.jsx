import { Counter } from "../counter/Counter"
import styles from "./styles.module.scss"
import { useReviewForm } from "./useReviewForm"
import { useAddReviewMutation } from "../redux/services-api/api"
import { useUser } from "../user/useUser"

export const ReviewsForm = ({ restaurantId }) => {
  const {
    form,
    setName,
    setText,
    setRatingDecrement,
    setRatingIncrement,
    clearForm,
  } = useReviewForm()

  const { name, text, rating } = form
  const { user } = useUser()
  const [addReview] = useAddReviewMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      return
    }

    const reviewData = {
      userId: user,
      name,
      text,
      rating,
    }

    try {
      await addReview({ restaurantId, review: reviewData }).unwrap()
      clearForm()
    } catch (error) {
      console.error("Error sending feedback:", error)
    }
  }

  if (!user) {
    return <div>Please login to add a review</div>
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
        <button
          type="button"
          onClick={clearForm}
          className={styles.clearButton}
        >
          Clear
        </button>
      </form>
    </div>
  )
}
