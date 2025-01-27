export const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <span>{count}</span>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}
