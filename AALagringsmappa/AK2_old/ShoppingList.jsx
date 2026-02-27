 // components/ShoppingList.jsx
import ShoppingItem from './ShoppingItem'

function ShoppingList({ items, onToggle, onSetQuantity, onRemove }) {
  if (!items || items.length === 0) {
    return <p className="empty">Ingen varer i handleliste</p>
  }

  return (
    <ul className="shopping-list" aria-live="polite">
      {items.map(item => (
        <ShoppingItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onSetQuantity={onSetQuantity}
          onRemove={onRemove}
        />
      ))}
    </ul>
  )
}

export default ShoppingList
