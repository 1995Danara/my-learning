import { useParams } from "react-router"
import { Menu } from "../../menu/Menu"

import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurants/slice"

export const MenuPage = () => {
  const { restaurantId } = useParams()
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  )

  return <Menu menu={restaurant.menu} />
}
