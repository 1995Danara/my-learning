import { useParams } from "react-router"
import { Menu } from "../../menu/Menu"

import { useSelector } from "react-redux"
import { selectRestaurantEntities } from "../../redux/entities/restaurants/slice"

export const MenuPage = () => {
  const { restaurantId } = useParams()
  const restaurantEntities = useSelector(selectRestaurantEntities)
  const restaurant = restaurantEntities[restaurantId]

  return <Menu menu={restaurant.menu} />
}
