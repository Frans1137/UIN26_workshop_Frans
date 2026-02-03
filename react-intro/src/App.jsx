import './App.css'
import Title from './components/Title'

function App() {

  const titles = ["Kategorier", "Om oss", "Produkter"]

  return (
    <main>

      {titles.map((item, i) => <Title key={i} title={item} />)}
    
      <h2>Dette er kjempegøy!</h2>
    </main>
  )
}
export default App

