import { useSelector } from "react-redux"
import { selectCartItemsIds } from "../redux/entities/cart/slice"
import { Cart } from "./Сart"

export const CartContainer = () => {
  const itemsIds = useSelector(selectCartItemsIds)
  if (!itemsIds.length) {
    return null
  }
  return <Cart itemsIds={itemsIds} />
}
