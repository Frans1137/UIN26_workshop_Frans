import { useState } from 'react'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'



function App() {
    
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Melk',
            quantity: 1,
            checked: true
        }
    ])

    const addItem = (name, quantity) => {
        setItems(prev => [...prev, 
            {
                id: Date.now(),
                name,
                quantity,
                checked: false
            }
        ])
    }

    const updateQuantity = (id, delta) => {
        setItems(prev =>
            prev.map(item =>
                item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + delta)}
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
        setItems(prev => prev.filter(item => item.id !== id))
    }

    return (
        <main className='container'>
            <h1>Handleliste</h1>

            <AddForm onAdd={addItem} />
            
            <ShoppingList
                items={items}
                onToggle={toggleChecked}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem} 
                />
        </main>
    )
}

export default App