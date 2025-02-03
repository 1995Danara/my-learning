import styles from "./styles.module.scss"

export const Reviews = ({ reviews }) => (
  <div className={styles.reviewsContainer}>
    <h3 className={styles.reviewsTitle}>Reviews</h3>
    <ul className={styles.reviewsList}>
      {reviews.map((review) => (
        <li key={review.id} className={styles.reviewItem}>
          <strong>{review.user}:</strong> <p>{review.text}</p>
        </li>
      ))}
    </ul>
  </div>
)
