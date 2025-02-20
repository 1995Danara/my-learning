import { useParams } from "react-router"
import { ReviewsForm } from "../../reviewsform/ReviewsForm"

export const ReviewsPage = () => {
  const { restaurantId } = useParams()

  return <ReviewsForm restaurantId={restaurantId} />
}
