import { useState } from "react";

function AddForm({ onAdd }) {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim()) return

        onAdd(name, quantity)
        setName('')
        setQuantity(1)
    }

    return (
        <form onSubmit={handleSubmit} className="input">
            <input
                type="text"
                placeholder="Egg..."
                value={name}
                onChange={e => setName(e.target.value)}
                />

                <div className="quantity">
                    {/* <input 
                        type="number"
                        value={quantity}
                        onChange={e => setQuantity(e.target.quantity)} /> */}
                    <button type="button" className="quantitybtn" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                    <span>{quantity}</span>
                    <button type="button" className="quantitybtn" onClick={() => setQuantity(q => q + 1)}>+</button>
                </div>

                <button className="addbtn" type="submit">Legg til vare</button>
        </form>
    )
}

export default AddForm