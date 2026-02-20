function ShoppingItem({ item, onToggle, onSetQuantity, onRemove }) {
  // Jeg ordna en funksjon for å slette varer fra handleliste. For å unngå å legge til en ekstra slett-knapp 
  // valgte jeg å gi valg om å slette varen dersom man trykker minus når varen har antall 1. 
  const handleDecrease = ()=>{
    if (item.quantity === 1) {
      const confirmed = window.confirm(`Vil du slette "${item.name}" fra handleliste?`)
      if (confirmed) onRemove(item.id)
      return
    }
    onSetQuantity(item.id, item.quantity -1)
  }

  return (
    <li>
      <form className="items" onSubmit={(e) => e.preventDefault()} >
        <label>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => onToggle(item.id)}
          />
        </label>

        <span>
          <p className="item-name">{item.name}</p> 
          <p className="item-quant">{item.quantity}</p>
        </span>

        <section className="btns">
          <button
            type="button"
            className="quantbtn"
            onClick={() => onSetQuantity(item.id, item.quantity + 1)}
          >+</button>

          <button
            type="button"
            className="quantbtn"
            onClick={handleDecrease}
          >−</button>
        </section>
      </form>
    </li>
  )
}

export default ShoppingItem