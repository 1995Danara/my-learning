import { useGetRestaurantReviewByIdQuery } from "../redux/services-api/api"
import styles from "./styles.module.scss"

export const Reviews = ({ restaurantId }) => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useGetRestaurantReviewByIdQuery(restaurantId)

  if (isLoading) return <div>Loading reviews...</div>
  if (error) return <div>Error loading reviews</div>

  return (
    <div className={styles.reviewsContainer}>
      <h3 className={styles.reviewsTitle}>Reviews</h3>
      <ul className={styles.reviewsList}>
        {reviews?.map((review) => (
          <li key={review.id} className={styles.reviewItem}>
            <strong>{review.userId}:</strong> <p>{review.text}</p>
            <div>Rating: {review.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
