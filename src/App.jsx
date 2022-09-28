import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"

import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import './App.css';
import NavBar from './components/NavBar';
import ProductPage from "./components/ProductPage";
import { CartProvider} from "./CartContext"


const App = ()=>{

  // const [user, setUser] = useState(null);

  return (
    <div>
      <Router>
        <CartProvider>
          <NavBar/>
            <SearchBar/>
          <Routes>
            <Route path="/products/:id" element={<ProductPage/>} />
            <Route path="/" element={<ProductList/>} />
          </Routes>
        </CartProvider>
      </Router>
    </div>

  )
}

export default App;
