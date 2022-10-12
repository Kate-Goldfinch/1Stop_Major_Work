import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProductPage from "./pages/ProductPage";
import SearchPage from './pages/SearchPage';
import { CartProvider } from './hooks/useCart';

const App = ()=>{

  // const [user, setUser] = useState(null);

  return (
    <div>
      <Router>
        <CartProvider>
          <NavBar/>

          <Routes>
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/products/:id" element={<ProductPage/>} />
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </CartProvider>
      </Router>
    </div>

  )
}

export default App;
