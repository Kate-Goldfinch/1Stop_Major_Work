import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import { CartProvider } from "./hooks/useCart";
import { useAuth0 } from "@auth0/auth0-react";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/SingleProductPage";
import SearchPage from "./pages/SearchPage";
import AdminPage from "./pages/AdminPage";
import AdminItemPage from "./pages/AdminItemPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminProductsPage from "./pages/AdminProductsPage";
import ProductsPage from "./pages/ProductsPage";




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
              {/* Routes for admin interface */}
                <Route path = "/admin" element={<AdminPage/>}>
                  <Route index element={<AdminProductsPage />} />
                  <Route path="products/:id" element={<AdminItemPage />} />
                  <Route path="orders" element={<AdminOrdersPage />} />
                </Route>
                {/* Routes for storefront */}
                <Route path="/" element={<HomePage />}>
                  <Route index element={<ProductsPage/>} />
                  <Route path="products/:id" element={<ProductPage />} />
                  <Route path="products/:id" element={<ProductPage />} />
                  <Route path="search" element={<SearchPage />} />
                </Route>
            </Routes>
          </CartProvider>
        </Router>
      </>
    );
};

export default App;
