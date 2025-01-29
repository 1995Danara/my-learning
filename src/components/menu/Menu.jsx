export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>
            {dish.name} ${dish.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
