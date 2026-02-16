
function ShoppingItem({ item, onToggle, onUpdateQuantity, onRemove }) {
    return (
        <li className="{`item ${item.checked ? 'checked' : ''}`}">
            <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggle(item.id)}
      />

      <span>
        {item.name} ({item.quantity})
      </span>

      <div className="actions">
        <button onClick={() => onUpdateQuantity(item.id, -1)}>−</button>
        <button onClick={() => onUpdateQuantity(item.id, +1)}>+</button>
        <button onClick={() => onRemove(item.id)}>Slett</button>
      </div>
    </li>
  )
}

export default ShoppingItem
