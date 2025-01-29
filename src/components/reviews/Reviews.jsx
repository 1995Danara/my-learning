export const Reviews = ({ reviews }) => (
  <div>
    <h3>Reviews</h3>
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <strong>{review.user}:</strong> {review.text}
        </li>
      ))}
    </ul>
  </div>
)
