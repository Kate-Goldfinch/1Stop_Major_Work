import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import { CartProvider } from "./hooks/useCart";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AdminPage from "./pages/AdminPage";
import AdminItemPage from "./pages/AdminItemPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminProductsPage from "./pages/AdminProductsPage";

const App = () => {
  // const [user, setUser] = useState(null);
  const { isLoading, error} =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

    return (
      <>
        <Router>
          <CartProvider>
            <Routes>
                <Route element={<AdminPage/>}>
                  <Route path="/admin/products" element={<AdminProductsPage />} />
                  <Route path="/admin/orders" element={<AdminOrdersPage />} />
                  <Route path="/admin/products/:id" element={<AdminItemPage />} />
                  <Route path="/admin"  element={<AdminOrdersPage />} />
                </Route>
                <Route element = {<NavBar />}>
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/products/:id" element={<ProductPage />} />
                  <Route path="/" element={<HomePage />} />
                  </Route>
            </Routes>
          </CartProvider>
        </Router>
      </>
    );
};

export default App;
