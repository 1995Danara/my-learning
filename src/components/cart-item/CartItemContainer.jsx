import { useSelector } from "react-redux"
import { selectorAmountById } from "../redux/entities/cart/slice"
import { selectDishById } from "../redux/entities/dishes/slice"
import { CartItem } from "./cartItem"
export const CartItemContainer = ({ id }) => {
  const amount = useSelector((state) => selectorAmountById(state, id))
  const dish = useSelector((state) => selectDishById(state, id))
  if (!dish) {
    return null
  }
  return <CartItem dishId={id} amount={amount} dishName={dish.name} />
}
