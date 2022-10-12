import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import { CartProvider } from "./hooks/useCart";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  // const [user, setUser] = useState(null);
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {user.name}{" "}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
        <Router>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/search" element={<SearchPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </CartProvider>
        </Router>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={loginWithRedirect}>Log in</button>
        <Router>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/search" element={<SearchPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </CartProvider>
        </Router>
      </div>
    );
  }
};

export default App;
