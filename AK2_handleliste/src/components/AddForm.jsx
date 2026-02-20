// Jeg sliter litt med å forstå logikken i react og har fått mye hjelp av ChatGPT under denne oppgaven
// komplett ChatGPT chatlogg: https://chatgpt.com/share/69976c25-e8b0-800c-bf00-9d530e69a5f3

import { useState } from "react";

function AddForm({onAdd}) {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [nameError, setNameError] = useState('')
    const [quantityError, setQuantityError] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        let hasError = false

        setNameError('')
        setQuantityError('')

        if (!name.trim()) {
            setNameError("Du må legge inn et varenavn!")
            hasError = true
        }

        if (quantity === '' || Number(quantity) < 1) {
            setQuantityError('Du må oppgi antall, minst 1')
            hasError = true
        }

        if (hasError)
        return

        onAdd(name.trim(), Number(quantity))
        setName('')
        setQuantity(1)
    }

    return (
        <form onSubmit={handleSubmit} className="input">
            <label>
                <p>Vare</p> 
                <input
                    className="input"
                    type="text"
                    maxLength={40}
                    placeholder="Egg.."
                    value={name}
                    onChange={e => {setName(e.target.value)
                        if (nameError) setNameError('')
                        }
                    }
                    />
                    {nameError && <p className="error-message">{nameError}</p>}
            </label>
            <label>
                <p>Antall</p> 
                <input 
                    className="input"
                    type="number"
                    min={1}
                    max={1000}
                    value={quantity}
                    onChange={e => {
                        setQuantity(e.target.value)
                        if (quantityError) setQuantityError('')}} 
                    />
                    {quantityError && (<p className="error-message">{quantityError}</p>)}
            </label>
            <span className="addbtn">
                <button className="addbtn" type="submit">Legg til vare</button>
            </span>
        </form>
    )
}

export default AddForm