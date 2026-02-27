
// components/ShoppingItem.jsx
import React from 'react'

function ShoppingItem({ item, onToggle, onSetQuantity, onRemove }) {
  const handleDecrease = () => {
    if (item.quantity === 1) {
      const confirmed = window.confirm(`Vil du slette "${item.name}" fra handleliste?`)
      if (confirmed) onRemove(item.id)
      return
    }
    onSetQuantity(item.id, item.quantity - 1)
  }

  const handleQuantityChange = (e) => {
    const v = e.target.value
    if (v === '') return
    const num = Number(v)
    if (!Number.isFinite(num) || num < 1) return
    onSetQuantity(item.id, num)
  }

  return (
    <li>
      <form className="items" onSubmit={(e) => e.preventDefault()} aria-label={`Vare ${item.name}`}>
        <label>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => onToggle(item.id)}
            aria-label={`Kryss av ${item.name}`}
          />
        </label>

        <span>
          <p className="item-name">{item.name}</p>
          <p className="item-quant" aria-live="polite">{item.quantity}</p>
        </span>

        <input
          className="quantitybtn"
          type="number"
          min={1}
          value={item.quantity}
          onChange={handleQuantityChange}
          aria-label={`Antall for ${item.name}`}
        />

        <nav className="actions" aria-label={`Kontroller for ${item.name}`}>
          <button
            type="button"
            onClick={() => onSetQuantity(item.id, item.quantity + 1)}
            aria-label={`Øk antall for ${item.name}`}
          >+</button>

          <button
            type="button"
            onClick={handleDecrease}
            aria-label={`Reduser antall for ${item.name}`}
          >−</button>
        </nav>
      </form>
    </li>
  )
}

export default React.memo(ShoppingItem)
