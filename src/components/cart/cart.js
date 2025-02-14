import { CartContainer } from "./cart-container"
export const Cart = ({ itemsIds }) => {
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {itemsIds.map((id) => (
          <li key={id}>
            <CartContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  )
}
