//  fjernet unødigde importer og funksjon useState i funksjon App 3 
import './App.css'
import { Routes, Route } from 'react-router-dom' // 5 lagt til
import Home from './components/Home'
import Categories from './components/Categories'
import About from './components/About'
import Layout from './components/Layout'
import Category from './components/Category'
import CategoryLayout from './components/CategoryLayout'
import { useEffect, useState } from 'react'

function App() {

  return (
    // fjernet html-kode 4
    <Layout>
      <Routes> {/* 6  */}
        <Route index element={<Home />} />              {/* 7 Elementer fra egne filer som vises i HTML */}
        <Route path='categories' element={<CategoryLayout />}>  {/* Route tag holdes åpen for å neste route til nye elementer */}
          <Route index element={<h1>Kategorier</h1>} />
          <Route path=':slug' element={<Categories/>} />
          <Route path=':slug/:cat' element={<Category />} />  {/* : brukes som en dynamisk slug/spor. Valgfritt slug-ord */}
        </Route>                                        {/* Route-nesting avsluttes her */}
        <Route path='about' element={<About />}/>
      </Routes>
    </Layout>
  )
}

export default App
