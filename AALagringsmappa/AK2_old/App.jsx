// App.jsx
import { useState, useCallback } from 'react'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'
import './style/style.css'

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Melk', quantity: 1, checked: true },
    { id: 2, name: 'Brød', quantity: 1, checked: false }
  ])

  const addItem = useCallback((name, quantity) => {
    setItems(prev => [
      { id: Date.now(), name, quantity, checked: false },
      ...prev
    ])
  }, [])

  const setQuantity = useCallback((id, newQuantity) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    )
  }, [])

  const toggleChecked = useCallback((id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }, [])

  const removeItem = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }, [])

  return (
    <main className="container">
      <header>
        <h1>Handleliste</h1>
      </header>

      <section aria-label="Legg til vare">
        <AddForm onAdd={addItem} />
      </section>

      <section aria-label="Handleliste">
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
