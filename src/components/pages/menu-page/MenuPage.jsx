import { useParams } from "react-router"
import { Menu } from "../../menu/Menu"

import { useGetRestaurantByIdQuery } from "../../redux/services-api/api"

export const MenuPage = () => {
  const { restaurantId } = useParams()
  const {
    data: restaurant,
    isLoading,
    error,
  } = useGetRestaurantByIdQuery(restaurantId)

  if (isLoading) return <div>Loading restaurant...</div>
  if (error) return <div>Error loading restaurant</div>

  return (
    <div>
      <h1>{restaurant?.name}</h1>
      <Menu restaurantId={restaurantId} />
    </div>
  )
}
