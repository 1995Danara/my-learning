import { useParams } from "react-router"
import { ReviewsForm } from "../../reviewsform/ReviewsForm"
import { Reviews } from "../../reviews/Reviews"

export const ReviewsPage = () => {
  const { restaurantId } = useParams()

  return (
    <div>
      <ReviewsForm restaurantId={restaurantId} />
      <Reviews restaurantId={restaurantId} />
    </div>
  )
}
