// Jeg sliter litt med å forstå logikken i react og har fått mye hjelp av ChatGPT under denne oppgaven
// komplett ChatGPT chatlogg: https://chatgpt.com/share/69976c25-e8b0-800c-bf00-9d530e69a5f3 

import { useState } from 'react'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'
import './style/style.css'

function App() {
    
    const [items, setItems] = useState([
        {id: 1, name: 'Melk', quantity: 1, checked: true},
        {id: 2, name: 'Brød', quantity: 1, checked: false}
    ])

    const addItem = (name, quantity) => {
        setItems(prev => [{
            id: Date.now(), 
            name, 
            quantity, 
            checked: false},
            ...prev
        ])
    }

    const setQuantity = (id, newQuantity) => {
        setItems(prev =>
                prev.map(item =>
                item.id === id
                ? { ...item, quantity: Math.max(1, newQuantity)}
                : item
            )
        )
    }

    const toggleChecked = (id) => {
        setItems(prev =>
            prev.map(item =>
                item.id === id
                ? { ...item, checked: !item.checked}
                : item
            )
        )
    }

    const removeItem = (id) => {
        setItems(prev => prev.filter(item => 
            item.id !== id))
    }

    return (
        <main className='container'>
            <header>
                <h1>Handleliste</h1>
            </header>

            <section>
            <AddForm onAdd={addItem} />
            </section>
            
            <section>
            <ShoppingList
                items={items}
                onToggle={toggleChecked}
                onSetQuantity={setQuantity}
                onRemove={removeItem} 
                />
            </section>
        </main>
    )
}

export default App