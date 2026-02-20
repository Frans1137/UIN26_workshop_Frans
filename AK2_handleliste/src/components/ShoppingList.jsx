// Jeg sliter litt med å forstå logikken i react og har fått mye hjelp av ChatGPT under denne oppgaven
// komplett ChatGPT chatlogg: https://chatgpt.com/share/69976c25-e8b0-800c-bf00-9d530e69a5f3

import ShoppingItem from './ShoppingItem'

function ShoppingList({ items, onToggle, onSetQuantity, onRemove }) {
    if (items.length === 0) {
        return <p className='empty'>Ingen varer i handleliste</p>
    }
    return (
    <ul className="shopping-list">
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