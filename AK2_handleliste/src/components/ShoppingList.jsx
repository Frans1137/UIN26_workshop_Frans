import ShoppingItem from './ShoppingItem'

function ShoppingList({ items, onToggle, onUpdateQuantity, onRemove }) {
    if (items.length === 0) {
        return <p>Ingen varer i handleliste</p>
    }
    return (
    <ul className="shopping-list">
      {items.map(item => (
        <ShoppingItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
    </ul>
    )
}

 export default ShoppingList