import styles from "./styles.module.scss"
import { useSelector } from "react-redux"
export const Reviews = () => {
  const reviews = useSelector((state) => state.reviews.entities)
  return (
    <div className={styles.reviewsContainer}>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      <ul className={styles.reviewsList}>
        {Object.values(reviews).map((review) => (
          <li key={review.id} className={styles.reviewItem}>
            <strong>{review.userId}:</strong> <p>{review.text}</p>
            <div>Rating: {review.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
