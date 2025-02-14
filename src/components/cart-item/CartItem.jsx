import { DishCounter } from "../dishcounter/DishCounter"
export const CartItem = ({ dishId, amount, dishName }) => {
  return (
    <>
      <div>
        {dishName}-<p>{amount}</p>
      </div>
      <DishCounter dishId={dishId} />
    </>
  )
}
