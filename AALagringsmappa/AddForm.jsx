// components/AddForm.jsx
import { useState } from 'react'

function AddForm({ onAdd }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const trimmed = name.trim()
    if (!trimmed && (quantity === '' || quantity === null)) {
      setError('Du må oppgi varenavn og antall.')
      return
    }
    if (!trimmed) {
      setError('Du må oppgi varenavn.')
      return
    }
    if (quantity === '' || quantity === null) {
      setError('Du må oppgi antall.')
      return
    }
    const qtyNum = Number(quantity)
    if (!Number.isFinite(qtyNum) || qtyNum < 1) {
      setError('Antall må være et tall større enn 0.')
      return
    }

    onAdd(trimmed, qtyNum)
    setName('')
    setQuantity(1)
  }

  return (
    <form className="input" onSubmit={handleSubmit} noValidate aria-label="Legg til vare">
      <label>
        Vare
        <input
          id="item-name"
          name="name"
          type="text"
          maxLength={40}
          placeholder="Vare"
          value={name}
          onChange={e => setName(e.target.value)}
          aria-required="true"
        />
      </label>

      <label>
        Antall
        <input
          id="item-quantity"
          name="quantity"
          type="number"
          min={1}
          max={1000}
          value={quantity}
          onChange={e => {
            const v = e.target.value
            setQuantity(v === '' ? '' : Number(v))
          }}
          aria-required="true"
        />
      </label>

      <span className="quantbtn" aria-hidden="true">
        <button className="addbtn" type="submit">Legg til vare</button>
      </span>

      {error && <p role="alert" style={{ color: '#c44', fontSize: '14px' }}>{error}</p>}
    </form>
  )
}

export default AddForm
